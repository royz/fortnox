import { writeFile } from "node:fs/promises";
import path from "node:path";
import { compile, type JSONSchema } from "json-schema-to-typescript";
import type { OpenAPIV3 } from "openapi-types";
import { TYPES_DIR } from "../config";
import {
	generateTypeNameFromRef,
	getSpecFromFile,
	isReferenceObject,
} from "./utils";

const HTTP_METHODS = [
	"get",
	"post",
	"put",
	"delete",
	"patch",
	"head",
	"options",
] as const;

const OUT_FILE = path.join(TYPES_DIR, "official-routes.gen.ts");

export async function extractOfficialRoutes() {
	const spec = await getSpecFromFile("original");
	const paths = spec.paths;
	if (!paths) throw new Error("No paths found in the OpenAPI specification.");

	const allSchemas = spec.components?.schemas;
	if (!allSchemas)
		throw new Error("No schemas found in the OpenAPI specification.");

	const pathProperties: Record<string, JSONSchema> = {};
	const bodyTypeNames = new Set<string>();

	for (const [path, pathItem] of Object.entries(paths)) {
		const methodProperties: Record<string, JSONSchema> = {};

		for (const method of HTTP_METHODS) {
			const operation = (pathItem as Record<string, unknown>)[method] as
				| OpenAPIV3.OperationObject
				| undefined;
			if (!operation) continue;

			const parameters = (operation.parameters ??
				[]) as OpenAPIV3.ParameterObject[];

			// Path parameters → params
			const pathParams = parameters.filter((p) => p.in === "path");
			const paramsProperties: Record<string, JSONSchema> = {};
			const paramsRequired: string[] = [];

			for (const param of pathParams) {
				const paramSchema = param.schema as OpenAPIV3.SchemaObject | undefined;
				paramsProperties[param.name] = {
					...(paramSchema ? paramSchema : { type: "string" }),
					...(param.description ? { description: param.description } : {}),
				};
				if (param.required) paramsRequired.push(param.name);
			}

			const hasParams = pathParams.length > 0;
			const paramsSchema: JSONSchema = hasParams
				? {
						type: "object",
						additionalProperties: false,
						properties: paramsProperties,
						...(paramsRequired.length > 0 ? { required: paramsRequired } : {}),
					}
				: { tsType: "never" };

			// Query parameters → query
			const queryParams = parameters.filter((p) => p.in === "query");
			const queryProperties: Record<string, JSONSchema> = {};

			for (const param of queryParams) {
				const paramSchema = param.schema as
					| OpenAPIV3.ReferenceObject
					| OpenAPIV3.SchemaObject
					| undefined;
				queryProperties[param.name] = {
					...(paramSchema ? paramSchema : { type: "string" }),
					...(param.description ? { description: param.description } : {}),
				};
			}

			const hasQuery = queryParams.length > 0;
			const querySchema: JSONSchema = hasQuery
				? {
						type: "object",
						additionalProperties: false,
						properties: queryProperties,
					}
				: { tsType: "never" };

			// Request body → body
			const requestBody = operation.requestBody as
				| OpenAPIV3.RequestBodyObject
				| undefined;
			let bodyTypeName: string | null = null;
			if (requestBody) {
				const content = requestBody.content;
				const mediaType =
					content["application/json"] ??
					content["*/*"] ??
					Object.values(content)[0];
				const schema = mediaType?.schema;
				if (schema && isReferenceObject(schema)) {
					bodyTypeName = generateTypeNameFromRef(schema.$ref);
					bodyTypeNames.add(bodyTypeName);
				}
			}
			const bodySchema: JSONSchema = bodyTypeName
				? { tsType: bodyTypeName }
				: { tsType: "never" };

			// Response body → response.body
			const responseSchema200 = (
				operation.responses?.["200"] as OpenAPIV3.ResponseObject | undefined
			)?.content?.["application/json"]?.schema;
			let responseBodyTypeName: string | null = null;
			if (responseSchema200 && isReferenceObject(responseSchema200)) {
				responseBodyTypeName = generateTypeNameFromRef(responseSchema200.$ref);
				bodyTypeNames.add(responseBodyTypeName);
			}
			const responseBodySchema: JSONSchema = responseBodyTypeName
				? { tsType: responseBodyTypeName }
				: { tsType: "never" };

			const required: string[] = ["params", "body"];
			if (!hasQuery) required.push("query");

			const requestSchema: JSONSchema = {
				type: "object",
				additionalProperties: false,
				properties: {
					params: paramsSchema,
					query: querySchema,
					body: bodySchema,
				},
				required,
			};

			const responseSchema: JSONSchema = {
				type: "object",
				additionalProperties: false,
				properties: {
					body: responseBodySchema,
				},
				required: ["body"],
			};

			methodProperties[method] = {
				type: "object",
				additionalProperties: false,
				properties: {
					request: requestSchema,
					response: responseSchema,
				},
				required: ["request", "response"],
			};
		}

		const requiredMethods = Object.keys(methodProperties).filter((method) => {
			const m = methodProperties[method] as JSONSchema & {
				required?: string[];
			};
			return m.required && m.required.length > 0;
		});

		pathProperties[path] = {
			type: "object",
			additionalProperties: false,
			properties: methodProperties,
			...(requiredMethods.length > 0 ? { required: requiredMethods } : {}),
		};
	}

	const routes: JSONSchema = {
		title: "Routes",
		type: "object",
		additionalProperties: false,
		properties: pathProperties,
		required: Object.keys(pathProperties),
	};

	const routesString = await compile(routes, "Routes", {
		additionalProperties: false,
		bannerComment: "",
	});

	const importStatement =
		bodyTypeNames.size > 0
			? `import type { ${[...bodyTypeNames].sort().join(", ")} } from "./official-schemas.gen";\n\n`
			: "";

	await writeFile(OUT_FILE, importStatement + routesString);
}

if (import.meta.filename === process.argv[1]) {
	await extractOfficialRoutes();
}
