import { writeFile } from "node:fs/promises";
import path from "node:path";
import { SchemasParser } from "./parser";
import { getSpecFromFile } from "./utils";


export async function generateOfficialSchemas() {
  const TYPES_DIR = path.join(import.meta.dirname, "../types");
  const outputPath = path.join(TYPES_DIR, "official-schemas.ts");

  const spec = await getSpecFromFile("original");
  const parser = new SchemasParser(spec);
  const schemaString = await parser.parse();

  await writeFile(outputPath, schemaString);
}

if (import.meta.filename === process.argv[1]) {
  await generateOfficialSchemas();
}