import { compile, type JSONSchema } from "json-schema-to-typescript";
import type { OpenAPIV3 } from "openapi-types";
import { generateTypeNameFromSchemaName, isReferenceObject } from "./utils";

export class SchemasParser {
	spec: OpenAPIV3.Document;
	private schemas = new Map<
		{ schemaName: string },
		OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
	>();
	private jsonSchemas = new Map<{ title: string }, JSONSchema>();

	constructor(spec: OpenAPIV3.Document) {
		this.spec = spec;
		const schemas = spec.components?.schemas;
		if (!schemas)
			throw new Error("No schemas found in the OpenAPI specification!");

		for (const [schemaName, schema] of Object.entries(schemas)) {
			this.schemas.set({ schemaName }, schema);
		}
	}

	parseSchema(
		name: string,
		schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
	) {
		const title = generateTypeNameFromSchemaName(name);

		if (this.jsonSchemas.has({ title })) {
			return;
		}

		const flattenedSchema = this.flattenSchema(
			schema,
			isReferenceObject(schema) ? new Set([name]) : undefined,
		);

		this.jsonSchemas.set({ title }, flattenedSchema);
	}

	/** Flattens all $ref references in a schema */
	flattenSchema(
		schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
		visiting: Set<string> = new Set(),
	): OpenAPIV3.SchemaObject {
		if (isReferenceObject(schema)) {
			const refSchemaName = schema.$ref.split("/").at(-1);
			if (!refSchemaName) throw new Error(`Invalid reference: ${schema.$ref}`);

			if (visiting.has(refSchemaName)) {
				return {};
			}
			const refSchema = this.schemas.get({ schemaName: refSchemaName });
			if (!refSchema) throw new Error(`Reference not found: ${schema.$ref}`);

			return this.flattenSchema(
				refSchema,
				new Set([...visiting, refSchemaName]),
			);
		}

		const result: Record<string, unknown> = {
			...schema,
			additionalProperties: false,
		};

		if (result.properties && typeof result.properties === "object") {
			result.properties = Object.fromEntries(
				Object.entries(
					result.properties as Record<
						string,
						OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
					>,
				).map(([key, value]) => [key, this.flattenSchema(value, visiting)]),
			);
		}

		if (Array.isArray(result.allOf)) {
			result.allOf = (
				result.allOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]
			).map((s) => this.flattenSchema(s, visiting));
		}

		if (Array.isArray(result.anyOf)) {
			result.anyOf = (
				result.anyOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]
			).map((s) => this.flattenSchema(s, visiting));
		}

		if (Array.isArray(result.oneOf)) {
			result.oneOf = (
				result.oneOf as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]
			).map((s) => this.flattenSchema(s, visiting));
		}

		if (result.items) {
			if (Array.isArray(result.items)) {
				result.items = (
					result.items as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]
				).map((s) => this.flattenSchema(s, visiting));
			} else {
				result.items = this.flattenSchema(
					result.items as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
					visiting,
				);
			}
		}

		if (
			result.additionalProperties &&
			typeof result.additionalProperties === "object"
		) {
			result.additionalProperties = this.flattenSchema(
				result.additionalProperties as
					| OpenAPIV3.ReferenceObject
					| OpenAPIV3.SchemaObject,
				visiting,
			);
		}

		if (result.not) {
			result.not = this.flattenSchema(
				result.not as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
				visiting,
			);
		}

		return result as OpenAPIV3.SchemaObject;
	}

	async parse() {
		for (const [schemaName, schema] of Object.entries(this.schemas)) {
			this.parseSchema(schemaName, schema);
		}

		let schemaString = "";

		for (const [name, jsonSchema] of this.jsonSchemas.entries()) {
			const tsInterface = await compile(jsonSchema, name.title, {
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
