import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { OVERRIDES_DIR, TYPES_DIR } from "../config";

const OUT_FILE = path.join(TYPES_DIR, "resource-operations.gen.ts");
const OPERATION_IDS_FILE = path.join(OVERRIDES_DIR, "operation-ids.json");

function toCamelCase(s: string): string {
	return s.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function getResourceName(apiPath: string): string | null {
	if (apiPath.startsWith("/3/")) {
		return apiPath.replace(/^\/3\//, "").replace(/\/.*$/, "");
	}
	if (apiPath.startsWith("/api/")) {
		const module = apiPath.replace(/^\/api\//, "").split("/")[0] ?? "";
		return toCamelCase(module) || null;
	}
	return null;
}

export async function extractResourceOperations(): Promise<void> {
	const raw = await readFile(OPERATION_IDS_FILE, "utf-8");
	const operationIds: Record<string, Record<string, string>> = JSON.parse(raw);

	const byResource: Record<
		string,
		Array<{ opId: string; path: string; method: string }>
	> = {};

	for (const [apiPath, methods] of Object.entries(operationIds)) {
		const resource = getResourceName(apiPath);
		if (!resource) continue;
		if (!byResource[resource]) byResource[resource] = [];
		for (const [method, opId] of Object.entries(methods)) {
			byResource[resource].push({ opId, path: apiPath, method });
		}
	}

	let out = "// This file is auto-generated. Do not edit manually.\n";
	out += "// Run scripts/generate.ts to regenerate.\n\n";

	out += "export const RESOURCE_OPERATIONS = {\n";
	for (const [resource, ops] of Object.entries(byResource).sort((a, b) =>
		a[0].localeCompare(b[0]),
	)) {
		out += `  ${JSON.stringify(resource)}: {\n`;
		for (const { opId, path, method } of ops) {
			out += `    ${JSON.stringify(opId)}: { path: ${JSON.stringify(path)} as const, method: ${JSON.stringify(method)} as const },\n`;
		}
		out += "  },\n";
	}
	out += "} as const;\n\n";
	out += "export type ResourceOperations = typeof RESOURCE_OPERATIONS;\n";

	await writeFile(OUT_FILE, out, "utf-8");
}
