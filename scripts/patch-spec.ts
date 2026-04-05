/**
 * Preprocesses spec/openapi.json and writes the result to openapi.json at the
 * project root. The Fortnox OpenAPI spec omits "required" arrays on all
 * response-wrapper schemas (*_Wrap, *Wrap, *_List, *_WrapList), which causes
 * openapi-ts to generate .optional() for every wrapped property. This script
 * adds "required" to those schemas so the generated Zod types reflect that a
 * successful 200 response always contains the wrapped entity.
 */

import { writeFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";
import { getSpecFromFile } from "../lib/utils";

const specDir = path.join(import.meta.dirname, "../spec");
const outputPath = path.join(specDir, "openapi-patched.json");

const spec = await getSpecFromFile("original");
const schemas = (spec.components?.schemas ?? {}) as Record<
	string,
	OpenAPIV3.SchemaObject
>;

// Schemas whose names match these patterns are response wrappers: they contain
// exactly one property (or a list property) that is always present on success.
const WRAPPER_PATTERN = /(_Wrap|Wrap|_List|_WrapList|ListItem)$/;

// List-response wrappers that should always carry MetaInformation pagination data.
const LIST_WRAP_PATTERN = /List(.*?)_Wrap$/;

for (const [name, schema] of Object.entries(schemas)) {
	if (
		WRAPPER_PATTERN.test(name) &&
		schema.type === "object" &&
		schema.properties &&
		(!schema.required || schema.required.length === 0)
	) {
		schema.required = Object.keys(schema.properties);
	}

	if (
		LIST_WRAP_PATTERN.test(name) &&
		schema.type === "object" &&
		schema.properties &&
		!schema.properties.MetaInformation
	) {
		schema.properties.MetaInformation = {
			$ref: "#/components/schemas/fortnox_MetaInformation",
		} as OpenAPIV3.ReferenceObject;
		schema.required = [...(schema.required ?? []), "MetaInformation"];
	}
}

// MetaInformation fields are always present on paginated responses.
const metaInfo = schemas.fortnox_MetaInformation;
if (metaInfo?.properties) {
	metaInfo.required = Object.keys(metaInfo.properties);
}

await writeFile(outputPath, JSON.stringify(spec, null, 2), "utf-8");
console.log(`Preprocessed spec written to ${outputPath}`);
