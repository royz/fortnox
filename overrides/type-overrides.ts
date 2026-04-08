import type { HTTP_METHODS } from "../lib/utils";
import type { Routes } from "../src/types/official-routes.gen";

type Route = keyof Routes;
type Method = (typeof HTTP_METHODS)[number];

type CustomType = string;

const typeOverrides = new Map<
	Route[],
	{ [key in Method]?: { request?: CustomType; response?: CustomType } }
>();

// Invoices
typeOverrides.set(["/3/invoices"], {
	get: { response: "InvoiceListResponse" },
});

typeOverrides.set(
	[
		"/3/invoices/{DocumentNumber}",
		"/3/invoices/{DocumentNumber}/einvoice",
		"/3/invoices/{DocumentNumber}/email",
		"/3/invoices/{DocumentNumber}/eprint",
	],
	{
		get: { response: "InvoiceResponse" },
	},
);

typeOverrides.set(
	[
		"/3/invoices/{DocumentNumber}",
		"/3/invoices/{DocumentNumber}/bookkeep",
		"/3/invoices/{DocumentNumber}/cancel",
		"/3/invoices/{DocumentNumber}/credit",
		"/3/invoices/{DocumentNumber}/externalprint",
		"/3/invoices/{DocumentNumber}/warehouseready",
	],
	{
		put: { response: "InvoiceResponse" },
	},
);

// Vouchers
typeOverrides.set(
	["/3/vouchers", "/3/vouchers/sublist/{VoucherSeries}", "/3/vouchers/sublist"],
	{
		get: { response: "VoucherListResponse" },
	},
);
typeOverrides.set(["/3/vouchers/{VoucherSeries}/{VoucherNumber}"], {
	get: { response: "VoucherResponse" },
});

// Articles
typeOverrides.set(["/3/articles"], {
	get: { response: "ArticleListResponse" },
});
typeOverrides.set(["/3/articles/{ArticleNumber}"], {
	get: { response: "ArticleResponse" },
});

// Invoice Payments
typeOverrides.set(["/3/invoicepayments"], {
	get: { response: "InvoicePaymentListResponse" },
});
typeOverrides.set(["/3/invoicepayments/{Number}"], {
	get: { response: "InvoicePaymentResponse" },
});
typeOverrides.set(["/3/invoicepayments/{Number}/bookkeep"], {
	put: { response: "InvoicePaymentResponse" },
});

// Tax Reductions
typeOverrides.set(["/3/taxreductions"], {
	get: { response: "TaxReductionListResponse" },
});
typeOverrides.set(["/3/taxreductions/{Id}"], {
	get: { response: "TaxReductionResponse" },
	put: { response: "TaxReductionResponse" },
});

export const flattenedTypeOverrides: {
	[key in Route]?: {
		[key in Method]?: {
			request?: CustomType;
			response?: CustomType;
		};
	};
} = Object.fromEntries(
	Array.from(typeOverrides.entries()).flatMap(([routes, methods]) =>
		routes.map((route) => [route, methods] as const),
	),
);
