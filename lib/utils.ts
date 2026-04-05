import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { OpenAPIV3 } from "openapi-types";

const SPEC_DIR = path.join(import.meta.dirname, "../../spec");

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

export function isReferenceObject(
	obj: unknown,
): obj is OpenAPIV3.ReferenceObject {
	return typeof obj === "object" && obj !== null && "$ref" in obj;
}

export function isSchemaObject(obj: unknown): obj is OpenAPIV3.SchemaObject {
	return typeof obj === "object" && obj !== null && !("$ref" in obj);
}

export function capitalizeFirstLetter(str: string): string {
	if (str.length === 0) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateTypeNameFromRef(ref: string): string {
	const schemaName = ref.split("/").at(-1);
	if (!schemaName) throw new Error(`Invalid reference: ${ref}`);
	return schemaName
		.split(/[.\s_-]+/)
		.map(capitalizeFirstLetter)
		.join("");
}
