import path from "node:path";
import { generateTypeNameFromSchemaName, getSpecFromFile, isReferenceObject } from "./utils";
import type { OpenAPIV3 } from "openapi-types";
import type { JSONSchema } from "json-schema-to-typescript";
import { compile } from "json-schema-to-typescript";
import { writeFile } from "node:fs/promises";

const TYPES_DIR = path.join(import.meta.dirname, "../types");
const outputPath = path.join(TYPES_DIR, "official-schemas.ts");
const generatedTypes: Record<string, JSONSchema> = {};

const spec = await getSpecFromFile("original");

const schemas = spec.components?.schemas;

if (!schemas) {
  throw new Error("No schemas found in the OpenAPI specification.");
}

function flattenSchema(
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  visiting: Set<string> = new Set()
): OpenAPIV3.SchemaObject {
  if (isReferenceObject(schema)) {
    const refName = schema.$ref.split("/").at(-1)!;
    if (visiting.has(refName)) {
      return {};
    }
    const refSchema = schemas![refName];
    if (!refSchema) throw new Error(`Reference not found: ${schema.$ref}`);
    return flattenSchema(refSchema, new Set([...visiting, refName]));
  }

  const result: Record<string, unknown> = { ...schema, additionalProperties: false };

  if (result.properties && typeof result.properties === "object") {
    result.properties = Object.fromEntries(
      Object.entries(result.properties as Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>).map(
        ([key, value]) => [key, flattenSchema(value, visiting)]
      )
    );
  }

  if (Array.isArray(result.allOf)) {
    result.allOf = (result.allOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
      flattenSchema(s, visiting)
    );
  }

  if (Array.isArray(result.anyOf)) {
    result.anyOf = (result.anyOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
      flattenSchema(s, visiting)
    );
  }

  if (Array.isArray(result.oneOf)) {
    result.oneOf = (result.oneOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
      flattenSchema(s, visiting)
    );
  }

  if (result.items) {
    if (Array.isArray(result.items)) {
      result.items = (result.items as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
        flattenSchema(s, visiting)
      );
    } else {
      result.items = flattenSchema(result.items as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, visiting);
    }
  }

  if (result.additionalProperties && typeof result.additionalProperties === "object") {
    result.additionalProperties = flattenSchema(
      result.additionalProperties as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
      visiting
    );
  }

  if (result.not) {
    result.not = flattenSchema(result.not as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, visiting);
  }

  return result as OpenAPIV3.SchemaObject;
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
    ...flattenSchema(schema, new Set([name])),
  };

  generatedTypes[title] = jsonSchema;
}

let schemaString = "";

for (const jsonSchema of Object.values(generatedTypes)) {
  const tsInterface = await compile(jsonSchema, jsonSchema.title || "Unnamed", {
    bannerComment: "",
  });
  schemaString += tsInterface + "\n\n";
}

await writeFile(outputPath, schemaString);
