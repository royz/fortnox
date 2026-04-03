import path from "node:path";
import dotenv from "dotenv";
import z from "zod";

dotenv.config({
	path: path.join(import.meta.dirname, "./.env"),
});

export const env = z
	.object({
		PROXY_URL: z.url(),
		API_KEY: z.string(),
		TENANT_ID: z.string(),
	})
	.parse(process.env);
