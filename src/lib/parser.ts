import type { OpenAPIV3 } from "openapi-types";
import { generateTypeNameFromSchemaName, getSpecFromFile, isReferenceObject } from "./utils";
import { compile, type JSONSchema } from "json-schema-to-typescript";


export class SchemasParser {
  spec: OpenAPIV3.Document | undefined;
  private schemas = new Map<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>();
  private generatedTypes = new Map<string, JSONSchema>();

  async loadSpec() {
    this.spec = await getSpecFromFile("original");
  }

  private checkSpecLoaded(): asserts this is SchemasParser & { spec: OpenAPIV3.Document } {
    if (!this.spec) throw new Error("Spec not loaded. Call loadSpec() first.");
  }

  parseSchema(name: string, schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) {
    this.checkSpecLoaded();

    if (this.generatedTypes.has(name)) {
      return;
    }

    if (isReferenceObject(schema)) {
      const refName = schema.$ref.split("/").at(-1);
      if (!refName) throw new Error(`Invalid reference: ${schema.$ref}`);

      const refSchema = this.spec.components?.schemas?.[refName];
      if (!refSchema) throw new Error(`Reference not found: ${schema.$ref}`);

      this.parseSchema(refName, refSchema);
      return;
    }

    const title = generateTypeNameFromSchemaName(name);

    const jsonSchema: JSONSchema = {
      title,
      ...this.flattenSchema(schema, new Set([name])),
    };

    this.generatedTypes.set(title, jsonSchema);
  }

  /** Flattens all $ref references in a schema */
  flattenSchema(
    schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
    visiting: Set<string> = new Set()
  ): OpenAPIV3.SchemaObject {
    this.checkSpecLoaded();

    if (isReferenceObject(schema)) {
      const refName = schema.$ref.split("/").at(-1);
      if (!refName) throw new Error(`Invalid reference: ${schema.$ref}`);

      if (visiting.has(refName)) {
        return {};
      }
      const refSchema = this.schemas.get(refName)
      if (!refSchema) throw new Error(`Reference not found: ${schema.$ref}`);

      return this.flattenSchema(refSchema, new Set([...visiting, refName]));
    }

    const result: Record<string, unknown> = { ...schema, additionalProperties: false };

    if (result.properties && typeof result.properties === "object") {
      result.properties = Object.fromEntries(
        Object.entries(result.properties as Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>).map(
          ([key, value]) => [key, this.flattenSchema(value, visiting)]
        )
      );
    }

    if (Array.isArray(result.allOf)) {
      result.allOf = (result.allOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
        this.flattenSchema(s, visiting)
      );
    }

    if (Array.isArray(result.anyOf)) {
      result.anyOf = (result.anyOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
        this.flattenSchema(s, visiting)
      );
    }

    if (Array.isArray(result.oneOf)) {
      result.oneOf = (result.oneOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
        this.flattenSchema(s, visiting)
      );
    }

    if (result.items) {
      if (Array.isArray(result.items)) {
        result.items = (result.items as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map((s) =>
          this.flattenSchema(s, visiting)
        );
      } else {
        result.items = this.flattenSchema(result.items as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, visiting);
      }
    }

    if (result.additionalProperties && typeof result.additionalProperties === "object") {
      result.additionalProperties = this.flattenSchema(
        result.additionalProperties as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
        visiting
      );
    }

    if (result.not) {
      result.not = this.flattenSchema(result.not as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, visiting);
    }

    return result as OpenAPIV3.SchemaObject;
  }

  async parse() {
    await this.loadSpec();

    for (const [schemaName, schema] of Object.entries(this.schemas)) {
      this.parseSchema(schemaName, schema);
    }

    let schemaString = "";

    for (const [name, jsonSchema] of this.generatedTypes.entries()) {
      const tsInterface = await compile(jsonSchema, name, {
        bannerComment: "",
      });
      schemaString += tsInterface + "\n\n";
    }

    if (schemaString.trim() === "") {
      throw new Error("No schemas were parsed!");
    }

    return schemaString;
  }
}