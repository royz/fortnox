import type { FortnoxListWrap } from "../utility-types";

export type ArticleHouseworkType =
	| "BABYSITTING"
	| "CHARGINGSTATIONELECTRICVEHICLE"
	| "CLEANING"
	| "CONSTRUCTION"
	| "COOKING"
	| "ELECTRICITY"
	| "EMPTYHOUSEWORK"
	| "FURNISHING"
	| "GARDENING"
	| "GLASSMETALWORK"
	| "GROUNDDRAINAGEWORK"
	| "HOMEMAINTENANCE"
	| "HVAC"
	| "MASONRY"
	| "OTHERCARE"
	| "OTHERCOSTS"
	| "PAINTINGWALLPAPERING"
	| "SNOWPLOWING"
	| "SOLARCELLS"
	| "STORAGESELFPRODUCEDELECTRICITY"
	| "TEXTILECLOTHING"
	| "TRANSPORTATIONSERVICES"
	| "TUTORING"
	| "WASHINGANDCAREOFCLOTHING";

export type ArticleType = "SERVICE" | "STOCK";

export type Article = {
	"@url": string;
	Active: boolean;
	ArticleNumber: string;
	Bulky: boolean;
	CommodityCode: string | null;
	ConstructionAccount: number;
	CostCalculationMethod: string | null;
	DefaultStockLocation: string | null;
	DefaultStockPoint: string | null;
	Depth: number | null;
	Description: string;
	DirectCost: number | null;
	DisposableQuantity: number;
	EAN: string;
	EUAccount: number;
	EUVATAccount: number;
	ExportAccount: number;
	Expired: boolean;
	FreightCost: number | null;
	Height: number | null;
	Housework: boolean;
	HouseworkType: ArticleHouseworkType | null;
	Manufacturer: string | null;
	ManufacturerArticleNumber: string | null;
	Note: string;
	OtherCost: number | null;
	PurchaseAccount: number;
	PurchasePrice: number;
	QuantityInStock: number;
	ReservedQuantity: number;
	SalesAccount: number;
	SalesPrice: number;
	StockAccount: number | null;
	StockChangeAccount: number | null;
	StockGoods: boolean;
	StockPlace: string;
	StockValue: number;
	StockWarning: number | null;
	SupplierName: string | null;
	SupplierNumber: string | null;
	Type: ArticleType;
	Unit: string;
	VAT: number;
	WebshopArticle: boolean;
	Weight: number | null;
	Width: number | null;
};

export type ArticleResponse = { Article: Article };

export type ArticleListItem = {
	"@url": string;
	ArticleNumber: string;
	Description: string;
	DisposableQuantity: string;
	EAN: string;
	Housework: boolean;
	PurchasePrice: string;
	QuantityInStock: string;
	ReservedQuantity: string;
	SalesPrice: string;
	StockPlace: string;
	StockValue: string;
	Unit: string;
	VAT: string;
	WebshopArticle: boolean;
};

export type ArticleListResponse = FortnoxListWrap<"Articles", ArticleListItem>;
