import { existsSync } from "node:fs";
import { mkdir, rename, unlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { SPEC_DIR } from "../config";
import { getFileHash } from "./utils";

const REDOC_URL = "https://api.fortnox.se/apidocs";
const REDOC_STATE_MARKER = "const __redoc_state =";

const TEMP_FILE_PATH = path.join(os.tmpdir(), `fortnox-openapi-spec.json`);
const OUTPUT_PATH = path.join(SPEC_DIR, "openapi.json");
const HASH_FILE_PATH = path.join(SPEC_DIR, "openapi.hash");

await mkdir(SPEC_DIR, { recursive: true });

async function downloadAndExtractSpec() {
	const response = await fetch(REDOC_URL, {
		headers: {
			"user-agent": "Mozilla/5.0",
			accept: "text/html,application/xhtml+xml",
		},
	});

	if (!response.ok) {
		throw new Error(
			`Failed to download ReDoc page: ${response.status} ${response.statusText}`,
		);
	}

	const html = await response.text();
	const redocStateJson = extractJsonObjectAfterMarker(html, REDOC_STATE_MARKER);
	const redocState = JSON.parse(redocStateJson) as {
		spec?: { data?: unknown };
	};

	if (!redocState.spec?.data) {
		throw new Error("Could not find spec.data in __redoc_state");
	}

	return redocState.spec.data;
}

async function getExistingSpecHash() {
	if (existsSync(OUTPUT_PATH)) {
		return getFileHash(OUTPUT_PATH);
	}

	return null;
}

function extractJsonObjectAfterMarker(source: string, marker: string): string {
	const markerIndex = source.indexOf(marker);
	if (markerIndex === -1) {
		throw new Error(`Could not find marker: ${marker}`);
	}

	const start = source.indexOf("{", markerIndex);
	if (start === -1) {
		throw new Error("Could not find start of JSON object after marker");
	}

	let depth = 0;
	let inString = false;
	let escaped = false;

	for (let i = start; i < source.length; i += 1) {
		const char = source[i];

		if (inString) {
			if (escaped) {
				escaped = false;
			} else if (char === "\\") {
				escaped = true;
			} else if (char === '"') {
				inString = false;
			}
			continue;
		}

		if (char === '"') {
			inString = true;
			continue;
		}

		if (char === "{") {
			depth += 1;
			continue;
		}

		if (char === "}") {
			depth -= 1;
			if (depth === 0) {
				return source.slice(start, i + 1);
			}
		}
	}

	throw new Error("Could not find end of __redoc_state JSON object");
}

function stringifySpec(spec: unknown) {
	return `${JSON.stringify(spec, null, 2)}\n`;
}

export async function downloadSpec() {
	console.log("Downloading and extracting OpenAPI spec from ReDoc...");
	const newSpec = await downloadAndExtractSpec();

	console.log("Comparing with existing spec...");
	await writeFile(TEMP_FILE_PATH, stringifySpec(newSpec), "utf-8");
	const newSpecHash = await getFileHash(TEMP_FILE_PATH);
	const existingSpecHash = await getExistingSpecHash();
	console.log(`Existing spec hash: ${existingSpecHash}`);
	console.log(`New spec hash     : ${newSpecHash}`);

	if (newSpecHash === existingSpecHash) {
		console.log("Spec has not changed since last download. No update needed.");
		await unlink(TEMP_FILE_PATH);
		return;
	}

	console.log("Spec has changed. Updating...");
	await rename(TEMP_FILE_PATH, OUTPUT_PATH);

	await writeFile(HASH_FILE_PATH, `${newSpecHash}\n`, {
		flag: "a",
		encoding: "utf-8",
	});
}

if (import.meta.filename === process.argv[1]) {
	await downloadSpec();
}
