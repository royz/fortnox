import { downloadSpec } from "../lib/downloader";
import { extractOfficialRoutes } from "../lib/extract-official-routes";
import { extractPatchedRoutes } from "../lib/extract-patched-routes";
import { extractResourceOperations } from "../lib/extract-resource-operations";
import { generateOfficialSchemas } from "../lib/official-schema-generator";
import { generatePatchedSchemas } from "../lib/patched-schema-generator";

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

// generate resource operations map
await extractResourceOperations();
