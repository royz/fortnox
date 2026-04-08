import type { FortnoxListWrap } from "../utility-types";

export type TaxReductionReferenceDocumentType = "INVOICE" | "OFFER" | "ORDER";

export type TaxReductionWorkType =
	| "CHARGINGSTATIONELECTRICVEHICLE"
	| "SOLARCELLS"
	| "STORAGESELFPRODUCEDELECTRICITY";

export type TaxReductionAmount = {
	AskedAmount: number;
	WorkType: TaxReductionWorkType;
};

export type TaxReduction = {
	"@url": string;
	ApprovedAmount: number | null;
	AskedAmount: number;
	BilledAmount: number;
	CustomerName: string;
	Id: number;
	PropertyDesignation: string | null;
	ReferenceDocumentType: TaxReductionReferenceDocumentType;
	ReferenceNumber: string;
	RequestSent: string | null;
	ResidenceAssociationOrganisationNumber: string | null;
	SocialSecurityNumber: string;
	TaxReductionAmounts: TaxReductionAmount[];
	TypeOfReduction: string | null;
	VoucherNumber: number | null;
	VoucherSeries: string | null;
	VoucherYear: number | null;
	WorkType: string;
};

export type TaxReductionResponse = { TaxReduction: TaxReduction };

export type TaxReductionListItem = {
	"@url": string;
	ApprovedAmount: number | null;
	CustomerName: string;
	Id: number;
	ReferenceDocumentType: TaxReductionReferenceDocumentType;
	ReferenceNumber: number;
	SocialSecurityNumber: string;
	WorkType: string;
};

export type TaxReductionListResponse = FortnoxListWrap<
	"TaxReductions",
	TaxReductionListItem
>;
