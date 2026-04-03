import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";

const SPEC_DIR = path.join(import.meta.dirname, "../spec");

/** Get the OpenAPI specification (original or patched) from a file
 * @param type - "original" to get the original spec, "patched" to get the patched spec
 * @param bypassHashCheck - If true, will skip the hash check for the original spec file (useful for testing with modified spec files)
 * @returns The OpenAPI specification as a OpenAPIV3.Document object
 */
export async function getSpecFromFile(
	type: "original" | "patched",
	bypassHashCheck?: boolean,
): Promise<OpenAPIV3.Document> {
	const fileName =
		type === "original" ? "openapi.json" : "openapi-patched.json";
	const filePath = path.join(SPEC_DIR, fileName);

	if (type === "original" && !bypassHashCheck) {
		const fileHash = await getFileHash(filePath);
		const hashPath = path.join(SPEC_DIR, "openapi.hash");

		const expectedHash = (await readFile(hashPath, "utf-8"))
			.trim()
			.split("\n")
			?.at(-1);
		if (fileHash !== expectedHash) {
			throw new Error(
				`Original spec file hash mismatch! Expected hash: ${expectedHash}, got ${fileHash}. Re-download the spec using "pnpm run download".`,
			);
		}
	}
	return JSON.parse(await readFile(path.join(SPEC_DIR, fileName), "utf-8"));
}

/** Derive the equivalent zod type from an OpenAPI schema object
 * @returns A string representing the zod type (e.g. `"z.string()"`, `"z.number().optional()"`, `"z.enum(['a', 'b'])"`, etc.)
 */
function getZodTypeForParameter(
	schema: OpenAPIV3.SchemaObject,
	required: boolean,
) {
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
	} else if (
		schema.type === "array" &&
		schema.items &&
		!Array.isArray(schema.items)
	) {
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
		},
	};

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
		queryParams: count.query.total > 0 ? queryParams : null,
		fullyOptional: count.path.total === 0 && count.query.required === 0,
	};
}

export async function getFileHash(filePath: string) {
	return await new Promise<string>((resolve, reject) => {
		const hash = createHash("sha256");
		const stream = createReadStream(filePath);

		stream.on("error", reject);
		stream.on("data", (chunk: Buffer) => {
			hash.update(chunk);
		});
		stream.on("end", () => {
			resolve(hash.digest("hex"));
		});
	});
}
