import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const specFile = path.join(import.meta.dirname, "../openapi.json");

const spec = JSON.parse(
  await readFile(specFile, "utf-8")
);

const pathTree: Record<string, any> = {};


function insertIntoPathTree(path: string, method: string, data: any) {
  path = path.startsWith("/") ? path.slice(1) : path;
  const pathSegments = [...path.split("/"), method.toUpperCase()];

  let node = pathTree;

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    if (!segment) continue; // Skip empty segments (e.g., from leading/trailing slashes)
    if (!(segment in node)) {
      node[segment] = {};
    }
    node = node[segment];
  }

  node.data = data;
}


Object.entries(spec.paths).forEach(([path, methods]: [string, any]) => {
  Object.entries(methods).forEach(([method, operation]: [string, any]) => {
    insertIntoPathTree(path, method, {
      operationId: operation.operationId,
      parameters: operation.parameters || [],
      requestBody: operation.requestBody || null,
    });
  });
});


await writeFile("nested-paths.json", JSON.stringify(pathTree, null, 2), "utf-8");