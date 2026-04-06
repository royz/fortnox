import type { FortnoxListWrap } from "../utility-types";

type ReferenceType =
	| "INVOICE"
	| "SUPPLIERINVOICE"
	| "INVOICEPAYMENT"
	| "SUPPLIERPAYMENT"
	| "MANUAL"
	| "CASHINVOICE"
	| "ACCRUAL";

export type VoucherRow = {
	Account: 1930;
	CostCenter: "";
	Credit: 1909;
	Description: "Företagskonto/checkkonto/affärskonto";
	Debit: 0;
	Project: "";
	Removed: false;
	TransactionInformation: "";
	Quantity: 0;
};

export type Voucher = {
	"@url": string;
	Comments: string | null;
	CostCenter: string;
	Description: string;
	Project: string;
	ReferenceNumber: string;
	ReferenceType: ReferenceType;
	TransactionDate: string;
	VoucherNumber: number;
	/** There must be at least two voucher rows */
	VoucherRows: [VoucherRow, VoucherRow, ...VoucherRow[]];
	VoucherSeries: string;
	Year: number;
	ApprovalState: number;
};

export type VoucherResponse = { Voucher: Voucher };

export type VoucherListItem = Pick<
	Voucher,
	| "@url"
	| "Comments"
	| "Description"
	| "ReferenceNumber"
	| "ReferenceType"
	| "TransactionDate"
	| "VoucherNumber"
	| "VoucherSeries"
	| "Year"
	| "ApprovalState"
>;

export type VoucherListResponse = FortnoxListWrap<"Vouchers", VoucherListItem>;
