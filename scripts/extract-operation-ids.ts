import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";
import { OVERRIDES_DIR } from "../config";
import { getSpecFromFile, HTTP_METHODS } from "../lib/utils";

const FILE_PATH = path.join(OVERRIDES_DIR, "operation-ids.json");

type OperationIds = {
	[path: string]: {
		[method: string]: string | null;
	};
};

/**
 * Reads existing operation ID overrides from the JSON file, which should be manually edited
 * to add missing IDs or fix non-meaningful ones from the spec. Fetching these first ensures
 * manual overrides are preserved when regenerating from the spec.
 */
async function getExistingOverrides(): Promise<OperationIds> {
	if (existsSync(FILE_PATH)) {
		return JSON.parse(await readFile(FILE_PATH, "utf-8"));
	}
	return {};
}

/**
 * Gets the operation Ids directly from spec.
 */
async function getOperationIdsFromSpec() {
	const spec = await getSpecFromFile();

	const overrides: OperationIds = {};

	for (const [path, pathItem] of Object.entries(spec.paths)) {
		if (!overrides[path]) overrides[path] = {};

		for (const method of HTTP_METHODS) {
			const operation = (pathItem as Record<string, unknown>)[method] as
				| OpenAPIV3.OperationObject
				| undefined;
			if (!operation) continue;
			const operationId = operation.operationId ?? null;
			overrides[path][method] = operationId;
		}
	}

	return overrides;
}

export async function extractOperationIds() {
	const existingIds = await getExistingOverrides();
	const newIds = await getOperationIdsFromSpec();

	const merged = Object.assign({}, existingIds);

	for (const [path, operations] of Object.entries(newIds)) {
		for (const [method, operationId] of Object.entries(operations)) {
			if (!merged[path]) merged[path] = {};
			if (!merged[path][method]) {
				merged[path][method] = operationId;
			}
		}
	}

	await writeFile(FILE_PATH, JSON.stringify(merged, null, 2));
}

if (import.meta.filename === process.argv[1]) {
	await extractOperationIds();
}
