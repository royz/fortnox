import { compile, type JSONSchema } from "json-schema-to-typescript";
import type { OpenAPIV3 } from "openapi-types";
import { getSpecFromFile, isReferenceObject } from "./utils";
import { writeFile } from "node:fs/promises";

const HTTP_METHODS = [
  "get",
  "post",
  "put",
  "delete",
  "patch",
  "head",
  "options",
] as const;

function resolveRef(
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>,
  visiting: Set<string> = new Set(),
): OpenAPIV3.SchemaObject {
  if (!isReferenceObject(schema)) return schema;

  const refName = schema.$ref.split("/").at(-1);
  if (!refName) throw new Error(`Invalid $ref: ${schema.$ref}`);
  if (visiting.has(refName)) return {};

  const resolved = allSchemas[refName];
  if (!resolved) throw new Error(`Schema not found: ${schema.$ref}`);

  return flattenSchema(resolved, allSchemas, new Set([...visiting, refName]));
}

function flattenSchema(
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>,
  visiting: Set<string> = new Set(),
): OpenAPIV3.SchemaObject {
  if (isReferenceObject(schema)) {
    return resolveRef(schema, allSchemas, visiting);
  }

  const result: Record<string, unknown> = { ...schema, additionalProperties: false };

  if (result.properties && typeof result.properties === "object") {
    result.properties = Object.fromEntries(
      Object.entries(
        result.properties as Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>,
      ).map(([key, value]) => [key, flattenSchema(value, allSchemas, visiting)]),
    );
  }

  for (const key of ["allOf", "anyOf", "oneOf"] as const) {
    if (Array.isArray(result[key])) {
      result[key] = (result[key] as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map(
        (s) => flattenSchema(s, allSchemas, visiting),
      );
    }
  }

  if (result.items) {
    if (Array.isArray(result.items)) {
      result.items = (result.items as (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[]).map(
        (s) => flattenSchema(s, allSchemas, visiting),
      );
    } else {
      result.items = flattenSchema(
        result.items as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
        allSchemas,
        visiting,
      );
    }
  }

  return result as OpenAPIV3.SchemaObject;
}

// It generates a JSONSchema for the Routes type, which looks like this:
// type Routes = {
//   "/3/invoices/{DocumentNumber}": {
//     get: {
//       params: {
//         /** identifies the invoice */
//         DocumentNumber: string;
//       },
//       query?: {},
//       body?: never;
//     }
//     put: {
//       params: {
//         /** identifies the invoice */
//         DocumentNumber: string;
//       },
//       query?: {},
//       body: {...};
//     }
// }
export async function extractRoutes() {
  const spec = await getSpecFromFile("original");
  const paths = spec.paths;
  if (!paths) throw new Error("No paths found in the OpenAPI specification.");

  const allSchemas = (spec.components?.schemas ?? {}) as Record<
    string,
    OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
  >;

  const pathProperties: Record<string, JSONSchema> = {};

  for (const [path, pathItem] of Object.entries(paths)) {
    const methodProperties: Record<string, JSONSchema> = {};

    for (const method of HTTP_METHODS) {
      const operation = (pathItem as Record<string, unknown>)[method] as
        | OpenAPIV3.OperationObject
        | undefined;
      if (!operation) continue;

      const parameters = (operation.parameters ?? []) as OpenAPIV3.ParameterObject[];

      // Path parameters → params
      const pathParams = parameters.filter((p) => p.in === "path");
      const paramsProperties: Record<string, JSONSchema> = {};
      const paramsRequired: string[] = [];

      for (const param of pathParams) {
        const paramSchema = param.schema as
          | OpenAPIV3.ReferenceObject
          | OpenAPIV3.SchemaObject
          | undefined;
        paramsProperties[param.name] = {
          ...(paramSchema ? flattenSchema(paramSchema, allSchemas) : { type: "string" }),
          ...(param.description ? { description: param.description } : {}),
        };
        if (param.required) paramsRequired.push(param.name);
      }

      const paramsSchema: JSONSchema = {
        type: "object",
        additionalProperties: false,
        properties: paramsProperties,
        ...(paramsRequired.length > 0 ? { required: paramsRequired } : {}),
      };

      // Query parameters → query
      const queryParams = parameters.filter((p) => p.in === "query");
      const queryProperties: Record<string, JSONSchema> = {};

      for (const param of queryParams) {
        const paramSchema = param.schema as
          | OpenAPIV3.ReferenceObject
          | OpenAPIV3.SchemaObject
          | undefined;
        queryProperties[param.name] = {
          ...(paramSchema ? flattenSchema(paramSchema, allSchemas) : { type: "string" }),
          ...(param.description ? { description: param.description } : {}),
        };
      }

      const querySchema: JSONSchema = {
        type: "object",
        additionalProperties: false,
        properties: queryProperties,
      };

      // Request body → body
      let bodySchema: JSONSchema;
      const requestBody = operation.requestBody as OpenAPIV3.RequestBodyObject | undefined;

      if (requestBody) {
        const content = requestBody.content;
        const mediaType =
          content["application/json"] ?? content["*/*"] ?? Object.values(content)[0];
        bodySchema = mediaType?.schema
          ? flattenSchema(mediaType.schema as OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, allSchemas)
          : { not: {} };
      } else {
        bodySchema = { not: {} };
      }

      const methodRequired = ["params", ...(requestBody ? ["body"] : [])];

      methodProperties[method] = {
        type: "object",
        additionalProperties: false,
        properties: {
          params: paramsSchema,
          query: querySchema,
          body: bodySchema,
        },
        required: methodRequired,
      };
    }

    pathProperties[path] = {
      type: "object",
      additionalProperties: false,
      properties: methodProperties,
    };
  }

  const routes: JSONSchema = {
    title: "Routes",
    type: "object",
    additionalProperties: false,
    properties: pathProperties,
  };

  const routesString = await compile(routes, "Routes", {
    additionalProperties: false,
    bannerComment: "",
  })

  await writeFile("routes.ts", routesString);
}