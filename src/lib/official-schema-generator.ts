import path from "node:path";
import { writeFile } from "node:fs/promises";
import { SchemasParser } from "./parser";

const TYPES_DIR = path.join(import.meta.dirname, "../types");
const outputPath = path.join(TYPES_DIR, "official-schemas.ts");

const parser = new SchemasParser();
const schemaString = await parser.parse();

await writeFile(outputPath, schemaString);
