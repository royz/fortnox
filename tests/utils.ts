import { readFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";

export async function getSpecFromFile(): Promise<OpenAPIV3.Document> {
  return JSON.parse(await readFile(path.join(import.meta.dirname, "../openapi.json"), "utf-8"));
}

function getZodTypeForParameter(schema: OpenAPIV3.SchemaObject, required: boolean) {
  let t = "z.any()";

  if (schema.enum) {
    t = `z.enum(${JSON.stringify(schema.enum)})`;
  } else if (schema.type === "boolean") {
    t = "z.boolean()";
  } else if (schema.type === "integer") {
    t = "z.int()";
  } else if (schema.type === "number") {
    t = "z.number()";
  } else if (schema.type === "string") {
    if (schema.format === "date") {
      t = `z.iso.date()`;
    } else if (schema.format === "uuid") {
      t = `z.uuid()`;
    } else {
      t = `z.string()`;
    }
  } else if (schema.type === "array" && schema.items && !Array.isArray(schema.items)) {
    const items = schema.items as OpenAPIV3.SchemaObject;
    let itemType = "z.any()";
    if (items.type === "integer") {
      itemType = "z.int()";
    } else if (items.type === "string") {
      if (items.format === "uuid") {
        itemType = "z.uuid()";
      } else {
        itemType = "z.string()";
      }
    }
    t = `z.array(${itemType})`;
  }

  return required ? t : `${t}.optional()`;
}

export function getParamsAsZodObject(parameters: OpenAPIV3.ParameterObject[]) {
  let pathParams = `z.object({\n`;
  let queryParams = `z.object({\n`;

  const count = {
    path: {
      total: 0,
      required: 0,
    },
    query: {
      total: 0,
      required: 0,
    }
  }

  parameters.forEach((param) => {
    const isRequired = param.required || false;
    if (param.in === "path") {
      count.path.total += 1;
      if (isRequired) {
        count.path.required += 1;
      }
    } else if (param.in === "query") {
      count.query.total += 1;
      if (isRequired) {
        count.query.required += 1;
      }
    }

    let zodType = "z.any()";
    if ("schema" in param && !Array.isArray(param.schema)) {
      const s = param.schema as OpenAPIV3.SchemaObject;
      zodType = getZodTypeForParameter(s, param.required || false);
    }

    if (param.in === "path") {
      pathParams += `  ${param.name}: ${zodType},\n`;
    } else if (param.in === "query") {
      queryParams += `  ${param.name}: ${zodType},\n`;
    }
  });

  pathParams += `})`;
  queryParams += `})`;

  if (count.query.required === 0) {
    queryParams += `.optional()`;
  }

  return {
    pathParams: count.path.total > 0 ? pathParams : null,
    queryParams: count.query.total > 0 ? queryParams : null
  };
}

async function main() {
  const spec = await getSpecFromFile();

  spec.paths[0]?.get?.parameters
}