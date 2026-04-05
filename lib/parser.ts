import { compile, type JSONSchema } from "json-schema-to-typescript";
import type { OpenAPIV3 } from "openapi-types";
import { generateTypeNameFromRef, isReferenceObject } from "./utils";

export class SchemasParser {
	spec: OpenAPIV3.Document;
	private schemas = new Map<
		string,
		OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
	>();
	private jsonSchemas = new Map<string, JSONSchema>();

	private refToTitle(ref: string) {
		const schemaName = ref.split("/").at(-1);
		if (!schemaName) throw new Error(`Invalid reference: ${ref}`);
		return generateTypeNameFromRef(schemaName);
	}

	constructor(spec: OpenAPIV3.Document) {
		this.spec = spec;
		const schemas = spec.components?.schemas;
		if (!schemas)
			throw new Error("No schemas found in the OpenAPI specification!");

		for (const [schemaName, schema] of Object.entries(schemas)) {
			const title = this.refToTitle(schemaName);
			this.schemas.set(title, schema);
		}
	}

	parseSchema(
		name: string,
		schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
	) {
		const title = generateTypeNameFromRef(name);
		console.log(`Parsing schema: ${title}`);
		if (this.jsonSchemas.has(title)) {
			return;
		}

		const flattenedSchema = this.flattenSchema(
			schema,
			isReferenceObject(schema) ? new Set([name]) : undefined,
		);

		this.jsonSchemas.set(title, flattenedSchema);
	}

	/** Flattens all $ref references in a schema */
	flattenSchema(
		schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
		visiting: Set<string> = new Set(),
	): OpenAPIV3.SchemaObject {
		if (isReferenceObject(schema)) {
			const title = this.refToTitle(schema.$ref);

			if (visiting.has(title)) return {};

			const refSchema = this.schemas.get(title);
			if (!refSchema) throw new Error(`Reference not found: ${title}`);

			return this.flattenSchema(refSchema, new Set([...visiting, title]));
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
		for (const [title, schema] of this.schemas.entries()) {
			this.parseSchema(title, schema);
		}

		let schemaString = "";

		for (const [title, jsonSchema] of this.jsonSchemas.entries()) {
			const tsInterface = await compile(jsonSchema, title, {
				bannerComment: "",
			});
			schemaString += `${tsInterface}\n\n`;
		}

		if (schemaString.trim() === "") {
			throw new Error("No schemas were parsed!");
		}
		return schemaString;
	}
}
