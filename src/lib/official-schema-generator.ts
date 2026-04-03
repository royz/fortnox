import path from "node:path";
import { getSpecFromFile, isReferenceObject } from "./utils";
import type { OpenAPIV3 } from "openapi-types";
import type { JSONSchema } from "json-schema-to-typescript";
import { compile } from "json-schema-to-typescript";

const TYPES_DIR = path.join(import.meta.dirname, "../types");
const outputPath = path.join(TYPES_DIR, "fortnox-official-schemas.ts");

const generatedTypes: Record<string, JSONSchema> = {};

const spec = await getSpecFromFile("original");

const schemas = spec.components?.schemas;
// await compile(schemas, "FortnoxSchemas", {})

// if (!schemas) {
//   throw new Error("No schemas found in the OpenAPI specification.");
// }

// for (const [schemaName, schema] of Object.entries(schemas)) {
//   parseSchema(schemaName, schema);
// }


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

  const jsonSchema: JSONSchema = {
    title: name,
    ...schema,
  };

  generatedTypes[name] = jsonSchema;
}
