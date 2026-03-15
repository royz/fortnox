import { writeFile } from "node:fs/promises";
import prettier from "prettier";
import { getParamsAsZodObject, getSpecFromFile } from "./utils";
import path from "node:path";

const spec = await getSpecFromFile();

const pathListFile = path.join(import.meta.dirname, "path-list.ts");


// Raw expression support: store Zod expression strings and replace them after JSON.stringify
const rawExprs: string[] = [];
function raw(expr: string): string {
  rawExprs.push(expr);
  return `__RAW_${rawExprs.length - 1}__`;
}
function injectRawExprs(json: string): string {
  return rawExprs.reduce((s, expr, i) => s.replace(`"__RAW_${i}__"`, expr), json);
}

const paths: Record<string, Record<string, string>> = {};

Object.entries(spec.paths).forEach(([path, methods]: [string, any]) => {
  Object.entries(methods).forEach(([method, operation]: [string, any]) => {
    if (!(path in paths)) {
      paths[path] = {};
    }

    const { pathParams, queryParams } = getParamsAsZodObject(operation.parameters || []);

    let options = `z.object({\n`;
    if (pathParams) {
      options += `    params: ${pathParams},\n`;
    }
    if (queryParams) {
      options += `    query: ${queryParams},\n`;
    }

    if (operation.requestBody) {
      options += `  body: z.any(),\n`;
    }
    options += `})`;

    paths[path]![method] = raw(options);
  });
});

const tsContent = injectRawExprs(JSON.stringify(paths, null, 2));
const rawTs = `import z from "zod";\nexport const paths = ${tsContent} as const;`;
const formatted = await prettier.format(rawTs, { parser: "typescript" });
await writeFile(pathListFile, formatted, "utf-8");