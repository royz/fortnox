import type { FortnoxListWrap } from "../utility-types";

export type CustomerDefaultDeliveryTypes = {
	Invoice: "PRINT" | "EMAIL" | "PRINTSERVICE";
	Offer: "PRINT" | "EMAIL" | "PRINTSERVICE";
	Order: "PRINT" | "EMAIL" | "PRINTSERVICE";
};

export type CustomerDefaultTemplates = {
	CashInvoice: string;
	Invoice: string;
	Offer: string;
	Order: string;
};

export type Customer = {
	"@url": string;
	Active: boolean;
	Address1: string | null;
	Address2: string | null;
	City: string | null;
	Comments: string | null;
	CostCenter: string | null;
	Country: string | null;
	CountryCode: string | null;
	Currency: string;
	CustomerNumber: string;
	DefaultDeliveryTypes: CustomerDefaultDeliveryTypes;
	DefaultTemplates: CustomerDefaultTemplates;
	DeliveryAddress1: string | null;
	DeliveryAddress2: string | null;
	DeliveryCity: string | null;
	DeliveryCountry: string | null;
	DeliveryCountryCode: string | null;
	DeliveryFax: string | null;
	DeliveryName: string | null;
	DeliveryPhone1: string | null;
	DeliveryPhone2: string | null;
	DeliveryZipCode: string | null;
	Email: string;
	EmailInvoice: string;
	EmailInvoiceBCC: string;
	EmailInvoiceCC: string;
	EmailOffer: string;
	EmailOfferBCC: string;
	EmailOfferCC: string;
	EmailOrder: string;
	EmailOrderBCC: string;
	EmailOrderCC: string;
	ExternalReference: string | null;
	Fax: string | null;
	GLN: string | null;
	GLNDelivery: string | null;
	InvoiceAdministrationFee: string | null;
	InvoiceDiscount: number | null;
	InvoiceFreight: string | null;
	InvoiceRemark: string;
	Name: string;
	OrganisationNumber: string;
	OurReference: string;
	Phone1: string | null;
	Phone2: string | null;
	PriceList: string;
	Project: string;
	SalesAccount: string | null;
	ShowPriceVATIncluded: boolean;
	TermsOfDelivery: string;
	TermsOfPayment: string;
	Type: "PRIVATE" | "COMPANY";
	VATNumber: string;
	VATType: "SEVAT" | "SEREVERSEDVAT" | "EUREVERSEDVAT" | "EUVAT" | "EXPORT";
	VisitingAddress: string | null;
	VisitingCity: string | null;
	VisitingCountry: string | null;
	VisitingCountryCode: string | null;
	VisitingZipCode: string | null;
	WayOfDelivery: string;
	WWW: string;
	YourReference: string;
	ZipCode: string | null;
};

export type CustomerResponse = { Customer: Customer };

// Standalone type: list has extra `Phone` field which is `Phone1` in single item context,
// and nullable fields (Address1, Address2, City, ZipCode) are non-null in list context.
export type CustomerListItem = {
	"@url": string;
	Address1: string;
	Address2: string;
	City: string;
	CustomerNumber: string;
	Email: string;
	Name: string;
	OrganisationNumber: string;
	Phone: string;
	ZipCode: string;
};

export type CustomerListResponse = FortnoxListWrap<
	"Customers",
	CustomerListItem
>;
