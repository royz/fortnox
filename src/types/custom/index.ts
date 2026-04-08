export type * from "./article.types";
export type * from "./inbox.types";
export type * from "./invoice.types";
export type * from "./invoicepayment.types";
export type * from "./taxreduction.types";
export type * from "./voucher.types";

/** Pagination information */
export type MetaInformation = {
	"@CurrentPage": number;
	"@TotalPages": number;
	"@TotalResources": number;
};

export type BinaryResponse = {
	file: ArrayBuffer;
	filename?: string;
	mimetype?: string;
};
