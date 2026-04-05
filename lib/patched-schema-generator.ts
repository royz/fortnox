import { writeFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";
import { TYPES_DIR } from "../config";
import { SchemasParser } from "./parser";
import { getSpecFromFile, isReferenceObject, isSchemaObject } from "./utils";

function patchSpec(spec: OpenAPIV3.Document): OpenAPIV3.Document {
	const schemas = spec.components?.schemas;
	if (!schemas) {
		throw new Error("Spec is missing components.schemas");
	}

	// Schemas whose names match these patterns are response wrappers: they contain
	// exactly one property (or a list property) that is always present on success.
	const WRAPPER_PATTERN = /(_Wrap|Wrap|_List|_WrapList|ListItem)$/;

	// List-response wrappers that should always carry MetaInformation pagination data.
	const LIST_WRAP_PATTERN = /List(.*?)_Wrap$/;

	for (const [name, schema] of Object.entries(schemas)) {
		if (isReferenceObject(schema)) continue;
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

		if (
			name === "fortnox_MetaInformation" &&
			isSchemaObject(schema) &&
			schema.properties
		) {
			schema.required = Object.keys(schema.properties);
		}

		schemas[name] = schema;
	}

	return spec;
}

export async function generatePatchedSchemas() {
	const outputPath = path.join(TYPES_DIR, "patched-schemas.gen.ts");

	const spec = await getSpecFromFile("original");
	const patchedSpec = patchSpec(spec);

	const parser = new SchemasParser(patchedSpec);
	const schemaString = await parser.parse();

	await writeFile(outputPath, schemaString);
}

if (import.meta.filename === process.argv[1]) {
	await generatePatchedSchemas();
}
