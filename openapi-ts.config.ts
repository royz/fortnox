import path from "node:path";
import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	input: path.join(import.meta.dirname, "./spec/openapi-patched.json"),
	output: {
		path: "./hey-api",
		postProcess: ["prettier", "eslint"],
	},
	plugins: [
		{
			name: "zod",
			requests: true,
			responses: true,
			metadata: true,
		},
	],
});
