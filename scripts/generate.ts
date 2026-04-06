import { downloadSpec } from "../lib/downloader";
import { extractOfficialRoutes } from "../lib/extract-official-routes";
import { extractOperationIds } from "../lib/extract-operation-ids";
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

// generate operation IDs (with manual overrides preserved)
await extractOperationIds();

// generate resource operations map
await extractResourceOperations();
