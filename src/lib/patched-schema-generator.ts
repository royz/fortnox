import path from "node:path";
import { generateTypeNameFromSchemaName, getSpecFromFile, isReferenceObject } from "./utils";
import type { OpenAPIV3 } from "openapi-types";
import type { JSONSchema } from "json-schema-to-typescript";
import { compile } from "json-schema-to-typescript";
import { writeFile } from "node:fs/promises";

const TYPES_DIR = path.join(import.meta.dirname, "../types");
const outputPath = path.join(TYPES_DIR, "fortnox-patched-schemas.ts");
const generatedTypes: Record<string, JSONSchema> = {};

const spec = await getSpecFromFile("original");

const schemas = spec.components?.schemas;
// await compile(schemas, "FortnoxSchemas", {})

if (!schemas) {
  throw new Error("No schemas found in the OpenAPI specification.");
}

for (const [schemaName, schema] of Object.entries(schemas)) {
  try {
    parseSchema(schemaName, schema);
  } catch (err) { }
}

function parseSchema(name: string, schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) {
  if (name in generatedTypes) {
    return;
  }

  if (isReferenceObject(schema)) {
    const refName = schema.$ref.split("/").at(-1);
    if (!refName) throw new Error(`Invalid reference: ${schema.$ref}`);

    const refSchema = schemas?.[refName];
    if (!refSchema) throw new Error(`Reference not found: ${schema.$ref}`);

    parseSchema(refName, refSchema);
    return;
  }

  const title = generateTypeNameFromSchemaName(name);

  const jsonSchema: JSONSchema = {
    title,
    ...schema,
  };

  generatedTypes[title] = jsonSchema;
}

let schemaString = "";

Object.values(generatedTypes).forEach((jsonSchema) => {
  const tsInterface = compile(jsonSchema, jsonSchema.title || "Unnamed", {
    bannerComment: "",
  });
  schemaString += tsInterface + "\n\n";
});

// await writeFile("patched-schemas.json", JSON.stringify(generatedTypes, null, 2), "utf-8");
await writeFile(outputPath, schemaString);
