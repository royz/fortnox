import { downloadSpec } from "./downloader";
import { extractOfficialRoutes } from "./extract-official-routes";
import { extractPatchedRoutes } from "./extract-patched-routes";
import { generateOfficialSchemas } from "./official-schema-generator";
import { generatePatchedSchemas } from "./patched-schema-generator";

// download latest spec
await downloadSpec();

// generate official schemas
await generateOfficialSchemas();

// generate official routes
await extractOfficialRoutes();

// generate patched schema
await generatePatchedSchemas();

// generate patched routes
await extractPatchedRoutes();
