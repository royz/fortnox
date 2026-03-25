/**
 * Preprocesses spec/openapi.json and writes the result to openapi.json at the
 * project root. The Fortnox OpenAPI spec omits "required" arrays on all
 * response-wrapper schemas (*_Wrap, *Wrap, *_List, *_WrapList), which causes
 * openapi-ts to generate .optional() for every wrapped property. This script
 * adds "required" to those schemas so the generated Zod types reflect that a
 * successful 200 response always contains the wrapped entity.
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";

const specPath = path.join(import.meta.dirname, "../spec/openapi.json");
const outputPath = path.join(import.meta.dirname, "../spec/openapi-patched.json");

const spec = JSON.parse(
  await readFile(specPath, "utf-8")
) as OpenAPIV3.Document;

const schemas = (spec.components?.schemas ?? {}) as Record<
  string,
  OpenAPIV3.SchemaObject
>;

// Schemas whose names match these patterns are response wrappers: they contain
// exactly one property (or a list property) that is always present on success.
const WRAPPER_PATTERN = /(_Wrap|Wrap|_List|_WrapList)$/;

for (const [name, schema] of Object.entries(schemas)) {
  if (
    WRAPPER_PATTERN.test(name) &&
    schema.type === "object" &&
    schema.properties &&
    (!schema.required || schema.required.length === 0)
  ) {
    schema.required = Object.keys(schema.properties);
  }
}

await writeFile(outputPath, JSON.stringify(spec, null, 2), "utf-8");
console.log(`Preprocessed spec written to ${outputPath}`);
