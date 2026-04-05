import path from "node:path";
import dotenv from "dotenv";
import { initFortnox } from "../src/patched";

dotenv.config({ path: path.join(import.meta.dirname, "../.env") });

const fortnox = initFortnox({
	proxy: {
		baseUrl: process.env.PROXY_URL!,
		apiKey: process.env.API_KEY!,
		tenantId: process.env.TENANT_ID!,
	},
});

const { data, error } = await fortnox("/3/invoices").get();
if (error) throw error;

data.Invoices[0]?.DocumentNumber;
