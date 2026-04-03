/**
 * Whatever is defined here, will override the generated schema for the corresponding path and method.
 * (Not implemented yet)
 */

import { type ZodType, z } from "zod";

type Method = "get" | "post" | "put" | "delete" | "patch";

type SchemaOverride = {
	[path in Method]?: {
		params?: ZodType;
		query?: ZodType;
		body?: ZodType;
	};
};

export const schemaOverrides: { [path: string]: SchemaOverride } = {
	"/3/invoices/{DocumentNumber}": {
		get: {
			params: z.object({
				DocumentNumber: z.int(),
			}),
		},
	},
};
