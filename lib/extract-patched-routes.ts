import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { compile, type JSONSchema } from "json-schema-to-typescript";
import type { OpenAPIV3 } from "openapi-types";
import { TYPES_DIR } from "../config";
import { flattenedTypeOverrides } from "../overrides/type-overrides";
import {
	generateTypeNameFromRef,
	getSpecFromFile,
	HTTP_METHODS,
	isReferenceObject,
} from "./utils";

type RouteOverrides = Record<
	string,
	| Record<string, { request?: string; response?: string } | undefined>
	| undefined
>;

const OUT_FILE = path.join(TYPES_DIR, "patched-routes.gen.ts");

async function getCustomExportedTypeNames(): Promise<string[]> {
	const customDir = path.join(TYPES_DIR, "custom");
	const indexSource = await readFile(path.join(customDir, "index.ts"), "utf-8");

	const sources = [indexSource];
	for (const match of indexSource.matchAll(
		/export\s+(?:type\s+)?\*\s+from\s+"([^"]+)"/g,
	)) {
		const reExportedFile = path.join(customDir, `${match[1]}.ts`);
		sources.push(await readFile(reExportedFile, "utf-8"));
	}

	return sources.flatMap(
		(src) =>
			[...src.matchAll(/export\s+(?:type|interface)\s+(\w+)/g)]
				.map((m) => m[1])
				.filter(Boolean) as string[],
	);
}

export async function extractPatchedRoutes() {
	const customExportedTypeNames = new Set(await getCustomExportedTypeNames());

	const spec = await getSpecFromFile();
	const paths = spec.paths;
	if (!paths) throw new Error("No paths found in the OpenAPI specification.");

	const allSchemas = spec.components?.schemas;
	if (!allSchemas)
		throw new Error("No schemas found in the OpenAPI specification.");

	const pathProperties: Record<string, JSONSchema> = {};
	const bodyTypeNames = new Set<string>();
	const customTypeNames = new Set<string>();
	let hasBinaryResponse = false;

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

			const methodOverride = (flattenedTypeOverrides as RouteOverrides)[path]?.[
				method
			];

			// Request body → body
			const requestBody = operation.requestBody as
				| OpenAPIV3.RequestBodyObject
				| undefined;
			let bodyTypeName: string | null = methodOverride?.request ?? null;
			if (bodyTypeName) {
				customTypeNames.add(bodyTypeName);
			} else if (requestBody) {
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
			const response200 = operation.responses?.["200"] as
				| OpenAPIV3.ResponseObject
				| undefined;
			const responseSchema200 =
				response200?.content?.["application/json"]?.schema;
			const isPdfResponse =
				!responseSchema200 && !!response200?.content?.["application/pdf"];
			let responseBodyTypeName: string | null =
				methodOverride?.response ?? null;
			if (responseBodyTypeName) {
				customTypeNames.add(responseBodyTypeName);
			} else if (responseSchema200 && isReferenceObject(responseSchema200)) {
				responseBodyTypeName = generateTypeNameFromRef(responseSchema200.$ref);
				bodyTypeNames.add(responseBodyTypeName);
			}
			const responseBodySchema: JSONSchema = responseBodyTypeName
				? { tsType: responseBodyTypeName }
				: isPdfResponse
					? { tsType: "BinaryResponse" }
					: { tsType: "never" };
			if (isPdfResponse) hasBinaryResponse = true;

			// Inject pagination and global search params for list GET responses
			if (method === "get" && responseBodyTypeName?.includes("List")) {
				for (const param of ["limit", "offset", "page"] as const) {
					if (!queryProperties[param]) {
						queryProperties[param] = { type: "integer" };
					}
				}
				queryProperties.lastmodified = {
					type: "string",
					description:
						"Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).",
				};
				queryProperties.financialyear = {
					type: "integer",
					description: "Filter by financial year (numeric form).",
				};
				queryProperties.financialyeardate = {
					type: "string",
					description:
						"Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.",
				};
				const isDateFilterPath =
					/\/(invoices|orders|offers|vouchers|supplierinvoices)\b/.test(path);
				if (isDateFilterPath) {
					queryProperties.fromdate = {
						type: "string",
						description:
							"Defines a selection based on a start date (`YYYY-MM-DD`).",
					};
					queryProperties.todate = {
						type: "string",
						description:
							"Defines a selection based on an end date (`YYYY-MM-DD`).",
					};
				}
			}

			// Inject sortorder when sortby is present
			if (queryProperties.sortby) {
				queryProperties.sortorder = {
					type: "string",
					enum: ["ascending", "descending"],
				};
			}

			const hasQuery = Object.keys(queryProperties).length > 0;
			const querySchema: JSONSchema = hasQuery
				? {
						type: "object",
						additionalProperties: false,
						properties: queryProperties,
					}
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

	if (customTypeNames.size > 0) {
		const missingTypes = [...customTypeNames].filter(
			(name) => !customExportedTypeNames.has(name),
		);
		if (missingTypes.length > 0) {
			throw new Error(
				`Custom type override(s) not defined in src/types/custom: ${missingTypes.join(", ")}`,
			);
		}
	}

	const routesString = await compile(routes, "Routes", {
		additionalProperties: false,
		bannerComment: "",
	});

	const importStatement =
		[
			customTypeNames.size > 0 || hasBinaryResponse
				? `import type { ${[...customTypeNames, "BinaryResponse"].sort().join(", ")} } from "./custom";`
				: "",
			bodyTypeNames.size > 0
				? `import type { ${[...bodyTypeNames].sort().join(", ")} } from "./patched-schemas.gen";`
				: "",
		]
			.filter(Boolean)
			.join("\n") +
		(hasBinaryResponse || customTypeNames.size > 0 || bodyTypeNames.size > 0
			? "\n\n"
			: "");

	await writeFile(OUT_FILE, importStatement + routesString);
}

if (import.meta.filename === process.argv[1]) {
	await extractPatchedRoutes();
}
