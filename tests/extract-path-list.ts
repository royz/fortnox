import { writeFile } from "node:fs/promises";
import path from "node:path";
import dedent from "dedent";
import prettier from "prettier";
import { getParamsAsZodObject, getSpecFromFile } from "./utils";

const spec = await getSpecFromFile("patched");

const pathListFile = path.join(import.meta.dirname, "path-list.ts");

// Raw expression support: store Zod expression strings and replace them after JSON.stringify
const rawExprs: string[] = [];
function raw(expr: string): string {
	rawExprs.push(expr);
	return `__RAW_${rawExprs.length - 1}__`;
}
function injectRawExprs(json: string): string {
	return rawExprs.reduce(
		(s, expr, i) => s.replace(`"__RAW_${i}__"`, expr),
		json,
	);
}

const paths: Record<
	string,
	Record<string, { input: string; output: string }>
> = {};

const zodResponseSchemaNames: string[] = [];

Object.entries(spec.paths).forEach(([path, methods]: [string, any]) => {
	Object.entries(methods).forEach(([method, operation]: [string, any]) => {
		if (!(path in paths)) {
			paths[path] = {};
		}

		const { pathParams, queryParams, fullyOptional } = getParamsAsZodObject(
			operation.parameters || [],
		);

		let zodResponseSchemaName: string | null = null;

		const responseSchema =
			operation.responses?.["200"]?.content?.["application/json"]?.schema?.$ref
				?.split("/")
				?.at(-1) || null;

		if (responseSchema) {
			zodResponseSchemaName = responseSchema
				? `z${responseSchema[0].toUpperCase()}${responseSchema
						.slice(1)
						.replace(/(-|_)([a-z])/gi, (match: any, g1: any, g2: any) =>
							g2.toUpperCase(),
						)}`
						.replaceAll("URL", "Url")
						.replaceAll("EUVatLimit", "EuVatLimit")
				: null;
			if (zodResponseSchemaName) {
				zodResponseSchemaNames.push(zodResponseSchemaName);
			}
		}

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

		if (fullyOptional) {
			options += `.optional()`;
		}

		paths[path]![method] = {
			input: raw(options),
			output: raw(
				zodResponseSchemaName ? zodResponseSchemaName : `z.unknown()`,
			),
		};
	});
});

const tsContent = injectRawExprs(JSON.stringify(paths, null, 2));
const rawTs = dedent`
import z from "zod";
import {${Array.from(new Set(zodResponseSchemaNames)).join(", ")}} from "../hey-api/zod.gen";
export const paths = ${tsContent} as const;
`;
const formatted = await prettier.format(rawTs, { parser: "typescript" });
await writeFile(pathListFile, formatted, "utf-8");
