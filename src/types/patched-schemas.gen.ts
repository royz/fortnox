/**
 * Error
 */
export interface OryHydraAPIErrorOAuth2 {
	/**
	 * Error
	 */
	error?: string;
	/**
	 * Error Debug Information
	 *
	 * Only available in dev mode.
	 */
	error_debug?: string;
	/**
	 * Error Description
	 */
	error_description?: string;
	/**
	 * Error Hint
	 *
	 * Helps the user identify the error cause.
	 */
	error_hint?: string;
	/**
	 * HTTP Status Code
	 */
	status_code?: number;
}

/**
 * OAuth2 Token Exchange Result
 */
export interface OryHydraAPIOAuth2TokenExchange {
	/**
	 * The access token issued by the authorization server.
	 */
	access_token?: string;
	/**
	 * The lifetime in seconds of the access token. For
	 * example, the value "3600" denotes that the access token will
	 * expire in one hour from the time the response was generated.
	 */
	expires_in?: number;
	/**
	 * To retrieve a refresh token request the id_token scope.
	 */
	id_token?: string;
	/**
	 * The refresh token, which can be used to obtain new
	 * access tokens. To retrieve it add the scope "offline" to your access token request.
	 */
	refresh_token?: string;
	/**
	 * The scope of the access token
	 */
	scope?: string;
	/**
	 * The type of the token issued
	 */
	token_type?: string;
}

export type RecurringAPIAccrual = {
	accrual_account_number?: number;
	amount?: number;
	revenue_account_number?: number;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
} & {
	created_at?: string;
	id?: string;
	modified_at?: string;
	recurring_id?: string;
	rows?: ({
		account_number?: number;
		cost_center_id?: string;
		credit?: number;
		debit?: number;
		project_id?: string;
		transaction_info?: string;
	} & {
		accrual_id?: string;
		created_at?: string;
		id?: string;
		modified_at?: string;
	})[];
};

export type RecurringAPIAccrualRow = {
	account_number?: number;
	cost_center_id?: string;
	credit?: number;
	debit?: number;
	project_id?: string;
	transaction_info?: string;
} & {
	accrual_id?: string;
	created_at?: string;
	id?: string;
	modified_at?: string;
};

export interface RecurringAPIBaseAccrual {
	accrual_account_number?: number;
	amount?: number;
	revenue_account_number?: number;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
}

export interface RecurringAPIBaseAccrualRow {
	account_number?: number;
	cost_center_id?: string;
	credit?: number;
	debit?: number;
	project_id?: string;
	transaction_info?: string;
}

export interface RecurringAPIBaseDeviation {
	deviation_type?: string;
	invoice_period_start?: string;
	repeat_amount?: number;
	repeat_unit?: string;
}

export interface RecurringAPIBaseRecurring {
	amount_per_invoicing?: number;
	cost_center_id?: string;
	currency?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	delivery?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		phone?: string;
		term_code?: string;
		type_code?: string;
		zip?: string;
	};
	distribution_method?: string;
	email?: {
		to?: string;
	};
	invoice_handling?: string;
	invoice_service_type?: string & {};
	order_number?: string;
	our_reference?: string;
	payment_terms?: string;
	price_list_id?: string;
	print_configuration?: {
		language?: string;
		/**
		 * if no value provided its fetched from settings
		 */
		template?: string;
	};
	project_id?: string;
	remark?: string;
	status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
	tax_reduction_category?: string;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	vat_payment_type?: string;
	your_reference?: string;
}

export interface RecurringAPIBaseTaxReduction {
	amount?: number;
	applicant_name?: string;
	ssn?: string;
}

export type RecurringAPICreateAccrual = {
	accrual_account_number?: number;
	amount?: number;
	revenue_account_number?: number;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
} & {
	rows?: ({
		account_number?: number;
		cost_center_id?: string;
		credit?: number;
		debit?: number;
		project_id?: string;
		transaction_info?: string;
	} & {})[];
};

export type RecurringAPICreateAccrualRow = {
	account_number?: number;
	cost_center_id?: string;
	credit?: number;
	debit?: number;
	project_id?: string;
	transaction_info?: string;
} & {};

export type RecurringAPICreateActiveRecurring = {
	amount_per_invoicing?: number;
	cost_center_id?: string;
	currency?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	delivery?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		phone?: string;
		term_code?: string;
		type_code?: string;
		zip?: string;
	};
	distribution_method?: string;
	email?: {
		to?: string;
	};
	invoice_handling?: string;
	invoice_service_type?: string & {};
	order_number?: string;
	our_reference?: string;
	payment_terms?: string;
	price_list_id?: string;
	print_configuration?: {
		language?: string;
		/**
		 * if no value provided its fetched from settings
		 */
		template?: string;
	};
	project_id?: string;
	remark?: string;
	status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
	tax_reduction_category?: string;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	vat_payment_type?: string;
	your_reference?: string;
} & {
	accrual?: {
		accrual_account_number?: number;
		amount?: number;
		revenue_account_number?: number;
		/**
		 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
		 */
		vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	} & {
		rows?: ({
			account_number?: number;
			cost_center_id?: string;
			credit?: number;
			debit?: number;
			project_id?: string;
			transaction_info?: string;
		} & {})[];
	};
	dates: {
		/**
		 * The amount/interval for the recurring billing cycle
		 */
		amount?: number;
		invoice: {
			/**
			 * The day of the month to anchor invoice dates to
			 */
			anchor_day: number;
			/**
			 * The date that appears on the invoice
			 */
			invoice_date?: string;
			/**
			 * The last date for this recurring billing
			 */
			last_date?: string;
			/**
			 * The date when the invoice should be processed
			 */
			processing_date: string;
		} & {};
		period: {
			/**
			 * The day of the month to anchor period dates to
			 */
			anchor_day: number;
			/**
			 * The period date
			 */
			date: string;
		} & {};
		/**
		 * The unit of time for the recurring billing cycle
		 */
		unit?: string;
	};
	rows: ({
		account_number?: number;
		article_id?: string;
		cost_center_id?: string;
		description?: string;
		discount?: number;
		discount_type?: string;
		price?: number;
		project_id?: string;
		quantity?: number;
		row_index?: number;
		type?: string;
		unit?: string;
		vat_percentage?: number;
	} & {
		tax_reduction_data?: {
			/**
			 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
			 */
			cost_type?: "MATERIAL" | "LABOR";
			hours_to_report?: number;
			tax_reduction_type?: string;
		};
	})[];
	tax_reductions?: ({
		amount?: number;
		applicant_name?: string;
		ssn?: string;
	} & {})[];
};

export interface RecurringAPICreateInvoiceDateConfiguration {
	/**
	 * The day of the month to anchor invoice dates to
	 */
	anchor_day: number;
	/**
	 * The date that appears on the invoice
	 */
	invoice_date?: string;
	/**
	 * The last date for this recurring billing
	 */
	last_date?: string;
	/**
	 * The date when the invoice should be processed
	 */
	processing_date: string;
}

export interface RecurringAPICreateInvoiceRequest {
	/**
	 * List of recurring IDs to create invoices for. When using SYNC processing mode, a maximum of 100 IDs is allowed. For larger batches, use ASYNC processing mode.
	 */
	recurring_ids: string[];
}

export interface RecurringAPICreatePeriodDateConfiguration {
	/**
	 * The day of the month to anchor period dates to
	 */
	anchor_day: number;
	/**
	 * The period date
	 */
	date: string;
}

export interface RecurringAPICreateRecurringDates {
	/**
	 * The amount/interval for the recurring billing cycle
	 */
	amount?: number;
	invoice: {
		/**
		 * The day of the month to anchor invoice dates to
		 */
		anchor_day: number;
		/**
		 * The date that appears on the invoice
		 */
		invoice_date?: string;
		/**
		 * The last date for this recurring billing
		 */
		last_date?: string;
		/**
		 * The date when the invoice should be processed
		 */
		processing_date: string;
	} & {};
	period: {
		/**
		 * The day of the month to anchor period dates to
		 */
		anchor_day: number;
		/**
		 * The period date
		 */
		date: string;
	} & {};
	/**
	 * The unit of time for the recurring billing cycle
	 */
	unit?: string;
}

export type RecurringAPICreateRecurringRow = {
	account_number?: number;
	article_id?: string;
	cost_center_id?: string;
	description?: string;
	discount?: number;
	discount_type?: string;
	price?: number;
	project_id?: string;
	quantity?: number;
	row_index?: number;
	type?: string;
	unit?: string;
	vat_percentage?: number;
} & {
	tax_reduction_data?: {
		/**
		 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
		 */
		cost_type?: "MATERIAL" | "LABOR";
		hours_to_report?: number;
		tax_reduction_type?: string;
	};
};

export type RecurringAPICreateTaxReduction = {
	amount?: number;
	applicant_name?: string;
	ssn?: string;
} & {};

export type RecurringAPIDeviationType = string;

export type RecurringAPIDiscountType = string;

export type RecurringAPIDistributionMethod = string;

export interface RecurringAPIErrorInformation {
	code?: string;
	details?: string;
	message?: string;
}

export interface RecurringAPIErrorLogEntry {
	error_code?: string;
	error_message?: string;
	invoice_number?: number;
	invoice_period_start?: string;
	source?: string;
}

export type RecurringAPIErrorStatus =
	| "HAS_ERROR"
	| "HAS_NO_ERROR"
	| "NO_FILTERING";

export interface RecurringAPIInvoiceDateConfiguration {
	/**
	 * The day of the month to anchor invoice dates to
	 */
	anchor_day?: number;
	/**
	 * The date that appears on the invoice
	 */
	invoice_date?: string;
	/**
	 * The last date for this recurring billing
	 */
	last_date?: string;
	/**
	 * The date when the invoice should be processed
	 */
	processing_date?: string;
}

export type RecurringAPIInvoiceHandling = string;

export interface RecurringAPIInvoiceRequest {
	created_at?: string;
	id?: string;
	items?: {
		created_at?: string;
		errors?: {
			error_code?: string;
			error_message?: string;
			invoice_number?: number;
			invoice_period_start?: string;
			source?: string;
		}[];
		id?: string;
		invoice_numbers?: number[];
		modified_at?: string;
		recurring_id?: string;
		status?: "PENDING" | "PROCESSING" | "COMPLETED" | "PARTIAL" | "FAILED";
	}[];
	modified_at?: string;
	processed_at?: string;
	processing_mode?: "SYNC" | "ASYNC";
	status?: "PENDING" | "PROCESSING" | "COMPLETED" | "PARTIAL" | "FAILED";
}

export interface RecurringAPIInvoiceRequestItem {
	created_at?: string;
	errors?: {
		error_code?: string;
		error_message?: string;
		invoice_number?: number;
		invoice_period_start?: string;
		source?: string;
	}[];
	id?: string;
	invoice_numbers?: number[];
	modified_at?: string;
	recurring_id?: string;
	status?: "PENDING" | "PROCESSING" | "COMPLETED" | "PARTIAL" | "FAILED";
}

export type RecurringAPIInvoiceRequestStatus =
	| "PENDING"
	| "PROCESSING"
	| "COMPLETED"
	| "PARTIAL"
	| "FAILED";

/**
 * Indicates the type of invoice service used for automatic invoice handling:
 * - WITH_REMINDERS: Full invoice service, including reminders.
 * - WITHOUT_REMINDERS: Light invoice service, only invoice creation and delivery without automatic reminders.
 *
 */
export type RecurringAPIInvoiceServiceType = string;

export type RecurringAPIJsonPatchDocument = {
	from?: string;
	op: "add" | "remove" | "replace";
	path: string;
	/**
	 * Value used by add, replace, and remove operations.
	 */
	value?:
		| string
		| number
		| boolean
		| ({
				amount_per_invoicing?: number;
				cost_center_id?: string;
				currency?: string;
				customer?: {
					address?: string;
					city?: string;
					country_code?: string;
					name?: string;
					number: string;
					phone?: string;
					zip?: string;
				};
				delivery?: {
					address?: string;
					city?: string;
					country_code?: string;
					name?: string;
					phone?: string;
					term_code?: string;
					type_code?: string;
					zip?: string;
				};
				distribution_method?: string;
				email?: {
					to?: string;
				};
				invoice_handling?: string;
				invoice_service_type?: string & {};
				order_number?: string;
				our_reference?: string;
				payment_terms?: string;
				price_list_id?: string;
				print_configuration?: {
					language?: string;
					/**
					 * if no value provided its fetched from settings
					 */
					template?: string;
				};
				project_id?: string;
				remark?: string;
				status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
				tax_reduction_category?: string;
				/**
				 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
				 */
				vat_option?: "INCLUSIVE" | "EXCLUSIVE";
				vat_payment_type?: string;
				your_reference?: string;
		  } & {
				accrual?: {
					accrual_account_number?: number;
					amount?: number;
					revenue_account_number?: number;
					rows?: ({
						account_number?: number;
						cost_center_id?: string;
						credit?: number;
						debit?: number;
						project_id?: string;
						transaction_info?: string;
					} & {})[];
					/**
					 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
					 */
					vat_option?: "INCLUSIVE" | "EXCLUSIVE";
				};
				customer?: {
					address?: string;
					city?: string;
					country_code?: string;
					name?: string;
					number?: string;
					phone?: string;
					zip?: string;
				};
				dates?: {
					amount?: number;
					invoice?: {
						/**
						 * The day of the month to anchor invoice dates to
						 */
						anchor_day?: number;
						/**
						 * The date that appears on the invoice
						 */
						invoice_date?: string;
						/**
						 * The last date for this recurring billing
						 */
						last_date?: string;
						/**
						 * The date when the invoice should be processed
						 */
						processing_date?: string;
					};
					period?: {
						/**
						 * The day of the month to anchor period dates to
						 */
						anchor_day?: number;
						/**
						 * The period date
						 */
						date?: string;
					};
					unit?: string;
				};
				rows?: ({
					account_number?: number;
					article_id?: string;
					cost_center_id?: string;
					description?: string;
					discount?: number;
					discount_type?: string;
					price?: number;
					project_id?: string;
					quantity?: number;
					row_index?: number;
					type?: string;
					unit?: string;
					vat_percentage?: number;
				} & {})[];
				tax_reductions?: ({
					amount?: number;
					applicant_name?: string;
					ssn?: string;
				} & {})[];
		  })
		| ({
				deviation_type?: string;
				invoice_period_start?: string;
				repeat_amount?: number;
				repeat_unit?: string;
		  } & {
				accrual?: {
					accrual_account_number?: number;
					amount?: number;
					revenue_account_number?: number;
					rows?: ({
						account_number?: number;
						cost_center_id?: string;
						credit?: number;
						debit?: number;
						project_id?: string;
						transaction_info?: string;
					} & {})[];
					/**
					 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
					 */
					vat_option?: "INCLUSIVE" | "EXCLUSIVE";
				};
				rows?: {
					account_number?: number;
					article_id?: string;
					cost_center_id?: string;
					description?: string;
					discount?: number;
					discount_type?: string;
					price?: number;
					project_id?: string;
					quantity?: number;
					type?: string;
					unit?: string;
					vat_percentage?: number;
				}[];
		  })
		| ({
				account_number?: number;
				article_id?: string;
				cost_center_id?: string;
				description?: string;
				discount?: number;
				discount_type?: string;
				price?: number;
				project_id?: string;
				quantity?: number;
				row_index?: number;
				type?: string;
				unit?: string;
				vat_percentage?: number;
		  } & {})
		| {
				account_number?: number;
				article_id?: string;
				cost_center_id?: string;
				description?: string;
				discount?: number;
				discount_type?: string;
				price?: number;
				project_id?: string;
				quantity?: number;
				type?: string;
				unit?: string;
				vat_percentage?: number;
		  }
		| ({
				amount?: number;
				applicant_name?: string;
				ssn?: string;
		  } & {})
		| {
				accrual_account_number?: number;
				amount?: number;
				revenue_account_number?: number;
				rows?: ({
					account_number?: number;
					cost_center_id?: string;
					credit?: number;
					debit?: number;
					project_id?: string;
					transaction_info?: string;
				} & {})[];
				/**
				 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
				 */
				vat_option?: "INCLUSIVE" | "EXCLUSIVE";
		  }
		| ({
				account_number?: number;
				cost_center_id?: string;
				credit?: number;
				debit?: number;
				project_id?: string;
				transaction_info?: string;
		  } & {})
		| {
				amount?: number;
				invoice?: {
					/**
					 * The day of the month to anchor invoice dates to
					 */
					anchor_day?: number;
					/**
					 * The date that appears on the invoice
					 */
					invoice_date?: string;
					/**
					 * The last date for this recurring billing
					 */
					last_date?: string;
					/**
					 * The date when the invoice should be processed
					 */
					processing_date?: string;
				};
				period?: {
					/**
					 * The day of the month to anchor period dates to
					 */
					anchor_day?: number;
					/**
					 * The period date
					 */
					date?: string;
				};
				unit?: string;
		  }
		| {
				address?: string;
				city?: string;
				country_code?: string;
				name?: string;
				number?: string;
				phone?: string;
				zip?: string;
		  };
}[];

export interface RecurringAPIJsonPatchOperation {
	from?: string;
	op: "add" | "remove" | "replace";
	path: string;
	/**
	 * Value used by add, replace, and remove operations.
	 */
	value?:
		| string
		| number
		| boolean
		| ({
				amount_per_invoicing?: number;
				cost_center_id?: string;
				currency?: string;
				customer?: {
					address?: string;
					city?: string;
					country_code?: string;
					name?: string;
					number: string;
					phone?: string;
					zip?: string;
				};
				delivery?: {
					address?: string;
					city?: string;
					country_code?: string;
					name?: string;
					phone?: string;
					term_code?: string;
					type_code?: string;
					zip?: string;
				};
				distribution_method?: string;
				email?: {
					to?: string;
				};
				invoice_handling?: string;
				invoice_service_type?: string & {};
				order_number?: string;
				our_reference?: string;
				payment_terms?: string;
				price_list_id?: string;
				print_configuration?: {
					language?: string;
					/**
					 * if no value provided its fetched from settings
					 */
					template?: string;
				};
				project_id?: string;
				remark?: string;
				status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
				tax_reduction_category?: string;
				/**
				 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
				 */
				vat_option?: "INCLUSIVE" | "EXCLUSIVE";
				vat_payment_type?: string;
				your_reference?: string;
		  } & {
				accrual?: {
					accrual_account_number?: number;
					amount?: number;
					revenue_account_number?: number;
					rows?: ({
						account_number?: number;
						cost_center_id?: string;
						credit?: number;
						debit?: number;
						project_id?: string;
						transaction_info?: string;
					} & {})[];
					/**
					 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
					 */
					vat_option?: "INCLUSIVE" | "EXCLUSIVE";
				};
				customer?: {
					address?: string;
					city?: string;
					country_code?: string;
					name?: string;
					number?: string;
					phone?: string;
					zip?: string;
				};
				dates?: {
					amount?: number;
					invoice?: {
						/**
						 * The day of the month to anchor invoice dates to
						 */
						anchor_day?: number;
						/**
						 * The date that appears on the invoice
						 */
						invoice_date?: string;
						/**
						 * The last date for this recurring billing
						 */
						last_date?: string;
						/**
						 * The date when the invoice should be processed
						 */
						processing_date?: string;
					};
					period?: {
						/**
						 * The day of the month to anchor period dates to
						 */
						anchor_day?: number;
						/**
						 * The period date
						 */
						date?: string;
					};
					unit?: string;
				};
				rows?: ({
					account_number?: number;
					article_id?: string;
					cost_center_id?: string;
					description?: string;
					discount?: number;
					discount_type?: string;
					price?: number;
					project_id?: string;
					quantity?: number;
					row_index?: number;
					type?: string;
					unit?: string;
					vat_percentage?: number;
				} & {})[];
				tax_reductions?: ({
					amount?: number;
					applicant_name?: string;
					ssn?: string;
				} & {})[];
		  })
		| ({
				deviation_type?: string;
				invoice_period_start?: string;
				repeat_amount?: number;
				repeat_unit?: string;
		  } & {
				accrual?: {
					accrual_account_number?: number;
					amount?: number;
					revenue_account_number?: number;
					rows?: ({
						account_number?: number;
						cost_center_id?: string;
						credit?: number;
						debit?: number;
						project_id?: string;
						transaction_info?: string;
					} & {})[];
					/**
					 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
					 */
					vat_option?: "INCLUSIVE" | "EXCLUSIVE";
				};
				rows?: {
					account_number?: number;
					article_id?: string;
					cost_center_id?: string;
					description?: string;
					discount?: number;
					discount_type?: string;
					price?: number;
					project_id?: string;
					quantity?: number;
					type?: string;
					unit?: string;
					vat_percentage?: number;
				}[];
		  })
		| ({
				account_number?: number;
				article_id?: string;
				cost_center_id?: string;
				description?: string;
				discount?: number;
				discount_type?: string;
				price?: number;
				project_id?: string;
				quantity?: number;
				row_index?: number;
				type?: string;
				unit?: string;
				vat_percentage?: number;
		  } & {})
		| {
				account_number?: number;
				article_id?: string;
				cost_center_id?: string;
				description?: string;
				discount?: number;
				discount_type?: string;
				price?: number;
				project_id?: string;
				quantity?: number;
				type?: string;
				unit?: string;
				vat_percentage?: number;
		  }
		| ({
				amount?: number;
				applicant_name?: string;
				ssn?: string;
		  } & {})
		| {
				accrual_account_number?: number;
				amount?: number;
				revenue_account_number?: number;
				rows?: ({
					account_number?: number;
					cost_center_id?: string;
					credit?: number;
					debit?: number;
					project_id?: string;
					transaction_info?: string;
				} & {})[];
				/**
				 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
				 */
				vat_option?: "INCLUSIVE" | "EXCLUSIVE";
		  }
		| ({
				account_number?: number;
				cost_center_id?: string;
				credit?: number;
				debit?: number;
				project_id?: string;
				transaction_info?: string;
		  } & {})
		| {
				amount?: number;
				invoice?: {
					/**
					 * The day of the month to anchor invoice dates to
					 */
					anchor_day?: number;
					/**
					 * The date that appears on the invoice
					 */
					invoice_date?: string;
					/**
					 * The last date for this recurring billing
					 */
					last_date?: string;
					/**
					 * The date when the invoice should be processed
					 */
					processing_date?: string;
				};
				period?: {
					/**
					 * The day of the month to anchor period dates to
					 */
					anchor_day?: number;
					/**
					 * The period date
					 */
					date?: string;
				};
				unit?: string;
		  }
		| {
				address?: string;
				city?: string;
				country_code?: string;
				name?: string;
				number?: string;
				phone?: string;
				zip?: string;
		  };
}

export type RecurringAPILanguage = string;

export type RecurringAPILengthUnit = string;

export interface RecurringAPIListAccrual {
	accrual_account_number?: number;
	amount?: number;
	created_at?: string;
	id?: string;
	modified_at?: string;
	recurring_id?: string;
	revenue_account_number?: number;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
}

export type RecurringAPIListRecurring = {
	amount_per_invoicing?: number;
	cost_center_id?: string;
	currency?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	delivery?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		phone?: string;
		term_code?: string;
		type_code?: string;
		zip?: string;
	};
	distribution_method?: string;
	email?: {
		to?: string;
	};
	invoice_handling?: string;
	invoice_service_type?: string & {};
	order_number?: string;
	our_reference?: string;
	payment_terms?: string;
	price_list_id?: string;
	print_configuration?: {
		language?: string;
		/**
		 * if no value provided its fetched from settings
		 */
		template?: string;
	};
	project_id?: string;
	remark?: string;
	status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
	tax_reduction_category?: string;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	vat_payment_type?: string;
	your_reference?: string;
} & {
	accrual?: {
		accrual_account_number?: number;
		amount?: number;
		created_at?: string;
		id?: string;
		modified_at?: string;
		recurring_id?: string;
		revenue_account_number?: number;
		/**
		 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
		 */
		vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	};
	created_at?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	dates?: {
		/**
		 * The amount/interval for the recurring billing cycle
		 */
		amount?: number;
		invoice?: {
			/**
			 * The day of the month to anchor invoice dates to
			 */
			anchor_day?: number;
			/**
			 * The date that appears on the invoice
			 */
			invoice_date?: string;
			/**
			 * The last date for this recurring billing
			 */
			last_date?: string;
			/**
			 * The date when the invoice should be processed
			 */
			processing_date?: string;
		} & {};
		period?: {
			/**
			 * The day of the month to anchor period dates to
			 */
			anchor_day?: number;
			/**
			 * The period date
			 */
			date?: string;
		} & {};
		/**
		 * The unit of time for the recurring billing cycle
		 */
		unit?: string;
	};
	id?: string;
	modified_at?: string;
	serial_number?: number;
	totals?: {
		excl_vat?: number;
		incl_vat?: number;
		roundoff?: number;
		vat?: number;
	};
};

export interface RecurringAPIPartialAccrual {
	accrual_account_number?: number;
	amount?: number;
	revenue_account_number?: number;
	rows?: ({
		account_number?: number;
		cost_center_id?: string;
		credit?: number;
		debit?: number;
		project_id?: string;
		transaction_info?: string;
	} & {})[];
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
}

export type RecurringAPIPartialAccrualRow = {
	account_number?: number;
	cost_center_id?: string;
	credit?: number;
	debit?: number;
	project_id?: string;
	transaction_info?: string;
} & {};

export type RecurringAPIPartialDeviation = {
	deviation_type?: string;
	invoice_period_start?: string;
	repeat_amount?: number;
	repeat_unit?: string;
} & {
	accrual?: {
		accrual_account_number?: number;
		amount?: number;
		revenue_account_number?: number;
		rows?: ({
			account_number?: number;
			cost_center_id?: string;
			credit?: number;
			debit?: number;
			project_id?: string;
			transaction_info?: string;
		} & {})[];
		/**
		 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
		 */
		vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	};
	rows?: {
		account_number?: number;
		article_id?: string;
		cost_center_id?: string;
		description?: string;
		discount?: number;
		discount_type?: string;
		price?: number;
		project_id?: string;
		quantity?: number;
		type?: string;
		unit?: string;
		vat_percentage?: number;
	}[];
};

export interface RecurringAPIPartialDeviationRow {
	account_number?: number;
	article_id?: string;
	cost_center_id?: string;
	description?: string;
	discount?: number;
	discount_type?: string;
	price?: number;
	project_id?: string;
	quantity?: number;
	type?: string;
	unit?: string;
	vat_percentage?: number;
}

export type RecurringAPIPartialRecurring = {
	amount_per_invoicing?: number;
	cost_center_id?: string;
	currency?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	delivery?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		phone?: string;
		term_code?: string;
		type_code?: string;
		zip?: string;
	};
	distribution_method?: string;
	email?: {
		to?: string;
	};
	invoice_handling?: string;
	invoice_service_type?: string & {};
	order_number?: string;
	our_reference?: string;
	payment_terms?: string;
	price_list_id?: string;
	print_configuration?: {
		language?: string;
		/**
		 * if no value provided its fetched from settings
		 */
		template?: string;
	};
	project_id?: string;
	remark?: string;
	status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
	tax_reduction_category?: string;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	vat_payment_type?: string;
	your_reference?: string;
} & {
	accrual?: {
		accrual_account_number?: number;
		amount?: number;
		revenue_account_number?: number;
		rows?: ({
			account_number?: number;
			cost_center_id?: string;
			credit?: number;
			debit?: number;
			project_id?: string;
			transaction_info?: string;
		} & {})[];
		/**
		 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
		 */
		vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	};
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number?: string;
		phone?: string;
		zip?: string;
	};
	dates?: {
		amount?: number;
		invoice?: {
			/**
			 * The day of the month to anchor invoice dates to
			 */
			anchor_day?: number;
			/**
			 * The date that appears on the invoice
			 */
			invoice_date?: string;
			/**
			 * The last date for this recurring billing
			 */
			last_date?: string;
			/**
			 * The date when the invoice should be processed
			 */
			processing_date?: string;
		};
		period?: {
			/**
			 * The day of the month to anchor period dates to
			 */
			anchor_day?: number;
			/**
			 * The period date
			 */
			date?: string;
		};
		unit?: string;
	};
	rows?: ({
		account_number?: number;
		article_id?: string;
		cost_center_id?: string;
		description?: string;
		discount?: number;
		discount_type?: string;
		price?: number;
		project_id?: string;
		quantity?: number;
		row_index?: number;
		type?: string;
		unit?: string;
		vat_percentage?: number;
	} & {})[];
	tax_reductions?: ({
		amount?: number;
		applicant_name?: string;
		ssn?: string;
	} & {})[];
};

export interface RecurringAPIPartialRecurringCustomer {
	address?: string;
	city?: string;
	country_code?: string;
	name?: string;
	number?: string;
	phone?: string;
	zip?: string;
}

export interface RecurringAPIPartialRecurringDates {
	amount?: number;
	invoice?: {
		/**
		 * The day of the month to anchor invoice dates to
		 */
		anchor_day?: number;
		/**
		 * The date that appears on the invoice
		 */
		invoice_date?: string;
		/**
		 * The last date for this recurring billing
		 */
		last_date?: string;
		/**
		 * The date when the invoice should be processed
		 */
		processing_date?: string;
	};
	period?: {
		/**
		 * The day of the month to anchor period dates to
		 */
		anchor_day?: number;
		/**
		 * The period date
		 */
		date?: string;
	};
	unit?: string;
}

export type RecurringAPIPartialRecurringRow = {
	account_number?: number;
	article_id?: string;
	cost_center_id?: string;
	description?: string;
	discount?: number;
	discount_type?: string;
	price?: number;
	project_id?: string;
	quantity?: number;
	row_index?: number;
	type?: string;
	unit?: string;
	vat_percentage?: number;
} & {};

export type RecurringAPIPartialTaxReduction = {
	amount?: number;
	applicant_name?: string;
	ssn?: string;
} & {};

export interface RecurringAPIPeriodDateConfiguration {
	/**
	 * The day of the month to anchor period dates to
	 */
	anchor_day?: number;
	/**
	 * The period date
	 */
	date?: string;
}

export interface RecurringAPIPrintConfiguration {
	language?: string;
	/**
	 * if no value provided its fetched from settings
	 */
	template?: string;
}

export type RecurringAPIProcessingMode = "SYNC" | "ASYNC";

export type RecurringAPIRecurring = {
	amount_per_invoicing?: number;
	cost_center_id?: string;
	currency?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	delivery?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		phone?: string;
		term_code?: string;
		type_code?: string;
		zip?: string;
	};
	distribution_method?: string;
	email?: {
		to?: string;
	};
	invoice_handling?: string;
	invoice_service_type?: string & {};
	order_number?: string;
	our_reference?: string;
	payment_terms?: string;
	price_list_id?: string;
	print_configuration?: {
		language?: string;
		/**
		 * if no value provided its fetched from settings
		 */
		template?: string;
	};
	project_id?: string;
	remark?: string;
	status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
	tax_reduction_category?: string;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	vat_payment_type?: string;
	your_reference?: string;
} & {
	accrual?: {
		accrual_account_number?: number;
		amount?: number;
		revenue_account_number?: number;
		/**
		 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
		 */
		vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	} & {
		created_at?: string;
		id?: string;
		modified_at?: string;
		recurring_id?: string;
		rows?: ({
			account_number?: number;
			cost_center_id?: string;
			credit?: number;
			debit?: number;
			project_id?: string;
			transaction_info?: string;
		} & {
			accrual_id?: string;
			created_at?: string;
			id?: string;
			modified_at?: string;
		})[];
	};
	created_at?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	dates?: {
		/**
		 * The amount/interval for the recurring billing cycle
		 */
		amount?: number;
		invoice?: {
			/**
			 * The day of the month to anchor invoice dates to
			 */
			anchor_day?: number;
			/**
			 * The date that appears on the invoice
			 */
			invoice_date?: string;
			/**
			 * The last date for this recurring billing
			 */
			last_date?: string;
			/**
			 * The date when the invoice should be processed
			 */
			processing_date?: string;
		} & {};
		period?: {
			/**
			 * The day of the month to anchor period dates to
			 */
			anchor_day?: number;
			/**
			 * The period date
			 */
			date?: string;
		} & {};
		/**
		 * The unit of time for the recurring billing cycle
		 */
		unit?: string;
	};
	error_logs?: {
		error_code?: string;
		error_message?: string;
		invoice_number?: number;
		invoice_period_start?: string;
		source?: string;
	}[];
	id?: string;
	modified_at?: string;
	rows?: ({
		account_number?: number;
		article_id?: string;
		cost_center_id?: string;
		description?: string;
		discount?: number;
		discount_type?: string;
		price?: number;
		project_id?: string;
		quantity?: number;
		row_index?: number;
		type?: string;
		unit?: string;
		vat_percentage?: number;
	} & {
		created_at?: string;
		id?: string;
		modified_at?: string;
		recurring_id?: string;
		tax_reduction_data?: {
			/**
			 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
			 */
			cost_type?: "MATERIAL" | "LABOR";
			hours_to_report?: number;
			tax_reduction_type?: string;
		};
		totals?: {
			excl_vat?: number;
			incl_vat?: number;
			vat?: number;
		};
	})[];
	serial_number?: number;
	tax_reductions?: ({
		amount?: number;
		applicant_name?: string;
		ssn?: string;
	} & {
		created_at?: string;
		id?: string;
		modified_at?: string;
		recurring_id?: string;
	})[];
	totals?: {
		excl_vat?: number;
		incl_vat?: number;
		roundoff?: number;
		vat?: number;
	};
};

export interface RecurringAPIRecurringCustomer {
	address?: string;
	city?: string;
	country_code?: string;
	name?: string;
	number: string;
	phone?: string;
	zip?: string;
}

export interface RecurringAPIRecurringDates {
	/**
	 * The amount/interval for the recurring billing cycle
	 */
	amount?: number;
	invoice?: {
		/**
		 * The day of the month to anchor invoice dates to
		 */
		anchor_day?: number;
		/**
		 * The date that appears on the invoice
		 */
		invoice_date?: string;
		/**
		 * The last date for this recurring billing
		 */
		last_date?: string;
		/**
		 * The date when the invoice should be processed
		 */
		processing_date?: string;
	} & {};
	period?: {
		/**
		 * The day of the month to anchor period dates to
		 */
		anchor_day?: number;
		/**
		 * The period date
		 */
		date?: string;
	} & {};
	/**
	 * The unit of time for the recurring billing cycle
	 */
	unit?: string;
}

export interface RecurringAPIRecurringDelivery {
	address?: string;
	city?: string;
	country_code?: string;
	name?: string;
	phone?: string;
	term_code?: string;
	type_code?: string;
	zip?: string;
}

export interface RecurringAPIRecurringEmail {
	to?: string;
}

export type RecurringAPIRecurringErrorSource = string;

export type RecurringAPIRecurringRow = {
	account_number?: number;
	article_id?: string;
	cost_center_id?: string;
	description?: string;
	discount?: number;
	discount_type?: string;
	price?: number;
	project_id?: string;
	quantity?: number;
	row_index?: number;
	type?: string;
	unit?: string;
	vat_percentage?: number;
} & {
	created_at?: string;
	id?: string;
	modified_at?: string;
	recurring_id?: string;
	tax_reduction_data?: {
		/**
		 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
		 */
		cost_type?: "MATERIAL" | "LABOR";
		hours_to_report?: number;
		tax_reduction_type?: string;
	};
	totals?: {
		excl_vat?: number;
		incl_vat?: number;
		vat?: number;
	};
};

/**
 * Available fields to sort recurring contracts by:
 * - serialNumber: Sort by recurring serial number
 * - customerId: Sort by customer ID
 * - customerName: Sort by customer name
 * - nextInvoiceDate: Sort by next invoice date
 * - invoiceDate: Sort by invoice date
 *
 */
export type RecurringAPIRecurringSortBy = string;

export type RecurringAPIRecurringStatus =
	| "DRAFT"
	| "ACTIVE"
	| "INACTIVE"
	| "FINISHED";

export interface RecurringAPIRecurringTotals {
	excl_vat?: number;
	incl_vat?: number;
	roundoff?: number;
	vat?: number;
}

export interface RecurringAPIRowBase {
	account_number?: number;
	article_id?: string;
	cost_center_id?: string;
	description?: string;
	discount?: number;
	discount_type?: string;
	price?: number;
	project_id?: string;
	quantity?: number;
	row_index?: number;
	type?: string;
	unit?: string;
	vat_percentage?: number;
}

export interface RecurringAPIRowTotals {
	excl_vat?: number;
	incl_vat?: number;
	vat?: number;
}

export type RecurringAPIRowType = string;

/**
 * Sort order direction:
 * - ASC: Ascending order (A-Z, 0-9, earliest to latest)
 * - DESC: Descending order (Z-A, 9-0, latest to earliest)
 */
export type RecurringAPISortOrder = "ASC" | "DESC";

export type RecurringAPITaxReduction = {
	amount?: number;
	applicant_name?: string;
	ssn?: string;
} & {
	created_at?: string;
	id?: string;
	modified_at?: string;
	recurring_id?: string;
};

/**
 * Types of tax reduction articles:
 * - NOT_HOUSEWORK: No tax reduction (0%)
 * - RUT category (50%): CLEANING, TEXTILE_CLOTHING, SNOWPLOWING, GARDENING, BABYSITTING, OTHER_CARE, MOVING_SERVICES, IT_SERVICES, MAJOR_APPLIANCE_REPAIR, FURNISHING, HOME_MAINTENANCE, TRANSPORTATION_SERVICES, WASHING_AND_CARE_OF_CLOTHING
 * - ROT category (30%): CONSTRUCTION, ELECTRICITY, GLASS_METAL_WORK, GROUND_DRAINAGE_WORK, MASONRY, PAINTING_WALLPAPERING, HVAC
 * - GREEN category: SOLAR_CELLS (20%), STORAGE_SELF_PRODUCED_ELECTRICITY (50%), CHARGING_STATION_ELECTRIC_VEHICLE (50%)
 * - OTHER_COSTS: Other costs (0%) for tax reduction
 *
 */
export type RecurringAPITaxReductionArticleType = string;

export type RecurringAPITaxReductionCategory = string;

/**
 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
 */
export type RecurringAPITaxReductionCostType = "MATERIAL" | "LABOR";

export interface RecurringAPITaxReductionData {
	/**
	 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
	 */
	cost_type?: "MATERIAL" | "LABOR";
	hours_to_report?: number;
	tax_reduction_type?: string;
}

export type RecurringAPIUpdateAccrual = {
	accrual_account_number?: number;
	amount?: number;
	revenue_account_number?: number;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
} & {
	id?: string;
	rows?: ({
		account_number?: number;
		cost_center_id?: string;
		credit?: number;
		debit?: number;
		project_id?: string;
		transaction_info?: string;
	} & {
		id?: string;
	})[];
};

export type RecurringAPIUpdateAccrualRow = {
	account_number?: number;
	cost_center_id?: string;
	credit?: number;
	debit?: number;
	project_id?: string;
	transaction_info?: string;
} & {
	id?: string;
};

export type RecurringAPIUpdateRecurring = {
	amount_per_invoicing?: number;
	cost_center_id?: string;
	currency?: string;
	customer?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		number: string;
		phone?: string;
		zip?: string;
	};
	delivery?: {
		address?: string;
		city?: string;
		country_code?: string;
		name?: string;
		phone?: string;
		term_code?: string;
		type_code?: string;
		zip?: string;
	};
	distribution_method?: string;
	email?: {
		to?: string;
	};
	invoice_handling?: string;
	invoice_service_type?: string & {};
	order_number?: string;
	our_reference?: string;
	payment_terms?: string;
	price_list_id?: string;
	print_configuration?: {
		language?: string;
		/**
		 * if no value provided its fetched from settings
		 */
		template?: string;
	};
	project_id?: string;
	remark?: string;
	status?: "DRAFT" | "ACTIVE" | "INACTIVE" | "FINISHED";
	tax_reduction_category?: string;
	/**
	 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
	 */
	vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	vat_payment_type?: string;
	your_reference?: string;
} & {
	accrual?: {
		accrual_account_number?: number;
		amount?: number;
		revenue_account_number?: number;
		/**
		 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
		 */
		vat_option?: "INCLUSIVE" | "EXCLUSIVE";
	} & {
		id?: string;
		rows?: ({
			account_number?: number;
			cost_center_id?: string;
			credit?: number;
			debit?: number;
			project_id?: string;
			transaction_info?: string;
		} & {
			id?: string;
		})[];
	};
	dates: {
		/**
		 * The amount/interval for the recurring billing cycle
		 */
		amount?: number;
		invoice?: {
			/**
			 * The day of the month to anchor invoice dates to
			 */
			anchor_day?: number;
			/**
			 * The date that appears on the invoice
			 */
			invoice_date?: string;
			/**
			 * The last date for this recurring billing
			 */
			last_date?: string;
			/**
			 * The date when the invoice should be processed
			 */
			processing_date?: string;
		} & {};
		period?: {
			/**
			 * The day of the month to anchor period dates to
			 */
			anchor_day?: number;
			/**
			 * The period date
			 */
			date?: string;
		} & {};
		/**
		 * The unit of time for the recurring billing cycle
		 */
		unit?: string;
	};
	rows?: ({
		account_number?: number;
		article_id?: string;
		cost_center_id?: string;
		description?: string;
		discount?: number;
		discount_type?: string;
		price?: number;
		project_id?: string;
		quantity?: number;
		row_index?: number;
		type?: string;
		unit?: string;
		vat_percentage?: number;
	} & {
		id?: string;
		tax_reduction_data?: {
			/**
			 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
			 */
			cost_type?: "MATERIAL" | "LABOR";
			hours_to_report?: number;
			tax_reduction_type?: string;
		};
	})[];
	tax_reductions?: ({
		amount?: number;
		applicant_name?: string;
		ssn?: string;
	} & {
		id?: string;
	})[];
};

export type RecurringAPIUpdateRecurringRow = {
	account_number?: number;
	article_id?: string;
	cost_center_id?: string;
	description?: string;
	discount?: number;
	discount_type?: string;
	price?: number;
	project_id?: string;
	quantity?: number;
	row_index?: number;
	type?: string;
	unit?: string;
	vat_percentage?: number;
} & {
	id?: string;
	tax_reduction_data?: {
		/**
		 * Indicates if the row represents material costs (MATERIAL) or labor costs (LABOR) for tax reduction calculations
		 */
		cost_type?: "MATERIAL" | "LABOR";
		hours_to_report?: number;
		tax_reduction_type?: string;
	};
};

export type RecurringAPIUpdateTaxReduction = {
	amount?: number;
	applicant_name?: string;
	ssn?: string;
} & {
	id?: string;
};

/**
 * Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)
 */
export type RecurringAPIVatOption = "INCLUSIVE" | "EXCLUSIVE";

export type RecurringAPIVatPaymentType = string;

export interface BureauActivity {
	/**
	 * @minItems 1
	 * @maxItems 2147483647
	 */
	assignees?: [string, ...string[]];
	assignmentId?: string;
	bureauId?: number;
	clientDbId?: number;
	clientId: string;
	comment?: string;
	date: string;
	digitalActivityType?:
		| "TO_HANDLE"
		| "SENDER_TO_HANDLE"
		| "PAYMENTS_TO_BOOKKEEP"
		| "INTERPRETING_IN_PROGRESS"
		| "INCOMING_INVOICE"
		| "TO_AUTHORIZE"
		| "TO_BOOKKEEP"
		| "PAYMENTS_TO_AUTHORIZE"
		| "TO_PAY"
		| "INACTIVE_PAYMENT_FILE"
		| "PAYMENT_PENDING"
		| "CUSTOMER_INVOICES_TO_BOOKKEEP"
		| "TO_APPLY_FOR"
		| "REPORTS_TO_ATTEST"
		| "REPORTS_TO_SEND"
		| "INVALID_REPORTS"
		| "PARTIAL_REPORTS"
		| "INCOMING_REQUESTS";
	estimatedTimeMinutes?: number;
	finished: boolean;
	id?: string;
	metaData?: {};
	relatedPeriodEnd?: string;
	relatedPeriodStart?: string;
	reminderDate?: string;
	status?: "NEW" | "MIN" | "MAR" | "COM" | "DON";
	subType:
		| "ACC"
		| "DCA"
		| "CAP"
		| "REC"
		| "RTC"
		| "DVO"
		| "DDT"
		| "DER"
		| "DEP"
		| "DBT"
		| "OAC"
		| "VAT"
		| "EBD"
		| "RVT"
		| "PAV"
		| "SAL"
		| "CIV"
		| "ECI"
		| "MAR"
		| "RAR"
		| "CRE"
		| "TRE"
		| "DCI"
		| "SIV"
		| "SIN"
		| "SIA"
		| "CPP"
		| "PAL"
		| "SIB"
		| "SID"
		| "SRG"
		| "SPY"
		| "SRP"
		| "REQ"
		| "OSI"
		| "FBK"
		| "PEC"
		| "OER"
		| "AIS"
		| "FSA"
		| "QFA"
		| "PRY"
		| "COR"
		| "MFA"
		| "OWN"
		| "OWS"
		| "ANR"
		| "DEC"
		| "SAA"
		| "FAR"
		| "OAR"
		| "INC"
		| "EPD"
		| "EPA"
		| "IIT"
		| "PLA"
		| "QID"
		| "PIN"
		| "LID"
		| "PAR"
		| "CRP"
		| "SPC"
		| "PAY"
		| "AVD"
		| "ADI"
		| "PAT"
		| "ORE"
		| "FRE"
		| "STA"
		| "KUS"
		| "KUI"
		| "KUD"
		| "OW1";
	title: string;
	type:
		| "ACC"
		| "VAT"
		| "SAL"
		| "CIV"
		| "SIV"
		| "FBK"
		| "ANR"
		| "INC"
		| "PAR"
		| "OW1";
	urgency?: "URGENT" | "FUTURE" | "AVAILABLE";
	warningDate?: string;
}

export interface BureauActivityParams {
	agreements?: string[];
	assigneeId?: string;
	clientAssigneeId?: string;
	clientDbId?: string;
	clientId?: string;
	endDate?: string;
	includeFinished?: boolean;
	responsibleUserId?: string;
	startDate?: string;
	subType?:
		| "ACC"
		| "DCA"
		| "CAP"
		| "REC"
		| "RTC"
		| "DVO"
		| "DDT"
		| "DER"
		| "DEP"
		| "DBT"
		| "OAC"
		| "VAT"
		| "EBD"
		| "RVT"
		| "PAV"
		| "SAL"
		| "CIV"
		| "ECI"
		| "MAR"
		| "RAR"
		| "CRE"
		| "TRE"
		| "DCI"
		| "SIV"
		| "SIN"
		| "SIA"
		| "CPP"
		| "PAL"
		| "SIB"
		| "SID"
		| "SRG"
		| "SPY"
		| "SRP"
		| "REQ"
		| "OSI"
		| "FBK"
		| "PEC"
		| "OER"
		| "AIS"
		| "FSA"
		| "QFA"
		| "PRY"
		| "COR"
		| "MFA"
		| "OWN"
		| "OWS"
		| "ANR"
		| "DEC"
		| "SAA"
		| "FAR"
		| "OAR"
		| "INC"
		| "EPD"
		| "EPA"
		| "IIT"
		| "PLA"
		| "QID"
		| "PIN"
		| "LID"
		| "PAR"
		| "CRP"
		| "SPC"
		| "PAY"
		| "AVD"
		| "ADI"
		| "PAT"
		| "ORE"
		| "FRE"
		| "STA"
		| "KUS"
		| "KUI"
		| "KUD"
		| "OW1";
	tags?: string[];
	type?:
		| "ACC"
		| "VAT"
		| "SAL"
		| "CIV"
		| "SIV"
		| "FBK"
		| "ANR"
		| "INC"
		| "PAR"
		| "OW1";
	types?: (
		| "ACC"
		| "VAT"
		| "SAL"
		| "CIV"
		| "SIV"
		| "FBK"
		| "ANR"
		| "INC"
		| "PAR"
		| "OW1"
	)[];
	urgencies?: ("URGENT" | "FUTURE" | "AVAILABLE")[];
	userTags?: string[];
}

export interface BureauAgreement {
	clientId: string;
	generatedId?: string;
	id: string;
	name?: string;
	responsibleUserId: number;
}

export interface BureauAgreementWithClient {
	clientId?: string;
	clientName?: string;
	id?: string;
	name?: string;
	responsibleUserId?: number;
}

export interface BureauAssigneeEstimatedTime {
	assigneeId?: number;
	estimatedTimeMilliseconds?: number;
}

export interface BureauBureauClient {
	activated?: boolean;
	active?: boolean;
	agreementSkipped?: boolean;
	applyForBureauRespite?: boolean;
	assignees: string[];
	auditFirm?: string;
	bureauId?: number;
	companyDomicile?: string;
	companyName?: string;
	companyType?:
		| "ESTATE"
		| "SOLE_TRADER"
		| "NATURAL_PERSON"
		| "CORPORATION"
		| "NONPROFIT_ASSOCIATION"
		| "HOUSING_ASSOCIATION"
		| "TENANCY_COMPOUND"
		| "COOPERATIVE"
		| "ECONOMIC_ASSOCIATION"
		| "HOUSING_SOCIETY"
		| "RELIGIOUS_BODY"
		| "LIMITED_PARTNERSHIP"
		| "PARTNERSHIP"
		| "PRIVATE_INDIVIDUAL"
		| "UNKNOWN";
	contactFirstName?: string;
	contactLastName?: string;
	country?: string;
	countryCode?: string;
	customerNumber?: string;
	customerNumberSource?: "USER" | "CUSTOMER_REGISTRY";
	dbId?: number;
	dbTag?: string;
	dbTagId?: string;
	disconnected?: boolean;
	email?: string;
	enableAuthorizeFlow?: boolean;
	favorite?: boolean;
	fax?: string;
	folderId?: string;
	hasAccess?: boolean;
	hasAgoyAccess?: boolean;
	hasAuditObligations?: boolean;
	hasInterpretSupplierInvoices?: boolean;
	homepage?: string;
	id?: string;
	information?: string;
	kycSkipped?: boolean;
	lastReconciliationDate?: string;
	nonFortnoxClient?: boolean;
	orgNo?: string;
	phone?: string;
	phone2?: string;
	postalAddress?: string;
	postalCity?: string;
	postalCode?: string;
	privateIndividual?: boolean;
	prospect?: boolean;
	relations?: string[];
	removedAt?: string;
	sysadmins?: string[];
	tags: string[];
	userDisabledAt?: string;
	userId?: string;
	visitingCountry?: string;
	visitingCountryCode?: string;
	visitingName?: string;
	visitingPostalAddress?: string;
	visitingPostalCity?: string;
	visitingPostalCode?: string;
}

export interface BureauBureauClientContact {
	clientId?: string;
	contactId?: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	mobilePhone?: string;
	phone?: string;
	roleType?: string;
}

export interface BureauBureauClientFilter {
	assigneeId?: string;
	companyType?: string[];
	excludeCompanyType?: (
		| "ESTATE"
		| "SOLE_TRADER"
		| "NATURAL_PERSON"
		| "CORPORATION"
		| "NONPROFIT_ASSOCIATION"
		| "HOUSING_ASSOCIATION"
		| "TENANCY_COMPOUND"
		| "COOPERATIVE"
		| "ECONOMIC_ASSOCIATION"
		| "HOUSING_SOCIETY"
		| "RELIGIOUS_BODY"
		| "LIMITED_PARTNERSHIP"
		| "PARTNERSHIP"
		| "PRIVATE_INDIVIDUAL"
		| "UNKNOWN"
	)[];
	filter?: string;
	filteredUserId?: string;
	filteredUserIdHasAccess?: boolean;
	includeOnlyClientsWithoutTags?: boolean;
	includeStates?: ("DISCONNECTED" | "ACTIVE" | "INACTIVE")[];
	showOnlyFavorites?: boolean;
	showOnlyWithAgoyAccess?: boolean;
	tags?: string[];
}

export interface BureauBureauClientLight {
	activated?: boolean;
	active?: boolean;
	bureauId?: number;
	companyName?: string;
	companyType?:
		| "ESTATE"
		| "SOLE_TRADER"
		| "NATURAL_PERSON"
		| "CORPORATION"
		| "NONPROFIT_ASSOCIATION"
		| "HOUSING_ASSOCIATION"
		| "TENANCY_COMPOUND"
		| "COOPERATIVE"
		| "ECONOMIC_ASSOCIATION"
		| "HOUSING_SOCIETY"
		| "RELIGIOUS_BODY"
		| "LIMITED_PARTNERSHIP"
		| "PARTNERSHIP"
		| "PRIVATE_INDIVIDUAL"
		| "UNKNOWN";
	dbId?: number;
	hasAccess?: boolean;
	hasInterpretSupplierInvoices?: boolean;
	id?: string;
	orgNo?: string;
	removedAt?: string;
	userDisabledAt?: string;
}

export interface BureauBureauClientOrder {
	addressCity?: string;
	addressPostCode?: string;
	addressStreet?: string;
	allProductsBeingOrdered?: {};
	allProductsIdsBeingOrdered?: number[];
	campaignCode?: string;
	companyName?: string;
	confirmEmail?: string;
	consultants?: number[];
	email?: string;
	extraProducts?: {};
	firstName?: string;
	information?: string;
	invoiceInterval?: number;
	lastName?: string;
	organizationNumber?: string;
	ownAccess?: boolean;
	payerProducts?: "PARENT_COMPANY" | "CHILD_COMPANY";
	payerTicks?: "PARENT_COMPANY" | "CHILD_COMPANY";
	phoneNumber?: string;
	products?: {};
	totalAmountReceiptAndTravel?: number;
	users?: {
		cellular?: string;
		civicNo: string;
		email?: string;
		loginName?: string;
		name?: string;
		source: "USER_CHAT" | "BUREAU" | "SUBSCRIPTION_FORM" | "ONBOARDING_GUIDE";
		tenantId: number;
	}[];
}

export interface BureauBureauClientWithConnection {
	activated?: boolean;
	active?: boolean;
	agreementSkipped?: boolean;
	applyForBureauRespite?: boolean;
	assignees: string[];
	auditFirm?: string;
	bureauId?: number;
	companyDomicile?: string;
	companyName?: string;
	companyType?:
		| "ESTATE"
		| "SOLE_TRADER"
		| "NATURAL_PERSON"
		| "CORPORATION"
		| "NONPROFIT_ASSOCIATION"
		| "HOUSING_ASSOCIATION"
		| "TENANCY_COMPOUND"
		| "COOPERATIVE"
		| "ECONOMIC_ASSOCIATION"
		| "HOUSING_SOCIETY"
		| "RELIGIOUS_BODY"
		| "LIMITED_PARTNERSHIP"
		| "PARTNERSHIP"
		| "PRIVATE_INDIVIDUAL"
		| "UNKNOWN";
	connectionClientId?: string;
	connectionType?: string;
	contactFirstName?: string;
	contactLastName?: string;
	country?: string;
	countryCode?: string;
	customerNumber?: string;
	customerNumberSource?: "USER" | "CUSTOMER_REGISTRY";
	dbId?: number;
	dbTag?: string;
	dbTagId?: string;
	disconnected?: boolean;
	email?: string;
	enableAuthorizeFlow?: boolean;
	favorite?: boolean;
	fax?: string;
	folderId?: string;
	hasAccess?: boolean;
	hasAgoyAccess?: boolean;
	hasAuditObligations?: boolean;
	hasInterpretSupplierInvoices?: boolean;
	homepage?: string;
	id?: string;
	information?: string;
	kycSkipped?: boolean;
	lastReconciliationDate?: string;
	nonFortnoxClient?: boolean;
	orgNo?: string;
	phone?: string;
	phone2?: string;
	postalAddress?: string;
	postalCity?: string;
	postalCode?: string;
	privateIndividual?: boolean;
	prospect?: boolean;
	relations?: string[];
	removedAt?: string;
	sysadmins?: string[];
	tags: string[];
	userDisabledAt?: string;
	userId?: string;
	visitingCountry?: string;
	visitingCountryCode?: string;
	visitingName?: string;
	visitingPostalAddress?: string;
	visitingPostalCity?: string;
	visitingPostalCode?: string;
}

export interface BureauChangeStatusBulkOperation {
	activityIds?: string[];
	params?: {
		agreements?: string[];
		assigneeId?: string;
		clientAssigneeId?: string;
		clientDbId?: string;
		clientId?: string;
		endDate?: string;
		includeFinished?: boolean;
		responsibleUserId?: string;
		startDate?: string;
		subType?:
			| "ACC"
			| "DCA"
			| "CAP"
			| "REC"
			| "RTC"
			| "DVO"
			| "DDT"
			| "DER"
			| "DEP"
			| "DBT"
			| "OAC"
			| "VAT"
			| "EBD"
			| "RVT"
			| "PAV"
			| "SAL"
			| "CIV"
			| "ECI"
			| "MAR"
			| "RAR"
			| "CRE"
			| "TRE"
			| "DCI"
			| "SIV"
			| "SIN"
			| "SIA"
			| "CPP"
			| "PAL"
			| "SIB"
			| "SID"
			| "SRG"
			| "SPY"
			| "SRP"
			| "REQ"
			| "OSI"
			| "FBK"
			| "PEC"
			| "OER"
			| "AIS"
			| "FSA"
			| "QFA"
			| "PRY"
			| "COR"
			| "MFA"
			| "OWN"
			| "OWS"
			| "ANR"
			| "DEC"
			| "SAA"
			| "FAR"
			| "OAR"
			| "INC"
			| "EPD"
			| "EPA"
			| "IIT"
			| "PLA"
			| "QID"
			| "PIN"
			| "LID"
			| "PAR"
			| "CRP"
			| "SPC"
			| "PAY"
			| "AVD"
			| "ADI"
			| "PAT"
			| "ORE"
			| "FRE"
			| "STA"
			| "KUS"
			| "KUI"
			| "KUD"
			| "OW1";
		tags?: string[];
		type?:
			| "ACC"
			| "VAT"
			| "SAL"
			| "CIV"
			| "SIV"
			| "FBK"
			| "ANR"
			| "INC"
			| "PAR"
			| "OW1";
		types?: (
			| "ACC"
			| "VAT"
			| "SAL"
			| "CIV"
			| "SIV"
			| "FBK"
			| "ANR"
			| "INC"
			| "PAR"
			| "OW1"
		)[];
		urgencies?: ("URGENT" | "FUTURE" | "AVAILABLE")[];
		userTags?: string[];
	};
	status?: "NEW" | "MIN" | "MAR" | "COM" | "DON";
}

export interface BureauClientAssigneeReplaceBulkOperation {
	bureauClientFilter?: {
		assigneeId?: string;
		companyType?: string[];
		excludeCompanyType?: (
			| "ESTATE"
			| "SOLE_TRADER"
			| "NATURAL_PERSON"
			| "CORPORATION"
			| "NONPROFIT_ASSOCIATION"
			| "HOUSING_ASSOCIATION"
			| "TENANCY_COMPOUND"
			| "COOPERATIVE"
			| "ECONOMIC_ASSOCIATION"
			| "HOUSING_SOCIETY"
			| "RELIGIOUS_BODY"
			| "LIMITED_PARTNERSHIP"
			| "PARTNERSHIP"
			| "PRIVATE_INDIVIDUAL"
			| "UNKNOWN"
		)[];
		filter?: string;
		filteredUserId?: string;
		filteredUserIdHasAccess?: boolean;
		includeOnlyClientsWithoutTags?: boolean;
		includeStates?: ("DISCONNECTED" | "ACTIVE" | "INACTIVE")[];
		showOnlyFavorites?: boolean;
		showOnlyWithAgoyAccess?: boolean;
		tags?: string[];
	};
	clientIds?: string[];
	newAssigneeId?: string;
	oldAssigneeId?: string;
}

export interface BureauClientAssigneesBulkOperation {
	assigneeIds?: string[];
	bureauClientFilter?: {
		assigneeId?: string;
		companyType?: string[];
		excludeCompanyType?: (
			| "ESTATE"
			| "SOLE_TRADER"
			| "NATURAL_PERSON"
			| "CORPORATION"
			| "NONPROFIT_ASSOCIATION"
			| "HOUSING_ASSOCIATION"
			| "TENANCY_COMPOUND"
			| "COOPERATIVE"
			| "ECONOMIC_ASSOCIATION"
			| "HOUSING_SOCIETY"
			| "RELIGIOUS_BODY"
			| "LIMITED_PARTNERSHIP"
			| "PARTNERSHIP"
			| "PRIVATE_INDIVIDUAL"
			| "UNKNOWN"
		)[];
		filter?: string;
		filteredUserId?: string;
		filteredUserIdHasAccess?: boolean;
		includeOnlyClientsWithoutTags?: boolean;
		includeStates?: ("DISCONNECTED" | "ACTIVE" | "INACTIVE")[];
		showOnlyFavorites?: boolean;
		showOnlyWithAgoyAccess?: boolean;
		tags?: string[];
	};
	clientIds?: string[];
}

export interface BureauClientBulkOperation {
	bureauClientFilter?: {
		assigneeId?: string;
		companyType?: string[];
		excludeCompanyType?: (
			| "ESTATE"
			| "SOLE_TRADER"
			| "NATURAL_PERSON"
			| "CORPORATION"
			| "NONPROFIT_ASSOCIATION"
			| "HOUSING_ASSOCIATION"
			| "TENANCY_COMPOUND"
			| "COOPERATIVE"
			| "ECONOMIC_ASSOCIATION"
			| "HOUSING_SOCIETY"
			| "RELIGIOUS_BODY"
			| "LIMITED_PARTNERSHIP"
			| "PARTNERSHIP"
			| "PRIVATE_INDIVIDUAL"
			| "UNKNOWN"
		)[];
		filter?: string;
		filteredUserId?: string;
		filteredUserIdHasAccess?: boolean;
		includeOnlyClientsWithoutTags?: boolean;
		includeStates?: ("DISCONNECTED" | "ACTIVE" | "INACTIVE")[];
		showOnlyFavorites?: boolean;
		showOnlyWithAgoyAccess?: boolean;
		tags?: string[];
	};
	clientIds?: string[];
}

export interface BureauClientLogin {
	login?: string;
	tenantId?: number;
	userId?: string;
}

export interface BureauClientTagBulkOperation {
	bureauClientFilter?: {
		assigneeId?: string;
		companyType?: string[];
		excludeCompanyType?: (
			| "ESTATE"
			| "SOLE_TRADER"
			| "NATURAL_PERSON"
			| "CORPORATION"
			| "NONPROFIT_ASSOCIATION"
			| "HOUSING_ASSOCIATION"
			| "TENANCY_COMPOUND"
			| "COOPERATIVE"
			| "ECONOMIC_ASSOCIATION"
			| "HOUSING_SOCIETY"
			| "RELIGIOUS_BODY"
			| "LIMITED_PARTNERSHIP"
			| "PARTNERSHIP"
			| "PRIVATE_INDIVIDUAL"
			| "UNKNOWN"
		)[];
		filter?: string;
		filteredUserId?: string;
		filteredUserIdHasAccess?: boolean;
		includeOnlyClientsWithoutTags?: boolean;
		includeStates?: ("DISCONNECTED" | "ACTIVE" | "INACTIVE")[];
		showOnlyFavorites?: boolean;
		showOnlyWithAgoyAccess?: boolean;
		tags?: string[];
	};
	clientIds?: string[];
	tagIds: string[];
	type?: "BULK_REMOVE_TAGS" | "BULK_ADD_TAGS";
}

export interface BureauCopySpecification {
	/**
	 * @minItems 1
	 * @maxItems 5
	 */
	assignees:
		| [number]
		| [number, number]
		| [number, number, number]
		| [number, number, number, number]
		| [number, number, number, number, number];
	clientIdFrom: string;
	clientIdTo: string;
	startDate: string;
}

export interface BureauErrorReason {
	code?: string;
	message?: string;
}

export interface BureauEstimatedTime {
	estimatedTimeMinutes?: number;
}

export interface BureauHistoricCoordinationNumber {
	clientId?: string;
	coordNo?: string;
	dateUpdated?: string;
}

export interface BureauInquiry {
	agreementType:
		| "BUREAU_INITIATED_CONNECTION"
		| "BUREAU_INITIATED_DISCONNECTION"
		| "BUREAU_INITIATED_DISCONTINUE"
		| "INTERNAL_INITIATED_DISCONNECTION"
		| "INTERNAL_INITIATED_CONNECTION";
	approverTenantId: number;
	consultantUserId?: number;
	scheduledFor?: string;
}

export interface BureauInvitedUser {
	cellular?: string;
	civicNo: string;
	email?: string;
	loginName?: string;
	name?: string;
	source: "USER_CHAT" | "BUREAU" | "SUBSCRIPTION_FORM" | "ONBOARDING_GUIDE";
	tenantId: number;
}

export interface BureauKYCAssignment {
	bureauId?: number;
	clientId?: string;
	companyName?: string;
	dateCreated?: string;
	dateStopped?: string;
	hasAccess?: boolean;
	hasUrgentPendingActions?: boolean;
	id?: string;
	link?: string;
	nextKycDate?: string;
	privateIndividual?: boolean;
	prospect?: boolean;
	riskLevel?: string;
	riskSeverity?: string;
	status?: string;
}

export interface BureauLink {
	id?: string;
	name: string;
	url: string;
}

export interface BureauNewBureauClientOrder {
	orderId?: number;
}

export interface BureauNewClientOrder {
	addressCity?: string;
	addressPostCode?: string;
	addressStreet?: string;
	allProductsBeingOrdered?: {};
	allProductsIdsBeingOrdered?: number[];
	campaignCode?: string;
	companyName?: string;
	consultants?: number[];
	email?: string;
	extraProducts?: {};
	firstName?: string;
	invoiceInterval?: number;
	lastName?: string;
	organizationNumber?: string;
	payerProducts?: "PARENT_COMPANY" | "CHILD_COMPANY";
	payerTicks?: "PARENT_COMPANY" | "CHILD_COMPANY";
	phoneNumber?: string;
	products?: {};
	totalAmountReceiptAndTravel?: number;
	users?: {
		cellular?: string;
		civicNo: string;
		email?: string;
		loginName?: string;
		name?: string;
		source: "USER_CHAT" | "BUREAU" | "SUBSCRIPTION_FORM" | "ONBOARDING_GUIDE";
		tenantId: number;
	}[];
}

export interface BureauNewOrganization {
	apiKey?: string;
	urlPrefix?: string;
}

export interface BureauPendingInformation {
	pendingConnection?: boolean;
	pendingCreation?: boolean;
}

export interface BureauTag {
	bureauId?: number;
	id?: string;
	name: string;
}

export interface BureauTagging {
	tags?: string[];
	userIds?: number[];
	usersFilter?: {
		excludeTaggedUsers?: boolean;
		nameFilter?: string;
		statuses?: (
			| "ACTIVE"
			| "INACTIVE"
			| "DELETED"
			| "CONSULTANT"
			| "DELETED_CONSULTANT"
			| "TIME_USER"
			| "DELETED_TIME_USER"
			| "ACTIVE_SUPPORT"
			| "INACTIVE_SUPPORT"
			| "SERVICE_USER"
			| "API_USER"
			| "DELETED_API_USER"
		)[];
		tags?: string[];
	};
}

export interface BureauTask {
	assignees?: number[];
	bureauId?: number;
	clientId?: string;
	date?: string;
	hasComments?: boolean;
	id?: string;
	recurrence?: string[];
	status: "NOT_DONE" | "DONE";
	statusDate?: string;
	taskSpecificationHasEndDate?: boolean;
	taskSpecificationId?: string;
	taskType?: string;
	title?: string;
}

export interface BureauTaskComment {
	bureauId?: number;
	comment?: string;
	datetime?: string;
	id?: string;
	taskId?: string;
	userId?: number;
}

export interface BureauTaskSpecification {
	agreementGeneratedId?: string;
	/**
	 * @minItems 1
	 * @maxItems 5
	 */
	assignees:
		| [number]
		| [number, number]
		| [number, number, number]
		| [number, number, number, number]
		| [number, number, number, number, number];
	bureauId?: number;
	clientId: string;
	endDate?: string;
	id?: string;
	/**
	 * @minItems 1
	 * @maxItems 2147483647
	 */
	recurrence: [string, ...string[]];
	routine?: string;
	startDate: string;
	taskType?: string;
	title?: string;
}

export interface BureauUpdatableAgreement {
	name?: string;
	responsibleUserId: number;
}

export interface BureauUpdatableBureauClient {
	assignees?: string[];
	auditFirm?: string;
	companyName?: string;
	companyType?:
		| "ESTATE"
		| "SOLE_TRADER"
		| "NATURAL_PERSON"
		| "CORPORATION"
		| "NONPROFIT_ASSOCIATION"
		| "HOUSING_ASSOCIATION"
		| "TENANCY_COMPOUND"
		| "COOPERATIVE"
		| "ECONOMIC_ASSOCIATION"
		| "HOUSING_SOCIETY"
		| "RELIGIOUS_BODY"
		| "LIMITED_PARTNERSHIP"
		| "PARTNERSHIP"
		| "PRIVATE_INDIVIDUAL"
		| "UNKNOWN";
	contactFirstName?: string;
	contactLastName?: string;
	country?: string;
	customerNumber?: string;
	email?: string;
	hasAuditObligations?: boolean;
	homepage?: string;
	information?: string;
	lastReconciliationDate?: string;
	phone?: string;
	postalAddress?: string;
	postalCity?: string;
	postalCode?: string;
	tags?: string[];
	visitingCountry?: string;
	visitingPostalAddress?: string;
	visitingPostalCity?: string;
	visitingPostalCode?: string;
}

export interface BureauUpdatableBureauClientContact {
	email?: string;
	firstName?: string;
	lastName?: string;
	mobilePhone?: string;
	phone?: string;
	roleType?: string;
}

export interface BureauUpdatableTask {
	assignees?: number[];
	date?: string;
	status: "NOT_DONE" | "DONE";
}

export interface BureauUpdateActivityOptions {
	locators?: {
		activity?: string;
		periodEnd?: string;
	};
	values?: {
		count?: number;
		date?: string;
		status?: "NEW" | "MIN" | "MAR" | "COM" | "DON";
		titleSuffix?: string;
	};
}

export interface BureauUpdateActivityOptionsLocators {
	activity?: string;
	periodEnd?: string;
}

export interface BureauUpdateActivityOptionsValues {
	count?: number;
	date?: string;
	status?: "NEW" | "MIN" | "MAR" | "COM" | "DON";
	titleSuffix?: string;
}

export interface BureauUpdateWrapperUpdatableAgreement {
	old?: {
		name?: string;
		responsibleUserId: number;
	};
	updated?: {
		name?: string;
		responsibleUserId: number;
	};
}

export interface BureauUpdateWrapperUpdatableBureauClient {
	old?: {
		assignees?: string[];
		auditFirm?: string;
		companyName?: string;
		companyType?:
			| "ESTATE"
			| "SOLE_TRADER"
			| "NATURAL_PERSON"
			| "CORPORATION"
			| "NONPROFIT_ASSOCIATION"
			| "HOUSING_ASSOCIATION"
			| "TENANCY_COMPOUND"
			| "COOPERATIVE"
			| "ECONOMIC_ASSOCIATION"
			| "HOUSING_SOCIETY"
			| "RELIGIOUS_BODY"
			| "LIMITED_PARTNERSHIP"
			| "PARTNERSHIP"
			| "PRIVATE_INDIVIDUAL"
			| "UNKNOWN";
		contactFirstName?: string;
		contactLastName?: string;
		country?: string;
		customerNumber?: string;
		email?: string;
		hasAuditObligations?: boolean;
		homepage?: string;
		information?: string;
		lastReconciliationDate?: string;
		phone?: string;
		postalAddress?: string;
		postalCity?: string;
		postalCode?: string;
		tags?: string[];
		visitingCountry?: string;
		visitingPostalAddress?: string;
		visitingPostalCity?: string;
		visitingPostalCode?: string;
	};
	updated?: {
		assignees?: string[];
		auditFirm?: string;
		companyName?: string;
		companyType?:
			| "ESTATE"
			| "SOLE_TRADER"
			| "NATURAL_PERSON"
			| "CORPORATION"
			| "NONPROFIT_ASSOCIATION"
			| "HOUSING_ASSOCIATION"
			| "TENANCY_COMPOUND"
			| "COOPERATIVE"
			| "ECONOMIC_ASSOCIATION"
			| "HOUSING_SOCIETY"
			| "RELIGIOUS_BODY"
			| "LIMITED_PARTNERSHIP"
			| "PARTNERSHIP"
			| "PRIVATE_INDIVIDUAL"
			| "UNKNOWN";
		contactFirstName?: string;
		contactLastName?: string;
		country?: string;
		customerNumber?: string;
		email?: string;
		hasAuditObligations?: boolean;
		homepage?: string;
		information?: string;
		lastReconciliationDate?: string;
		phone?: string;
		postalAddress?: string;
		postalCity?: string;
		postalCode?: string;
		tags?: string[];
		visitingCountry?: string;
		visitingPostalAddress?: string;
		visitingPostalCity?: string;
		visitingPostalCode?: string;
	};
}

export interface BureauUpdateWrapperUpdatableBureauClientContact {
	old?: {
		email?: string;
		firstName?: string;
		lastName?: string;
		mobilePhone?: string;
		phone?: string;
		roleType?: string;
	};
	updated?: {
		email?: string;
		firstName?: string;
		lastName?: string;
		mobilePhone?: string;
		phone?: string;
		roleType?: string;
	};
}

export interface BureauUpdateWrapperUpdatableTask {
	old?: {
		assignees?: number[];
		date?: string;
		status: "NOT_DONE" | "DONE";
	};
	updated?: {
		assignees?: number[];
		date?: string;
		status: "NOT_DONE" | "DONE";
	};
}

export interface BureauUser {
	cellular?: string;
	civicNo?: string;
	email?: string;
	tenantId?: number;
	userId?: number;
}

export interface BureauUserWithClientInfo {
	clientId?: string;
	email?: string;
	id?: string;
	name?: string;
	sysAdmin?: boolean;
	tags?: {
		bureauId?: number;
		id?: string;
		name: string;
	}[];
}

export interface BureauUsersFilter {
	excludeTaggedUsers?: boolean;
	nameFilter?: string;
	statuses?: (
		| "ACTIVE"
		| "INACTIVE"
		| "DELETED"
		| "CONSULTANT"
		| "DELETED_CONSULTANT"
		| "TIME_USER"
		| "DELETED_TIME_USER"
		| "ACTIVE_SUPPORT"
		| "INACTIVE_SUPPORT"
		| "SERVICE_USER"
		| "API_USER"
		| "DELETED_API_USER"
	)[];
	tags?: string[];
}

export interface BureauWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface FileattachmentsAttachment {
	entityId?: number;
	entityType?: "OF" | "O" | "F" | "C" | "LGR_IO" | "LGR_IG";
	fileId?: string;
	id?: string;
	includeOnSend?: boolean;
}

export interface FileattachmentsNumberOfAttachments {
	entityId: number;
	numberOfAttachments?: number;
}

export interface FileattachmentsWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface FortnoxAnlAdjustAssetValueWrap {
	Asset: {
		Amount?: number;
		AssetIds?: number[];
		Comment?: string;
		Date?: string;
		DepreciateUntil?: string;
		FinancialYearId?: number;
		Percentage?: number;
		Price?: number;
		TransactionDate?: string;
	};
}

export interface FortnoxAnlAssetActionsSingleItem {
	Amount?: number;
	AssetIds?: number[];
	Comment?: string;
	Date?: string;
	DepreciateUntil?: string;
	FinancialYearId?: number;
	Percentage?: number;
	Price?: number;
	TransactionDate?: string;
}

export interface FortnoxAnlAssetHistorySingleItem {
	Amount?: string;
	Date?: string;
	EventId?: number;
	Id?: number;
	Notes?: string;
	SupplierInvoice?: number;
	UserId?: number;
	UserName?: string;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
}

export interface FortnoxAnlAssetTypesListResponseWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	Types: {
		"@url"?: string;
		AccountAsset?: number;
		AccountAssetId?: number;
		AccountDepreciation?: number;
		AccountDepreciationId?: number;
		AccountOffsetSale?: string;
		AccountOffsetSaleId?: string;
		AccountRevaluation?: number;
		AccountRevaluationId?: number;
		AccountSaleLoss?: number;
		AccountSaleLossId?: number;
		AccountSaleWin?: number;
		AccountSaleWinId?: number;
		AccountValueLoss?: number;
		AccountValueLossId?: number;
		AccountWriteDown?: number;
		AccountWriteDownAck?: number;
		AccountWriteDownAckId?: number;
		AccountWriteDownId?: number;
		Description?: string;
		Id?: number;
		InUse?: boolean;
		Notes?: string;
		Number?: string;
		Type?: number;
	}[];
}

export interface FortnoxAnlAssetTypesResponse {
	"@url"?: string;
	AccountAsset?: number;
	AccountAssetId?: number;
	AccountDepreciation?: number;
	AccountDepreciationId?: number;
	AccountOffsetSale?: string;
	AccountOffsetSaleId?: string;
	AccountRevaluation?: number;
	AccountRevaluationId?: number;
	AccountSaleLoss?: number;
	AccountSaleLossId?: number;
	AccountSaleWin?: number;
	AccountSaleWinId?: number;
	AccountValueLoss?: number;
	AccountValueLossId?: number;
	AccountWriteDown?: number;
	AccountWriteDownAck?: number;
	AccountWriteDownAckId?: number;
	AccountWriteDownId?: number;
	Description?: string;
	Id?: number;
	InUse?: boolean;
	Notes?: string;
	Number?: string;
	Type?: number;
}

export interface FortnoxAnlAssetTypesSingleResponseWrap {
	Type: {
		"@url"?: string;
		AccountAsset?: number;
		AccountAssetId?: number;
		AccountDepreciation?: number;
		AccountDepreciationId?: number;
		AccountOffsetSale?: string;
		AccountOffsetSaleId?: string;
		AccountRevaluation?: number;
		AccountRevaluationId?: number;
		AccountSaleLoss?: number;
		AccountSaleLossId?: number;
		AccountSaleWin?: number;
		AccountSaleWinId?: number;
		AccountValueLoss?: number;
		AccountValueLossId?: number;
		AccountWriteDown?: number;
		AccountWriteDownAck?: number;
		AccountWriteDownAckId?: number;
		AccountWriteDownId?: number;
		Description?: string;
		Id?: number;
		InUse?: boolean;
		Notes?: string;
		Number?: string;
		Type?: number;
	};
}

export interface FortnoxAnlAssetsActionResponse {
	Assets?: {
		"@url"?: string;
		AcquisitionDate?: string;
		AcquisitionStart?: string;
		AcquisitionValue?: number;
		Brand?: string;
		CostCenter?: string;
		Department?: string;
		DepreciateToResidualValue?: number;
		DepreciatedTo?: string;
		DepreciationFinal?: string;
		DepreciationMethod?: number;
		Description?: string;
		Group?: string;
		History?: {
			Amount?: string;
			Date?: string;
			EventId?: number;
			Id?: number;
			Notes?: string;
			SupplierInvoice?: number;
			UserId?: number;
			UserName?: string;
			VoucherNumber?: number;
			VoucherSeries?: string;
			VoucherYear?: number;
		}[];
		Id?: number;
		InsuredNumber?: string;
		InsuredWith?: string;
		ManualOb?: number;
		Notes?: string;
		Number?: string;
		Placement?: string;
		Project?: string;
		Reference?: string;
		Room?: string;
		Status?: string;
		StatusId?: string;
		Type?: string;
		TypeId?: number;
	};
}

export interface FortnoxAnlAssetsDepreciationResponse {
	"@url"?: string;
	FinancialYear?: number;
	VoucherNumber?: number;
	VoucherSeries?: string;
}

export interface FortnoxAnlAssetsDepreciationResponseWrap {
	AssetsDepreciation: {
		"@url"?: string;
		FinancialYear?: number;
		VoucherNumber?: number;
		VoucherSeries?: string;
	}[];
}

export interface FortnoxAnlAssetsListItem {
	"@url": string;
	AcquisitionDate: string;
	AcquisitionStart: string;
	AcquisitionValue: number;
	Brand: string;
	CostCenter: string;
	Department: string;
	DepreciateToResidualValue: number;
	DepreciatedTo: string;
	DepreciationFinal: string;
	DepreciationMethod: string;
	Description: string;
	Group: string;
	History: {
		Amount?: string;
		Date?: string;
		EventId?: number;
		Id?: number;
		Notes?: string;
		SupplierInvoice?: number;
		UserId?: number;
		UserName?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
	}[];
	Id: number;
	InsuredNumber: string;
	InsuredWith: string;
	ManualOb: string;
	Notes: string;
	Number: string;
	Placement: string;
	Project: string;
	Reference: string;
	Room: string;
	Status: string;
	StatusId: string;
	Type: string;
	TypeId: number;
}

export interface FortnoxAnlAssetsListItemWrap {
	Assets: {
		"@url": string;
		AcquisitionDate: string;
		AcquisitionStart: string;
		AcquisitionValue: number;
		Brand: string;
		CostCenter: string;
		Department: string;
		DepreciateToResidualValue: number;
		DepreciatedTo: string;
		DepreciationFinal: string;
		DepreciationMethod: string;
		Description: string;
		Group: string;
		History: {
			Amount?: string;
			Date?: string;
			EventId?: number;
			Id?: number;
			Notes?: string;
			SupplierInvoice?: number;
			UserId?: number;
			UserName?: string;
			VoucherNumber?: number;
			VoucherSeries?: string;
			VoucherYear?: number;
		}[];
		Id: number;
		InsuredNumber: string;
		InsuredWith: string;
		ManualOb: string;
		Notes: string;
		Number: string;
		Placement: string;
		Project: string;
		Reference: string;
		Room: string;
		Status: string;
		StatusId: string;
		Type: string;
		TypeId: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxAnlAssetsSingleItem {
	"@url"?: string;
	AcquisitionDate?: string;
	AcquisitionStart?: string;
	AcquisitionValue?: number;
	Brand?: string;
	CostCenter?: string;
	Department?: string;
	DepreciateToResidualValue?: number;
	DepreciatedTo?: string;
	DepreciationFinal?: string;
	DepreciationMethod?: number;
	Description?: string;
	Group?: string;
	History?: {
		Amount?: string;
		Date?: string;
		EventId?: number;
		Id?: number;
		Notes?: string;
		SupplierInvoice?: number;
		UserId?: number;
		UserName?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
	}[];
	Id?: number;
	InsuredNumber?: string;
	InsuredWith?: string;
	ManualOb?: number;
	Notes?: string;
	Number?: string;
	Placement?: string;
	Project?: string;
	Reference?: string;
	Room?: string;
	Status?: string;
	StatusId?: string;
	Type?: string;
	TypeId?: number;
}

export interface FortnoxAnlAssetsSingleItemResponseWrap {
	Assets: {
		"@url"?: string;
		AcquisitionDate?: string;
		AcquisitionStart?: string;
		AcquisitionValue?: number;
		Brand?: string;
		CostCenter?: string;
		Department?: string;
		DepreciateToResidualValue?: number;
		DepreciatedTo?: string;
		DepreciationFinal?: string;
		DepreciationMethod?: number;
		Description?: string;
		Group?: string;
		History?: {
			Amount?: string;
			Date?: string;
			EventId?: number;
			Id?: number;
			Notes?: string;
			SupplierInvoice?: number;
			UserId?: number;
			UserName?: string;
			VoucherNumber?: number;
			VoucherSeries?: string;
			VoucherYear?: number;
		}[];
		Id?: number;
		InsuredNumber?: string;
		InsuredWith?: string;
		ManualOb?: number;
		Notes?: string;
		Number?: string;
		Placement?: string;
		Project?: string;
		Reference?: string;
		Room?: string;
		Status?: string;
		StatusId?: string;
		Type?: string;
		TypeId?: number;
	};
}

export interface FortnoxAnlAssetsSinglePayloadItem {
	AcquisitionDate?: string;
	AcquisitionStart?: string;
	AcquisitionValue?: string;
	Brand?: string;
	CostCenter?: string;
	Department?: string;
	DepreciateToResidualValue?: number;
	DepreciationFinal?: string;
	DepreciationMethod?: string;
	Description?: string;
	Group?: string;
	InsuredNumber?: string;
	InsuredWith?: string;
	Notes?: string;
	Number?: string;
	Placement?: string;
	Project?: string;
	Reference?: string;
	Room?: string;
	TypeId?: string;
}

export interface FortnoxAnlAssetsSinglePayloadItemWrap {
	Asset: {
		AcquisitionDate?: string;
		AcquisitionStart?: string;
		AcquisitionValue?: string;
		Brand?: string;
		CostCenter?: string;
		Department?: string;
		DepreciateToResidualValue?: number;
		DepreciationFinal?: string;
		DepreciationMethod?: string;
		Description?: string;
		Group?: string;
		InsuredNumber?: string;
		InsuredWith?: string;
		Notes?: string;
		Number?: string;
		Placement?: string;
		Project?: string;
		Reference?: string;
		Room?: string;
		TypeId?: string;
	};
}

export interface FortnoxAnlCreateAssetType {
	AccountAssetId?: string;
	AccountDepreciationId?: string;
	AccountOffsetSaleId?: string;
	AccountRevaluationId?: string;
	AccountSaleLossId?: string;
	AccountSaleWinId?: string;
	AccountValueLossId?: string;
	AccountWriteDownAckId?: string;
	AccountWriteDownId?: string;
	Description?: string;
	Notes?: string;
	Number?: string;
	Type?: string;
}

export interface FortnoxAnlCreateAssetTypeWrap {
	AssetType: {
		AccountAssetId?: string;
		AccountDepreciationId?: string;
		AccountOffsetSaleId?: string;
		AccountRevaluationId?: string;
		AccountSaleLossId?: string;
		AccountSaleWinId?: string;
		AccountValueLossId?: string;
		AccountWriteDownAckId?: string;
		AccountWriteDownId?: string;
		Description?: string;
		Notes?: string;
		Number?: string;
		Type?: string;
	};
}

export interface FortnoxAnlDepreciationWrap {
	Asset: {
		Amount?: number;
		AssetIds?: number[];
		Comment?: string;
		Date?: string;
		DepreciateUntil?: string;
		FinancialYearId?: number;
		Percentage?: number;
		Price?: number;
		TransactionDate?: string;
	};
}

export interface FortnoxAnlScrapAssetWrap {
	Asset: {
		Amount?: number;
		AssetIds?: number[];
		Comment?: string;
		Date?: string;
		DepreciateUntil?: string;
		FinancialYearId?: number;
		Percentage?: number;
		Price?: number;
		TransactionDate?: string;
	};
}

export interface FortnoxAnlSellAssetWrap {
	Asset: {
		Amount?: number;
		AssetIds?: number[];
		Comment?: string;
		Date?: string;
		DepreciateUntil?: string;
		FinancialYearId?: number;
		Percentage?: number;
		Price?: number;
		TransactionDate?: string;
	};
}

export interface FortnoxAnlUpdateAssetType {
	AccountAssetId?: string;
	AccountDepreciationId?: string;
	AccountOffsetSaleId?: string;
	AccountRevaluationId?: string;
	AccountSaleLossId?: string;
	AccountSaleWinId?: string;
	AccountValueLossId?: string;
	AccountWriteDownAckId?: string;
	AccountWriteDownId?: string;
	AcquisitionDate?: string;
	AcquisitionStart?: string;
	AcquisitionValue?: string;
	Brand?: string;
	CostCenter?: string;
	Department?: string;
	DepreciateToResidualValue?: number;
	DepreciationFinal?: string;
	DepreciationMethod?: string;
	Description?: string;
	Group?: string;
	InsuredNumber?: string;
	InsuredWith?: string;
	Notes?: string;
	Number?: string;
	Placement?: string;
	Project?: string;
	Reference?: string;
	Room?: string;
	Type?: string;
	TypeId?: string;
}

export interface FortnoxAnlUpdateAssetTypeWrap {
	AssetType: {
		AccountAssetId?: string;
		AccountDepreciationId?: string;
		AccountOffsetSaleId?: string;
		AccountRevaluationId?: string;
		AccountSaleLossId?: string;
		AccountSaleWinId?: string;
		AccountValueLossId?: string;
		AccountWriteDownAckId?: string;
		AccountWriteDownId?: string;
		AcquisitionDate?: string;
		AcquisitionStart?: string;
		AcquisitionValue?: string;
		Brand?: string;
		CostCenter?: string;
		Department?: string;
		DepreciateToResidualValue?: number;
		DepreciationFinal?: string;
		DepreciationMethod?: string;
		Description?: string;
		Group?: string;
		InsuredNumber?: string;
		InsuredWith?: string;
		Notes?: string;
		Number?: string;
		Placement?: string;
		Project?: string;
		Reference?: string;
		Room?: string;
		Type?: string;
		TypeId?: string;
	};
}

export interface FortnoxArticleBundleItemSingleItem {
	ArticleNumber?: string;
	FixedPrice?: boolean;
	Quantity?: number;
}

export interface FortnoxArticleBundleItemSinglePayloadItem {
	ArticleNumber?: string;
	FixedPrice?: boolean;
	Quantity?: number;
}

export interface FortnoxArticleBundleSingleItem {
	Comment?: string;
	PriceAdjustmentRow?: {
		ConstructionAccount?: number;
		Description?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		EuAccount?: number;
		EuVatAccount?: number;
		ExportAccount?: number;
		SalesAccount?: number;
		VAT?: number;
		Vat?: number;
	};
	SubItems?: {
		ArticleNumber?: string;
		FixedPrice?: boolean;
		Quantity?: number;
	}[];
}

export interface FortnoxArticleBundleSinglePayloadItem {
	Comment?: string;
	PriceAdjustmentRow?: {
		ConstructionAccount?: number;
		Description?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		EuAccount?: number;
		EuVatAccount?: number;
		ExportAccount?: number;
		SalesAccount?: number;
		VAT?: number;
		Vat?: number;
	};
	SubItems?: {
		ArticleNumber?: string;
		FixedPrice?: boolean;
		Quantity?: number;
	}[];
}

export interface FortnoxArticleBundleSubItemRowSingleItem {
	ConstructionAccount?: number;
	Description?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	EuAccount?: number;
	EuVatAccount?: number;
	ExportAccount?: number;
	SalesAccount?: number;
	VAT?: number;
	Vat?: number;
}

export interface FortnoxArticleBundleSubItemRowSinglePayloadItem {
	ConstructionAccount?: number;
	Description?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	EuAccount?: number;
	EuVatAccount?: number;
	ExportAccount?: number;
	SalesAccount?: number;
	VAT?: number;
	Vat?: number;
}

export interface FortnoxArticleListItem {
	"@url"?: string;
	Active?: boolean;
	ArticleNumber?: string;
	Bulky?: boolean;
	CommodityCode?: string;
	ConstructionAccount?: number;
	CostCalculationMethod?: string;
	DefaultStockLocation?: string;
	DefaultStockPoint?: string;
	Depth?: number;
	Description: string;
	DirectCost?: number;
	DisposableQuantity?: string;
	EAN?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	Expired?: boolean;
	ExportAccount?: number;
	FreightCost?: number;
	Height?: number;
	Housework?: boolean;
	HouseworkType?: string;
	Manufacturer?: string;
	ManufacturerArticleNumber?: string;
	Note?: string;
	OtherCost?: number;
	PurchaseAccount?: number;
	PurchasePrice?: string;
	QuantityInStock?: number;
	ReservedQuantity?: string;
	SalesAccount?: number;
	SalesPrice?: string;
	StockAccount?: string;
	StockChangeAccount?: string;
	StockGoods?: boolean;
	StockPlace?: string;
	StockValue?: string;
	StockWarning?: number;
	SupplierName?: string;
	SupplierNumber?: string;
	Type?: string;
	Unit?: string;
	VAT?: string;
	WebshopArticle?: boolean;
	Weight?: number;
	Width?: number;
}

export interface FortnoxArticleListItemWrap {
	Articles: {
		"@url"?: string;
		Active?: boolean;
		ArticleNumber?: string;
		Bulky?: boolean;
		CommodityCode?: string;
		ConstructionAccount?: number;
		CostCalculationMethod?: string;
		DefaultStockLocation?: string;
		DefaultStockPoint?: string;
		Depth?: number;
		Description: string;
		DirectCost?: number;
		DisposableQuantity?: string;
		EAN?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		Expired?: boolean;
		ExportAccount?: number;
		FreightCost?: number;
		Height?: number;
		Housework?: boolean;
		HouseworkType?: string;
		Manufacturer?: string;
		ManufacturerArticleNumber?: string;
		Note?: string;
		OtherCost?: number;
		PurchaseAccount?: number;
		PurchasePrice?: string;
		QuantityInStock?: number;
		ReservedQuantity?: string;
		SalesAccount?: number;
		SalesPrice?: string;
		StockAccount?: string;
		StockChangeAccount?: string;
		StockGoods?: boolean;
		StockPlace?: string;
		StockValue?: string;
		StockWarning?: number;
		SupplierName?: string;
		SupplierNumber?: string;
		Type?: string;
		Unit?: string;
		VAT?: string;
		WebshopArticle?: boolean;
		Weight?: number;
		Width?: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxArticleSingleItem {
	"@url"?: string;
	Active?: boolean;
	ArticleNumber?: string;
	Bulky?: boolean;
	CommodityCode?: string;
	ConstructionAccount?: number;
	CostCalculationMethod?: string;
	DefaultStockLocation?: string;
	DefaultStockPoint?: string;
	Depth?: number;
	Description: string;
	DirectCost?: number;
	DisposableQuantity?: number;
	EAN?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	Expired?: boolean;
	ExportAccount?: number;
	FreightCost?: number;
	Height?: number;
	Housework?: boolean;
	HouseworkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "FURNISHING"
		| "HOMEMAINTENANCE"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "EMPTYHOUSEWORK"
		| "OTHERCOSTS";
	Manufacturer?: string;
	ManufacturerArticleNumber?: string;
	Note?: string;
	OtherCost?: number;
	PurchaseAccount?: number;
	PurchasePrice?: number;
	QuantityInStock?: number;
	ReservedQuantity?: number;
	SalesAccount?: number;
	SalesPrice?: number;
	StockAccount?: number;
	StockChangeAccount?: number;
	StockGoods?: boolean;
	StockPlace?: string;
	StockValue?: number;
	StockWarning?: number;
	SupplierName?: string;
	SupplierNumber?: string;
	Type?: "STOCK" | "SERVICE";
	Unit?: string;
	VAT?: number;
	WebshopArticle?: boolean;
	Weight?: number;
	Width?: number;
}

export interface FortnoxArticleSingleItemWrap {
	Article: {
		"@url"?: string;
		Active?: boolean;
		ArticleNumber?: string;
		Bulky?: boolean;
		CommodityCode?: string;
		ConstructionAccount?: number;
		CostCalculationMethod?: string;
		DefaultStockLocation?: string;
		DefaultStockPoint?: string;
		Depth?: number;
		Description: string;
		DirectCost?: number;
		DisposableQuantity?: number;
		EAN?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		Expired?: boolean;
		ExportAccount?: number;
		FreightCost?: number;
		Height?: number;
		Housework?: boolean;
		HouseworkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "FURNISHING"
			| "HOMEMAINTENANCE"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "EMPTYHOUSEWORK"
			| "OTHERCOSTS";
		Manufacturer?: string;
		ManufacturerArticleNumber?: string;
		Note?: string;
		OtherCost?: number;
		PurchaseAccount?: number;
		PurchasePrice?: number;
		QuantityInStock?: number;
		ReservedQuantity?: number;
		SalesAccount?: number;
		SalesPrice?: number;
		StockAccount?: number;
		StockChangeAccount?: number;
		StockGoods?: boolean;
		StockPlace?: string;
		StockValue?: number;
		StockWarning?: number;
		SupplierName?: string;
		SupplierNumber?: string;
		Type?: "STOCK" | "SERVICE";
		Unit?: string;
		VAT?: number;
		WebshopArticle?: boolean;
		Weight?: number;
		Width?: number;
	};
}

export interface FortnoxArticleSinglePayloadItem {
	Active?: boolean;
	ArticleNumber?: string;
	Bulky?: boolean;
	ConstructionAccount?: number;
	CostCalculationMethod?: string;
	DefaultStockLocation?: string;
	DefaultStockPoint?: string;
	Depth?: number;
	Description: string;
	DirectCost?: number;
	DisposableQuantity?: number;
	EAN?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	Expired?: boolean;
	ExportAccount?: number;
	FreightCost?: number;
	Height?: number;
	Housework?: boolean;
	HouseworkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "FURNISHING"
		| "HOMEMAINTENANCE"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "EMPTYHOUSEWORK"
		| "OTHERCOSTS";
	Manufacturer?: string;
	ManufacturerArticleNumber?: string;
	Note?: string;
	OtherCost?: number;
	PurchaseAccount?: number;
	PurchasePrice?: number;
	QuantityInStock?: number;
	ReservedQuantity?: number;
	SalesAccount?: number;
	SalesPrice?: number;
	StockAccount?: number;
	StockChangeAccount?: number;
	StockGoods?: boolean;
	StockPlace?: string;
	StockValue?: number;
	StockWarning?: number;
	SupplierName?: string;
	SupplierNumber?: string;
	Type?: "STOCK" | "SERVICE";
	Unit?: string;
	VAT?: number;
	WebshopArticle?: boolean;
	Weight?: number;
	Width?: number;
}

export interface FortnoxArticleSinglePayloadItemWrap {
	Article: {
		Active?: boolean;
		ArticleNumber?: string;
		Bulky?: boolean;
		ConstructionAccount?: number;
		CostCalculationMethod?: string;
		DefaultStockLocation?: string;
		DefaultStockPoint?: string;
		Depth?: number;
		Description: string;
		DirectCost?: number;
		DisposableQuantity?: number;
		EAN?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		Expired?: boolean;
		ExportAccount?: number;
		FreightCost?: number;
		Height?: number;
		Housework?: boolean;
		HouseworkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "FURNISHING"
			| "HOMEMAINTENANCE"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "EMPTYHOUSEWORK"
			| "OTHERCOSTS";
		Manufacturer?: string;
		ManufacturerArticleNumber?: string;
		Note?: string;
		OtherCost?: number;
		PurchaseAccount?: number;
		PurchasePrice?: number;
		QuantityInStock?: number;
		ReservedQuantity?: number;
		SalesAccount?: number;
		SalesPrice?: number;
		StockAccount?: number;
		StockChangeAccount?: number;
		StockGoods?: boolean;
		StockPlace?: string;
		StockValue?: number;
		StockWarning?: number;
		SupplierName?: string;
		SupplierNumber?: string;
		Type?: "STOCK" | "SERVICE";
		Unit?: string;
		VAT?: number;
		WebshopArticle?: boolean;
		Weight?: number;
		Width?: number;
	};
}

export interface FortnoxArticleV2ListItem {
	"@url"?: string;
	Active?: boolean;
	ArticleNumber?: string;
	Bulky?: boolean;
	Bundle?: {
		Comment?: string;
		PriceAdjustmentRow?: {
			ConstructionAccount?: number;
			Description?: string;
			EUAccount?: number;
			EUVATAccount?: number;
			EuAccount?: number;
			EuVatAccount?: number;
			ExportAccount?: number;
			SalesAccount?: number;
			VAT?: number;
			Vat?: number;
		};
		SubItems?: {
			ArticleNumber?: string;
			FixedPrice?: boolean;
			Quantity?: number;
		}[];
	};
	BundleArticle?: boolean;
	CommodityCode?: string;
	ConstructionAccount?: number;
	CostCalculationMethod?: string;
	DefaultStockLocation?: string;
	DefaultStockPoint?: string;
	Depth?: number;
	Description: string;
	DirectCost?: number;
	DisposableQuantity?: string;
	EAN?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	Expired?: boolean;
	ExportAccount?: number;
	FreightCost?: number;
	Height?: number;
	Housework?: boolean;
	HouseworkType?: string;
	Manufacturer?: string;
	ManufacturerArticleNumber?: string;
	Note?: string;
	OtherCost?: number;
	PurchaseAccount?: number;
	PurchasePrice?: string;
	QuantityInStock?: number;
	ReservedQuantity?: string;
	SalesAccount?: number;
	SalesPrice?: string;
	StockAccount?: string;
	StockChangeAccount?: string;
	StockGoods?: boolean;
	StockPlace?: string;
	StockValue?: string;
	StockWarning?: number;
	SupplierName?: string;
	SupplierNumber?: string;
	Type?: string;
	Unit?: string;
	VAT?: string;
	WebshopArticle?: boolean;
	Weight?: number;
	Width?: number;
}

export interface FortnoxArticleV2ListItemWrap {
	Articles: {
		"@url"?: string;
		Active?: boolean;
		ArticleNumber?: string;
		Bulky?: boolean;
		Bundle?: {
			Comment?: string;
			PriceAdjustmentRow?: {
				ConstructionAccount?: number;
				Description?: string;
				EUAccount?: number;
				EUVATAccount?: number;
				EuAccount?: number;
				EuVatAccount?: number;
				ExportAccount?: number;
				SalesAccount?: number;
				VAT?: number;
				Vat?: number;
			};
			SubItems?: {
				ArticleNumber?: string;
				FixedPrice?: boolean;
				Quantity?: number;
			}[];
		};
		BundleArticle?: boolean;
		CommodityCode?: string;
		ConstructionAccount?: number;
		CostCalculationMethod?: string;
		DefaultStockLocation?: string;
		DefaultStockPoint?: string;
		Depth?: number;
		Description: string;
		DirectCost?: number;
		DisposableQuantity?: string;
		EAN?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		Expired?: boolean;
		ExportAccount?: number;
		FreightCost?: number;
		Height?: number;
		Housework?: boolean;
		HouseworkType?: string;
		Manufacturer?: string;
		ManufacturerArticleNumber?: string;
		Note?: string;
		OtherCost?: number;
		PurchaseAccount?: number;
		PurchasePrice?: string;
		QuantityInStock?: number;
		ReservedQuantity?: string;
		SalesAccount?: number;
		SalesPrice?: string;
		StockAccount?: string;
		StockChangeAccount?: string;
		StockGoods?: boolean;
		StockPlace?: string;
		StockValue?: string;
		StockWarning?: number;
		SupplierName?: string;
		SupplierNumber?: string;
		Type?: string;
		Unit?: string;
		VAT?: string;
		WebshopArticle?: boolean;
		Weight?: number;
		Width?: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxArticleV2SingleItem {
	"@url"?: string;
	Active?: boolean;
	ArticleNumber?: string;
	Bulky?: boolean;
	Bundle?: {
		Comment?: string;
		PriceAdjustmentRow?: {
			ConstructionAccount?: number;
			Description?: string;
			EUAccount?: number;
			EUVATAccount?: number;
			EuAccount?: number;
			EuVatAccount?: number;
			ExportAccount?: number;
			SalesAccount?: number;
			VAT?: number;
			Vat?: number;
		};
		SubItems?: {
			ArticleNumber?: string;
			FixedPrice?: boolean;
			Quantity?: number;
		}[];
	};
	BundleArticle?: boolean;
	CommodityCode?: string;
	ConstructionAccount?: number;
	CostCalculationMethod?: string;
	DefaultStockLocation?: string;
	DefaultStockPoint?: string;
	Depth?: number;
	Description: string;
	DirectCost?: number;
	DisposableQuantity?: number;
	EAN?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	Expired?: boolean;
	ExportAccount?: number;
	FreightCost?: number;
	Height?: number;
	Housework?: boolean;
	HouseworkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "FURNISHING"
		| "HOMEMAINTENANCE"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "EMPTYHOUSEWORK"
		| "OTHERCOSTS";
	Manufacturer?: string;
	ManufacturerArticleNumber?: string;
	Note?: string;
	OtherCost?: number;
	PurchaseAccount?: number;
	PurchasePrice?: number;
	QuantityInStock?: number;
	ReservedQuantity?: number;
	SalesAccount?: number;
	SalesPrice?: number;
	StockAccount?: number;
	StockChangeAccount?: number;
	StockGoods?: boolean;
	StockPlace?: string;
	StockValue?: number;
	StockWarning?: number;
	SupplierName?: string;
	SupplierNumber?: string;
	Type?: "STOCK" | "SERVICE";
	Unit?: string;
	VAT?: number;
	WebshopArticle?: boolean;
	Weight?: number;
	Width?: number;
}

export interface FortnoxArticleV2SingleItemWrap {
	Article: {
		"@url"?: string;
		Active?: boolean;
		ArticleNumber?: string;
		Bulky?: boolean;
		Bundle?: {
			Comment?: string;
			PriceAdjustmentRow?: {
				ConstructionAccount?: number;
				Description?: string;
				EUAccount?: number;
				EUVATAccount?: number;
				EuAccount?: number;
				EuVatAccount?: number;
				ExportAccount?: number;
				SalesAccount?: number;
				VAT?: number;
				Vat?: number;
			};
			SubItems?: {
				ArticleNumber?: string;
				FixedPrice?: boolean;
				Quantity?: number;
			}[];
		};
		BundleArticle?: boolean;
		CommodityCode?: string;
		ConstructionAccount?: number;
		CostCalculationMethod?: string;
		DefaultStockLocation?: string;
		DefaultStockPoint?: string;
		Depth?: number;
		Description: string;
		DirectCost?: number;
		DisposableQuantity?: number;
		EAN?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		Expired?: boolean;
		ExportAccount?: number;
		FreightCost?: number;
		Height?: number;
		Housework?: boolean;
		HouseworkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "FURNISHING"
			| "HOMEMAINTENANCE"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "EMPTYHOUSEWORK"
			| "OTHERCOSTS";
		Manufacturer?: string;
		ManufacturerArticleNumber?: string;
		Note?: string;
		OtherCost?: number;
		PurchaseAccount?: number;
		PurchasePrice?: number;
		QuantityInStock?: number;
		ReservedQuantity?: number;
		SalesAccount?: number;
		SalesPrice?: number;
		StockAccount?: number;
		StockChangeAccount?: number;
		StockGoods?: boolean;
		StockPlace?: string;
		StockValue?: number;
		StockWarning?: number;
		SupplierName?: string;
		SupplierNumber?: string;
		Type?: "STOCK" | "SERVICE";
		Unit?: string;
		VAT?: number;
		WebshopArticle?: boolean;
		Weight?: number;
		Width?: number;
	};
}

export interface FortnoxArticleV2SinglePayloadItem {
	Active?: boolean;
	ArticleNumber?: string;
	Bulky?: boolean;
	Bundle?: {
		Comment?: string;
		PriceAdjustmentRow?: {
			ConstructionAccount?: number;
			Description?: string;
			EUAccount?: number;
			EUVATAccount?: number;
			EuAccount?: number;
			EuVatAccount?: number;
			ExportAccount?: number;
			SalesAccount?: number;
			VAT?: number;
			Vat?: number;
		};
		SubItems?: {
			ArticleNumber?: string;
			FixedPrice?: boolean;
			Quantity?: number;
		}[];
	};
	BundleArticle?: boolean;
	ConstructionAccount?: number;
	CostCalculationMethod?: string;
	DefaultStockLocation?: string;
	DefaultStockPoint?: string;
	Depth?: number;
	Description: string;
	DirectCost?: number;
	DisposableQuantity?: number;
	EAN?: string;
	EUAccount?: number;
	EUVATAccount?: number;
	Expired?: boolean;
	ExportAccount?: number;
	FreightCost?: number;
	Height?: number;
	Housework?: boolean;
	HouseworkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "FURNISHING"
		| "HOMEMAINTENANCE"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "EMPTYHOUSEWORK"
		| "OTHERCOSTS";
	Manufacturer?: string;
	ManufacturerArticleNumber?: string;
	Note?: string;
	OtherCost?: number;
	PurchaseAccount?: number;
	PurchasePrice?: number;
	QuantityInStock?: number;
	ReservedQuantity?: number;
	SalesAccount?: number;
	SalesPrice?: number;
	StockAccount?: number;
	StockChangeAccount?: number;
	StockGoods?: boolean;
	StockPlace?: string;
	StockValue?: number;
	StockWarning?: number;
	SupplierName?: string;
	SupplierNumber?: string;
	Type?: "STOCK" | "SERVICE";
	Unit?: string;
	VAT?: number;
	WebshopArticle?: boolean;
	Weight?: number;
	Width?: number;
}

export interface FortnoxArticleV2SinglePayloadItemWrap {
	Article: {
		Active?: boolean;
		ArticleNumber?: string;
		Bulky?: boolean;
		Bundle?: {
			Comment?: string;
			PriceAdjustmentRow?: {
				ConstructionAccount?: number;
				Description?: string;
				EUAccount?: number;
				EUVATAccount?: number;
				EuAccount?: number;
				EuVatAccount?: number;
				ExportAccount?: number;
				SalesAccount?: number;
				VAT?: number;
				Vat?: number;
			};
			SubItems?: {
				ArticleNumber?: string;
				FixedPrice?: boolean;
				Quantity?: number;
			}[];
		};
		BundleArticle?: boolean;
		ConstructionAccount?: number;
		CostCalculationMethod?: string;
		DefaultStockLocation?: string;
		DefaultStockPoint?: string;
		Depth?: number;
		Description: string;
		DirectCost?: number;
		DisposableQuantity?: number;
		EAN?: string;
		EUAccount?: number;
		EUVATAccount?: number;
		Expired?: boolean;
		ExportAccount?: number;
		FreightCost?: number;
		Height?: number;
		Housework?: boolean;
		HouseworkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "FURNISHING"
			| "HOMEMAINTENANCE"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "EMPTYHOUSEWORK"
			| "OTHERCOSTS";
		Manufacturer?: string;
		ManufacturerArticleNumber?: string;
		Note?: string;
		OtherCost?: number;
		PurchaseAccount?: number;
		PurchasePrice?: number;
		QuantityInStock?: number;
		ReservedQuantity?: number;
		SalesAccount?: number;
		SalesPrice?: number;
		StockAccount?: number;
		StockChangeAccount?: number;
		StockGoods?: boolean;
		StockPlace?: string;
		StockValue?: number;
		StockWarning?: number;
		SupplierName?: string;
		SupplierNumber?: string;
		Type?: "STOCK" | "SERVICE";
		Unit?: string;
		VAT?: number;
		WebshopArticle?: boolean;
		Weight?: number;
		Width?: number;
	};
}

export interface FortnoxBfAccountChartListItemWrap {
	AccountCharts: {
		Name?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxBfAccountChartSingleItem {
	Name?: string;
}

export interface FortnoxBfAccountListItem {
	"@url"?: string;
	Active?: boolean;
	BalanceBroughtForward?: number;
	BalanceCarriedForward?: number;
	CostCenter?: string;
	CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	Description: string;
	Number: number;
	OpeningQuantities?: {
		Balance?: number;
		Project?: string;
	}[];
	Project?: string;
	ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	QuantitySettings?: number;
	QuantityUnit?: string;
	SRU?: number;
	TransactionInformation?: string;
	TransactionInformationSettings?: number;
	VATCode?: string;
	Year?: number;
}

export interface FortnoxBfAccountListItemWrap {
	Accounts: {
		"@url"?: string;
		Active?: boolean;
		BalanceBroughtForward?: number;
		BalanceCarriedForward?: number;
		CostCenter?: string;
		CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		Description: string;
		Number: number;
		OpeningQuantities?: {
			Balance?: number;
			Project?: string;
		}[];
		Project?: string;
		ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		QuantitySettings?: number;
		QuantityUnit?: string;
		SRU?: number;
		TransactionInformation?: string;
		TransactionInformationSettings?: number;
		VATCode?: string;
		Year?: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxBfAccountSingleItem {
	"@url"?: string;
	Active?: boolean;
	BalanceBroughtForward?: number;
	BalanceCarriedForward?: number;
	CostCenter?: string;
	CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	Description: string;
	Number: number;
	OpeningQuantities?: {
		Balance?: number;
		Project?: string;
	}[];
	Project?: string;
	ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	QuantitySettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	QuantityUnit?: string;
	SRU?: number;
	TransactionInformation?: string;
	TransactionInformationSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	VATCode?: string;
	Year?: number;
}

export interface FortnoxBfAccountSingleItemWrap {
	Account: {
		"@url"?: string;
		Active?: boolean;
		BalanceBroughtForward?: number;
		BalanceCarriedForward?: number;
		CostCenter?: string;
		CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		Description: string;
		Number: number;
		OpeningQuantities?: {
			Balance?: number;
			Project?: string;
		}[];
		Project?: string;
		ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		QuantitySettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		QuantityUnit?: string;
		SRU?: number;
		TransactionInformation?: string;
		TransactionInformationSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		VATCode?: string;
		Year?: number;
	};
}

export interface FortnoxBfAccountSinglePayloadItem {
	Active?: boolean;
	BalanceBroughtForward?: number;
	CostCenter?: string;
	CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	Description: string;
	Number: number;
	OpeningQuantities?: {
		Balance?: number;
		Project?: string;
	}[];
	Project?: string;
	ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	SRU?: number;
	TransactionInformation?: string;
	TransactionInformationSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
	VATCode?: string;
}

export interface FortnoxBfAccountSinglePayloadItemWrap {
	Account: {
		Active?: boolean;
		BalanceBroughtForward?: number;
		CostCenter?: string;
		CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		Description: string;
		Number: number;
		OpeningQuantities?: {
			Balance?: number;
			Project?: string;
		}[];
		Project?: string;
		ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		SRU?: number;
		TransactionInformation?: string;
		TransactionInformationSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED";
		VATCode?: string;
	};
}

export interface FortnoxBfAccountingQuantityBalancesSingleItem {
	Balance?: number;
	Project?: string;
}

export interface FortnoxBfAccountingQuantityBalancesSinglePayloadItem {
	Balance?: number;
	Project?: string;
}

export interface FortnoxBfFinancialYearListItem {
	"@url"?: string;
	AccountChartType?: string;
	AccountingMethod?: "ACCRUAL" | "CASH";
	FromDate: string;
	Id?: number;
	ToDate: string;
}

export interface FortnoxBfFinancialYearListItemWrap {
	FinancialYears: {
		"@url"?: string;
		AccountChartType?: string;
		AccountingMethod?: "ACCRUAL" | "CASH";
		FromDate: string;
		Id?: number;
		ToDate: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxBfFinancialYearSingleItem {
	"@url"?: string;
	AccountChartType?: string;
	AccountingMethod?: "ACCRUAL" | "CASH";
	FromDate: string;
	Id?: number;
	ToDate: string;
}

export interface FortnoxBfFinancialYearSingleItemWrap {
	FinancialYear: {
		"@url"?: string;
		AccountChartType?: string;
		AccountingMethod?: "ACCRUAL" | "CASH";
		FromDate: string;
		Id?: number;
		ToDate: string;
	};
}

export interface FortnoxBfFinancialYearSinglePayloadItem {
	AccountChartType?: string;
	AccountingMethod?: "ACCRUAL" | "CASH";
	FromDate: string;
	Id?: number;
	ToDate: string;
}

export interface FortnoxBfFinancialYearSinglePayloadItemWrap {
	FinancialYear: {
		AccountChartType?: string;
		AccountingMethod?: "ACCRUAL" | "CASH";
		FromDate: string;
		Id?: number;
		ToDate: string;
	};
}

export interface FortnoxBfPreDefinedVoucherSeriesListItemWrap {
	PreDefinedVoucherSeriesCollection: {
		"@url"?: string;
		Name?: string;
		VoucherSeries: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxBfPreDefinedVoucherSeriesSingleItem {
	"@url"?: string;
	Name?: string;
	VoucherSeries: string;
}

export interface FortnoxBfPreDefinedVoucherSeriesSingleItemWrap {
	PreDefinedVoucherSeries: {
		"@url"?: string;
		Name?: string;
		VoucherSeries: string;
	};
}

export interface FortnoxBfPreDefinedVoucherSeriesSinglePayloadItem {
	Name?: string;
	VoucherSeries: string;
}

export interface FortnoxBfPreDefinedVoucherSeriesSinglePayloadItemWrap {
	PreDefinedVoucherSeries: {
		Name?: string;
		VoucherSeries: string;
	};
}

export interface FortnoxBfSieSingleItem {
	Accounts?: number;
	ContactDeliveryAddress?: string;
	ContactMailingAddress?: string;
	ContactName?: string;
	ContactPhone?: string;
	CostCenters?: number;
	DateOfGeneration?: string;
	Extent?: string;
	IncomingBalances?: number;
	Projects?: number;
	TermBudgets?: number;
	TypeOfSie?: string;
	UsedAccounts?: number;
	UsedCostCenters?: number;
	UsedProjects?: number;
	Verifications?: number;
	VerificationsIntervals?: {
		First?: string;
		Last?: string;
		Series?: string;
	}[];
}

export interface FortnoxBfSieSingleItemWrap {
	SieSummary: {
		Accounts?: number;
		ContactDeliveryAddress?: string;
		ContactMailingAddress?: string;
		ContactName?: string;
		ContactPhone?: string;
		CostCenters?: number;
		DateOfGeneration?: string;
		Extent?: string;
		IncomingBalances?: number;
		Projects?: number;
		TermBudgets?: number;
		TypeOfSie?: string;
		UsedAccounts?: number;
		UsedCostCenters?: number;
		UsedProjects?: number;
		Verifications?: number;
		VerificationsIntervals?: {
			First?: string;
			Last?: string;
			Series?: string;
		}[];
	};
}

export interface FortnoxBfSieVerificationSeriesSingleItem {
	First?: string;
	Last?: string;
	Series?: string;
}

export interface FortnoxBfVoucherApproverSingleItem {
	Id?: number;
	Name?: string;
}

export interface FortnoxBfVoucherListItem {
	"@url": string;
	ApprovalState: number;
	Comments: string;
	CostCenter: string;
	Description: string;
	Project: string;
	ReferenceNumber: string;
	ReferenceType:
		| "INVOICE"
		| "SUPPLIERINVOICE"
		| "INVOICEPAYMENT"
		| "SUPPLIERPAYMENT"
		| "MANUAL"
		| "CASHINVOICE"
		| "ACCRUAL";
	TransactionDate: string;
	VoucherNumber: number;
	VoucherRows: {
		Account: number;
		CostCenter?: string;
		Credit?: number;
		Debit?: number;
		Description?: string;
		Project?: string;
		Quantity?: number;
		Removed?: boolean;
		TransactionInformation?: string;
	}[];
	VoucherSeries: string;
	Year: number;
}

export interface FortnoxBfVoucherListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	Vouchers: {
		"@url": string;
		ApprovalState: number;
		Comments: string;
		CostCenter: string;
		Description: string;
		Project: string;
		ReferenceNumber: string;
		ReferenceType:
			| "INVOICE"
			| "SUPPLIERINVOICE"
			| "INVOICEPAYMENT"
			| "SUPPLIERPAYMENT"
			| "MANUAL"
			| "CASHINVOICE"
			| "ACCRUAL";
		TransactionDate: string;
		VoucherNumber: number;
		VoucherRows: {
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		}[];
		VoucherSeries: string;
		Year: number;
	}[];
}

export interface FortnoxBfVoucherRowSingleItem {
	Account: number;
	CostCenter?: string;
	Credit?: number;
	Debit?: number;
	Description?: string;
	Project?: string;
	Quantity?: number;
	Removed?: boolean;
	TransactionInformation?: string;
}

export interface FortnoxBfVoucherRowSinglePayloadItem {
	Account: number;
	CostCenter?: string;
	Credit?: number;
	Debit?: number;
	Description?: string;
	Project?: string;
	Quantity?: number;
	Removed?: boolean;
	TransactionInformation?: string;
}

export interface FortnoxBfVoucherSeriesListItem {
	"@url"?: string;
	Approver?: {
		Id?: number;
		Name?: string;
	};
	Code: string;
	Description?: string;
	Manual?: boolean;
	NextVoucherNumber?: number;
	Year?: number;
}

export interface FortnoxBfVoucherSeriesListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	VoucherSeriesCollection: {
		"@url"?: string;
		Approver?: {
			Id?: number;
			Name?: string;
		};
		Code: string;
		Description?: string;
		Manual?: boolean;
		NextVoucherNumber?: number;
		Year?: number;
	}[];
}

export interface FortnoxBfVoucherSeriesSingleItem {
	"@url"?: string;
	Approver?: {
		Id?: number;
		Name?: string;
	};
	Code: string;
	Description?: string;
	Manual?: boolean;
	NextVoucherNumber?: number;
	Year?: number;
}

export interface FortnoxBfVoucherSeriesSingleItemWrap {
	VoucherSeries: {
		"@url"?: string;
		Approver?: {
			Id?: number;
			Name?: string;
		};
		Code: string;
		Description?: string;
		Manual?: boolean;
		NextVoucherNumber?: number;
		Year?: number;
	};
}

export interface FortnoxBfVoucherSeriesSinglePayloadItem {
	Code: string;
	Description?: string;
	Manual?: boolean;
	NextVoucherNumber?: number;
	Year?: number;
}

export interface FortnoxBfVoucherSeriesSinglePayloadItemWrap {
	VoucherSeries: {
		Code: string;
		Description?: string;
		Manual?: boolean;
		NextVoucherNumber?: number;
		Year?: number;
	};
}

export interface FortnoxBfVoucherSingleItem {
	"@url"?: string;
	ApprovalState?: number;
	Comments?: string;
	CostCenter?: string;
	Description: string;
	Project?: string;
	ReferenceNumber?: string;
	ReferenceType?:
		| "INVOICE"
		| "SUPPLIERINVOICE"
		| "INVOICEPAYMENT"
		| "SUPPLIERPAYMENT"
		| "MANUAL"
		| "CASHINVOICE"
		| "ACCRUAL";
	TransactionDate: string;
	VoucherNumber?: number;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	VoucherRows?: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		}[],
	];
	VoucherSeries: string;
	Year: number;
}

export interface FortnoxBfVoucherSingleItemWrap {
	Voucher: {
		"@url"?: string;
		ApprovalState?: number;
		Comments?: string;
		CostCenter?: string;
		Description: string;
		Project?: string;
		ReferenceNumber?: string;
		ReferenceType?:
			| "INVOICE"
			| "SUPPLIERINVOICE"
			| "INVOICEPAYMENT"
			| "SUPPLIERPAYMENT"
			| "MANUAL"
			| "CASHINVOICE"
			| "ACCRUAL";
		TransactionDate: string;
		VoucherNumber?: number;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		VoucherRows?: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Description?: string;
				Project?: string;
				Quantity?: number;
				Removed?: boolean;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Description?: string;
				Project?: string;
				Quantity?: number;
				Removed?: boolean;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Description?: string;
				Project?: string;
				Quantity?: number;
				Removed?: boolean;
				TransactionInformation?: string;
			}[],
		];
		VoucherSeries: string;
		Year: number;
	};
}

export interface FortnoxBfVoucherSinglePayloadItem {
	ApprovalState?: number;
	Comments?: string;
	CostCenter?: string;
	Description: string;
	Project?: string;
	ReferenceNumber?: string;
	ReferenceType?:
		| "INVOICE"
		| "SUPPLIERINVOICE"
		| "INVOICEPAYMENT"
		| "SUPPLIERPAYMENT"
		| "MANUAL"
		| "CASHINVOICE"
		| "ACCRUAL";
	TransactionDate: string;
	VoucherNumber?: number;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	VoucherRows?: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Description?: string;
			Project?: string;
			Quantity?: number;
			Removed?: boolean;
			TransactionInformation?: string;
		}[],
	];
	VoucherSeries: string;
	Year: number;
}

export interface FortnoxBfVoucherSinglePayloadItemWrap {
	Voucher: {
		ApprovalState?: number;
		Comments?: string;
		CostCenter?: string;
		Description: string;
		Project?: string;
		ReferenceNumber?: string;
		ReferenceType?:
			| "INVOICE"
			| "SUPPLIERINVOICE"
			| "INVOICEPAYMENT"
			| "SUPPLIERPAYMENT"
			| "MANUAL"
			| "CASHINVOICE"
			| "ACCRUAL";
		TransactionDate: string;
		VoucherNumber?: number;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		VoucherRows?: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Description?: string;
				Project?: string;
				Quantity?: number;
				Removed?: boolean;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Description?: string;
				Project?: string;
				Quantity?: number;
				Removed?: boolean;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Description?: string;
				Project?: string;
				Quantity?: number;
				Removed?: boolean;
				TransactionInformation?: string;
			}[],
		];
		VoucherSeries: string;
		Year: number;
	};
}

export interface FortnoxBflcClientAuthExchangeSingleItem {
	AuthorizationCode?: string;
}

export interface FortnoxBflcClientAuthExchangeSingleItemWrap {
	Authorization: {
		AuthorizationCode?: string;
	};
}

export interface FortnoxBflcClientListListItem {
	CompanyName: string;
	Id: string;
	OrganizationNumber: string;
}

export interface FortnoxBflcClientListListItemWrap {
	Clients: {
		CompanyName: string;
		Id: string;
		OrganizationNumber: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxCompanyInformationSingleItem {
	Address?: string;
	City?: string;
	CompanyName?: string;
	CountryCode?: string;
	DatabaseNumber?: number;
	OrganizationNumber?: string;
	VisitAddress?: string;
	VisitCity?: string;
	VisitCountryCode?: string;
	VisitZipCode?: string;
	ZipCode?: string;
}

export interface FortnoxCompanyInformationSingleItemWrap {
	CompanyInformation: {
		Address?: string;
		City?: string;
		CompanyName?: string;
		CountryCode?: string;
		DatabaseNumber?: number;
		OrganizationNumber?: string;
		VisitAddress?: string;
		VisitCity?: string;
		VisitCountryCode?: string;
		VisitZipCode?: string;
		ZipCode?: string;
	};
}

export interface FortnoxCompanyCompanyLogoBinaryItem {
	file?: string;
}

export interface FortnoxCompanyCompanyLogoBinaryItemWrap {
	CompanyLogo: {
		file?: string;
	};
}

export interface FortnoxCompanyCompanySettingsResponseWrap {
	CompanySettings: {
		Address?: string;
		BG?: string;
		BIC?: string;
		BranchCode?: string;
		City?: string;
		ContactFirstName?: string;
		ContactLastName?: string;
		Country?: string;
		CountryCode?: string;
		DatabaseNumber?: string;
		Domicile?: string;
		Email?: string;
		Fax?: string;
		IBAN?: string;
		Name?: string;
		OrganizationNumber?: string;
		PG?: string;
		Phone1?: string;
		Phone2?: string;
		TaxEnabled?: boolean;
		VATNumber?: string;
		VisitAddress?: string;
		VisitCity?: string;
		VisitCountry?: string;
		VisitCountryCode?: string;
		VisitName?: string;
		VisitZipCode?: string;
		WWW?: string;
		ZipCode?: string;
	};
}

export interface FortnoxCompanyCompanySettingsSingleItem {
	Address?: string;
	BG?: string;
	BIC?: string;
	BranchCode?: string;
	City?: string;
	ContactFirstName?: string;
	ContactLastName?: string;
	Country?: string;
	CountryCode?: string;
	DatabaseNumber?: string;
	Domicile?: string;
	Email?: string;
	Fax?: string;
	IBAN?: string;
	Name?: string;
	OrganizationNumber?: string;
	PG?: string;
	Phone1?: string;
	Phone2?: string;
	TaxEnabled?: boolean;
	VATNumber?: string;
	VisitAddress?: string;
	VisitCity?: string;
	VisitCountry?: string;
	VisitCountryCode?: string;
	VisitName?: string;
	VisitZipCode?: string;
	WWW?: string;
	ZipCode?: string;
}

export interface FortnoxContractInvoiceContractAccrualListItem {
	"@url"?: string;
	AccrualAccount?: number;
	AccrualRows?: {
		Account: number;
		CostCenter?: string;
		Credit?: number;
		Debit?: number;
		Project?: string;
		TransactionInformation?: string;
	}[];
	CostAccount?: number;
	Description: string;
	DocumentNumber: number;
	Period?: "MONTHLY" | "BIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY";
	Times?: number;
	Total?: number;
	VATIncluded?: boolean;
}

export interface FortnoxContractInvoiceContractAccrualListItemWrap {
	ContractAccruals: {
		"@url"?: string;
		AccrualAccount?: number;
		AccrualRows?: {
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[];
		CostAccount?: number;
		Description: string;
		DocumentNumber: number;
		Period?:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY";
		Times?: number;
		Total?: number;
		VATIncluded?: boolean;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxContractInvoiceContractAccrualRowSingleItem {
	Account: number;
	CostCenter?: string;
	Credit?: number;
	Debit?: number;
	Project?: string;
	TransactionInformation?: string;
}

export interface FortnoxContractInvoiceContractAccrualRowSinglePayloadItem {
	Account: number;
	CostCenter?: string;
	Credit?: number;
	Debit?: number;
	Project?: string;
	TransactionInformation?: string;
}

export interface FortnoxContractInvoiceContractAccrualSingleItem {
	"@url"?: string;
	AccrualAccount: number;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	AccrualRows: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[],
	];
	CostAccount: number;
	Description: string;
	DocumentNumber: number;
	Period?: "MONTHLY" | "BIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY";
	Times?: number;
	Total: number;
	VATIncluded?: boolean;
}

export interface FortnoxContractInvoiceContractAccrualSingleItemWrap {
	ContractAccrual: {
		"@url"?: string;
		AccrualAccount: number;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		AccrualRows: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			}[],
		];
		CostAccount: number;
		Description: string;
		DocumentNumber: number;
		Period?:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY";
		Times?: number;
		Total: number;
		VATIncluded?: boolean;
	};
}

export interface FortnoxContractInvoiceContractAccrualSinglePayloadItem {
	AccrualAccount: number;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	AccrualRows: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[],
	];
	CostAccount: number;
	Description: string;
	DocumentNumber: number;
	Period?: "MONTHLY" | "BIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY";
	Times?: number;
	Total: number;
	VATIncluded?: boolean;
}

export interface FortnoxContractInvoiceContractAccrualSinglePayloadItemWrap {
	ContractAccrual: {
		AccrualAccount: number;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		AccrualRows: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			}[],
		];
		CostAccount: number;
		Description: string;
		DocumentNumber: number;
		Period?:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY";
		Times?: number;
		Total: number;
		VATIncluded?: boolean;
	};
}

export interface FortnoxContractInvoiceContractCreatePayload {
	Active?: boolean;
	AdministrationFee?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerNumber: string;
	DocumentNumber?: number;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	HouseWork?: boolean;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	Language?: "SV" | "EN";
	OurReference?: string;
	PeriodEnd: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractCreatePayloadWrap {
	Contract: {
		Active?: boolean;
		AdministrationFee?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerNumber: string;
		DocumentNumber?: number;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		HouseWork?: boolean;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		Language?: "SV" | "EN";
		OurReference?: string;
		PeriodEnd: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	};
}

export interface FortnoxContractInvoiceContractInvoiceRowSingleItem {
	AccountNumber?: number;
	ArticleNumber: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	DeliveredQuantity: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	PriceExcludingVAT?: number;
	Project?: string;
	RowId?: number;
	Total?: number;
	TotalExcludingVAT?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxContractInvoiceContractInvoiceRowSinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	DeliveredQuantity: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	PriceExcludingVAT?: number;
	Project?: string;
	RowId?: number;
	Total?: number;
	TotalExcludingVAT?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxContractInvoiceContractListItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Active?: boolean;
	AdministrationFee?: number;
	BasisTaxReduction?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	ContributionPercent?: number;
	ContributionValue?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerName?: string;
	CustomerNumber: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	Invoiceinterval?: number;
	InvoicesRemaining?: number;
	Language?: string;
	LastInvoiceDate?: string;
	Net?: number;
	OurReference?: string;
	PeriodEnd: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Status?: string;
	TaxReduction?: number;
	TaxReductionType?: string;
	TemplateName?: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractListResponseWrap {
	Contracts: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Active?: boolean;
		AdministrationFee?: number;
		BasisTaxReduction?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		ContributionPercent?: number;
		ContributionValue?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerName?: string;
		CustomerNumber: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		Invoiceinterval?: number;
		InvoicesRemaining?: number;
		Language?: string;
		LastInvoiceDate?: string;
		Net?: number;
		OurReference?: string;
		PeriodEnd: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Status?: string;
		TaxReduction?: number;
		TaxReductionType?: string;
		TemplateName?: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxContractInvoiceContractResponseWrap {
	Contract: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Active?: boolean;
		AdministrationFee?: number;
		BasisTaxReduction?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		ContributionPercent?: number;
		ContributionValue?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerName?: string;
		CustomerNumber: string;
		DocumentNumber?: number;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoicesRemaining?: string;
		Language?: "SV" | "EN";
		LastInvoiceDate?: string;
		Net?: number;
		OurReference?: string;
		PeriodEnd: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TemplateName?: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	};
}

export interface FortnoxContractInvoiceContractSingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Active?: boolean;
	AdministrationFee?: number;
	BasisTaxReduction?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	ContributionPercent?: number;
	ContributionValue?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerName?: string;
	CustomerNumber: string;
	DocumentNumber?: number;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoicesRemaining?: string;
	Language?: "SV" | "EN";
	LastInvoiceDate?: string;
	Net?: number;
	OurReference?: string;
	PeriodEnd: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TemplateName?: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractTemplateListItem {
	"@url": string;
	AdministrationFee: number;
	Continuous: boolean;
	ContractLength: number;
	ContractTemplate: number;
	ContractTemplateName: string;
	Freight: number;
	InvoiceInterval: number;
	InvoiceRows: {
		AccountNumber?: number;
		ArticleNumber?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "PERCENT" | "AMOUNT";
		Price?: number;
		Project?: string;
		RowId?: string;
		Unit?: string;
	}[];
	OurReference: string;
	PrintTemplate: string;
	Remarks: string;
	TemplateName: string;
	TemplateNumber: number;
	TermsOfDelivery: string;
	TermsOfPayment: string;
	WayOfDelivery: string;
}

export interface FortnoxContractInvoiceContractTemplateListResponseWrap {
	ContractTemplates: {
		"@url": string;
		AdministrationFee: number;
		Continuous: boolean;
		ContractLength: number;
		ContractTemplate: number;
		ContractTemplateName: string;
		Freight: number;
		InvoiceInterval: number;
		InvoiceRows: {
			AccountNumber?: number;
			ArticleNumber?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "PERCENT" | "AMOUNT";
			Price?: number;
			Project?: string;
			RowId?: string;
			Unit?: string;
		}[];
		OurReference: string;
		PrintTemplate: string;
		Remarks: string;
		TemplateName: string;
		TemplateNumber: number;
		TermsOfDelivery: string;
		TermsOfPayment: string;
		WayOfDelivery: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxContractInvoiceContractTemplateResponseWrap {
	ContractTemplate: {
		"@url"?: string;
		AdministrationFee?: number;
		Continuous?: boolean;
		ContractLength?: number;
		Freight?: number;
		InvoiceInterval?: number;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "PERCENT" | "AMOUNT";
			Price?: number;
			Project?: string;
			RowId?: string;
			Unit?: string;
		}[];
		OurReference?: string;
		PrintTemplate?: string;
		Remarks?: string;
		TemplateName: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		WayOfDelivery?: string;
	};
}

export interface FortnoxContractInvoiceContractTemplateRowSingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "PERCENT" | "AMOUNT";
	Price?: number;
	Project?: string;
	RowId?: string;
	Unit?: string;
}

export interface FortnoxContractInvoiceContractTemplateRowSinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "PERCENT" | "AMOUNT";
	Price?: number;
	Project?: string;
	Unit?: string;
}

export interface FortnoxContractInvoiceContractTemplateSingleItem {
	"@url"?: string;
	AdministrationFee?: number;
	Continuous?: boolean;
	ContractLength?: number;
	Freight?: number;
	InvoiceInterval?: number;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "PERCENT" | "AMOUNT";
		Price?: number;
		Project?: string;
		RowId?: string;
		Unit?: string;
	}[];
	OurReference?: string;
	PrintTemplate?: string;
	Remarks?: string;
	TemplateName: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	WayOfDelivery?: string;
}

export interface FortnoxContractInvoiceContractTemplateSinglePayloadItem {
	AdministrationFee?: number;
	Continuous?: boolean;
	ContractLength?: number;
	Freight?: number;
	InvoiceInterval?: number;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "PERCENT" | "AMOUNT";
		Price?: number;
		Project?: string;
		Unit?: string;
	}[];
	OurReference?: string;
	PrintTemplate?: string;
	Remarks?: string;
	TemplateName: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	WayOfDelivery?: string;
}

export interface FortnoxContractInvoiceContractTemplateSinglePayloadItemWrap {
	ContractTemplate: {
		AdministrationFee?: number;
		Continuous?: boolean;
		ContractLength?: number;
		Freight?: number;
		InvoiceInterval?: number;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "PERCENT" | "AMOUNT";
			Price?: number;
			Project?: string;
			Unit?: string;
		}[];
		OurReference?: string;
		PrintTemplate?: string;
		Remarks?: string;
		TemplateName: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		WayOfDelivery?: string;
	};
}

export interface FortnoxContractInvoiceContractUpdateAndCreateInvoicePayload {
	Active?: boolean;
	AdministrationFee?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerNumber?: string;
	DocumentNumber?: number;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	Language?: string;
	OurReference?: string;
	PeriodEnd?: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractUpdateAndCreateInvoicePayloadWrap {
	Contract: {
		Active?: boolean;
		AdministrationFee?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerNumber?: string;
		DocumentNumber?: number;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		Language?: string;
		OurReference?: string;
		PeriodEnd?: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	};
}

export interface FortnoxContractInvoiceContractUpdateAndFinishPayload {
	Active?: boolean;
	AdministrationFee?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerNumber?: string;
	DocumentNumber?: number;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	Language?: string;
	OurReference?: string;
	PeriodEnd?: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractUpdateAndFinishPayloadWrap {
	Contract: {
		Active?: boolean;
		AdministrationFee?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerNumber?: string;
		DocumentNumber?: number;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		Language?: string;
		OurReference?: string;
		PeriodEnd?: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	};
}

export interface FortnoxContractInvoiceContractUpdateAndIncreaseInvoiceCountPayload {
	Active?: boolean;
	AdministrationFee?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerNumber?: string;
	DocumentNumber?: number;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	Language?: string;
	OurReference?: string;
	PeriodEnd?: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractUpdateAndIncreaseInvoiceCountPayloadWrap {
	Contract: {
		Active?: boolean;
		AdministrationFee?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerNumber?: string;
		DocumentNumber?: number;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		Language?: string;
		OurReference?: string;
		PeriodEnd?: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	};
}

export interface FortnoxContractInvoiceContractUpdatePayload {
	"@urlTaxReductionList"?: string;
	Active?: boolean;
	AdministrationFee?: number;
	BasisTaxReduction?: number;
	Comments?: string;
	Continuous?: boolean;
	ContractDate?: string;
	ContractLength?: number;
	ContributionPercent?: number;
	ContributionValue?: number;
	CostCenter?: string;
	Currency?: string;
	CustomerName?: string;
	CustomerNumber: string;
	DocumentNumber?: number;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceDiscount?: number;
	InvoiceInterval?: number;
	InvoiceRows: {
		AccountNumber?: number;
		ArticleNumber: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoicesRemaining?: string;
	Language?: "SV" | "EN";
	LastInvoiceDate?: string;
	Net?: number;
	OurReference?: string;
	PeriodEnd: string;
	PeriodStart?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TemplateName?: string;
	TemplateNumber?: number;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
}

export interface FortnoxContractInvoiceContractUpdatePayloadWrap {
	Contract: {
		"@urlTaxReductionList"?: string;
		Active?: boolean;
		AdministrationFee?: number;
		BasisTaxReduction?: number;
		Comments?: string;
		Continuous?: boolean;
		ContractDate?: string;
		ContractLength?: number;
		ContributionPercent?: number;
		ContributionValue?: number;
		CostCenter?: string;
		Currency?: string;
		CustomerName?: string;
		CustomerNumber: string;
		DocumentNumber?: number;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceDiscount?: number;
		InvoiceInterval?: number;
		InvoiceRows: {
			AccountNumber?: number;
			ArticleNumber: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoicesRemaining?: string;
		Language?: "SV" | "EN";
		LastInvoiceDate?: string;
		Net?: number;
		OurReference?: string;
		PeriodEnd: string;
		PeriodStart?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TemplateName?: string;
		TemplateNumber?: number;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
	};
}

export interface FortnoxCostCenterListItemWrap {
	CostCenters: {
		"@url"?: string;
		Active?: boolean;
		Code: string;
		Description: string;
		Note?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxCostCenterSingleItem {
	"@url"?: string;
	Active?: boolean;
	Code: string;
	Description: string;
	Note?: string;
}

export interface FortnoxCostCenterSingleItemWrap {
	CostCenter: {
		"@url"?: string;
		Active?: boolean;
		Code: string;
		Description: string;
		Note?: string;
	};
}

export interface FortnoxCostCenterSinglePayloadItem {
	Active?: boolean;
	Code: string;
	Description: string;
	Note?: string;
}

export interface FortnoxCostCenterSinglePayloadItemWrap {
	CostCenter: {
		Active?: boolean;
		Code: string;
		Description: string;
		Note?: string;
	};
}

export interface FortnoxCurrencyListItemWrap {
	Currencies: {
		"@url"?: string;
		BuyRate?: number;
		Code: string;
		Date?: string;
		Description: string;
		IsAutomatic?: boolean;
		SellRate?: number;
		Unit?: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxCurrencySingleItem {
	"@url"?: string;
	BuyRate?: number;
	Code: string;
	Date?: string;
	Description: string;
	IsAutomatic?: boolean;
	SellRate?: number;
	Unit?: number;
}

export interface FortnoxCurrencySingleItemWrap {
	Currency: {
		"@url"?: string;
		BuyRate?: number;
		Code: string;
		Date?: string;
		Description: string;
		IsAutomatic?: boolean;
		SellRate?: number;
		Unit?: number;
	};
}

export interface FortnoxCurrencySinglePayloadItem {
	BuyRate?: number;
	Code: string;
	Date?: string;
	Description: string;
	IsAutomatic?: boolean;
	SellRate?: number;
	Unit?: number;
}

export interface FortnoxCurrencySinglePayloadItemWrap {
	Currency: {
		BuyRate?: number;
		Code: string;
		Date?: string;
		Description: string;
		IsAutomatic?: boolean;
		SellRate?: number;
		Unit?: number;
	};
}

export interface FortnoxDaArticleFileConnectionListItemWrap {
	ArticleFileConnections: {
		"@url"?: string;
		ArticleNumber: string;
		FileId: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxDaArticleFileConnectionSingleItem {
	"@url"?: string;
	ArticleNumber: string;
	FileId: string;
}

export interface FortnoxDaArticleFileConnectionSingleItemWrap {
	ArticleFileConnection: {
		"@url"?: string;
		ArticleNumber: string;
		FileId: string;
	};
}

export interface FortnoxDaArticleFileConnectionSinglePayloadItem {
	ArticleNumber: string;
	FileId: string;
}

export interface FortnoxDaArticleFileConnectionSinglePayloadItemWrap {
	ArticleFileConnection: {
		ArticleNumber: string;
		FileId: string;
	};
}

export interface FortnoxDaAssetFileConnectionCreatePayload {
	AssetId?: string;
	FileId?: string;
	Name?: string;
}

export interface FortnoxDaAssetFileConnectionListItemWrap {
	AssetFileConnections: {
		"@url"?: string;
		AssetId?: string;
		FileId?: string;
		Name?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxDaAssetFileConnectionSingleItem {
	"@url"?: string;
	AssetId?: string;
	FileId?: string;
	Name?: string;
}

export interface FortnoxDaEmailSenderSingleItem {
	Email: string;
	Id?: number;
}

export interface FortnoxDaEmailSenderTrustedWrap {
	TrustedSender: {
		Email: string;
		Id?: number;
	};
}

export interface FortnoxDaEmailSenders {
	RejectedSenders?: {
		Email: string;
		Id?: number;
	}[];
	TrustedSenders?: {
		Email: string;
		Id?: number;
	}[];
}

export interface FortnoxDaEmailSendersWrap {
	EmailSenders: {
		RejectedSenders?: {
			Email: string;
			Id?: number;
		}[];
		TrustedSenders?: {
			Email: string;
			Id?: number;
		}[];
	};
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxDaInboxFileResponseWrap {
	File: {
		"@url"?: string;
		ArchiveFileId?: string;
		Comments?: string;
		Id?: string;
		Name?: string;
		Path?: string;
		Size?: number;
	};
}

export interface FortnoxDaInboxFileSingleItem {
	"@url"?: string;
	ArchiveFileId?: string;
	Comments?: string;
	Id?: string;
	Name?: string;
	Path?: string;
	Size?: number;
}

export interface FortnoxDaInboxFolderListItem {
	"@url": string;
	Email: string;
	Files: {
		"@url"?: string;
		ArchiveFileId?: string;
		Comments?: string;
		Id?: string;
		Name?: string;
		Path?: string;
		Size?: number;
	}[];
	Folders: {
		"@url": string;
		Email: string;
		Files: {
			"@url"?: string;
			ArchiveFileId?: string;
			Comments?: string;
			Id?: string;
			Name?: string;
			Path?: string;
			Size?: number;
		}[];
		Folders: unknown[];
		Id: string;
		Name: string;
	}[];
	Id: string;
	Name: string;
}

export interface FortnoxDaInboxFolderResponseWrap {
	Folder: {
		"@url"?: string;
		Email?: string;
		Files?: {
			"@url"?: string;
			ArchiveFileId?: string;
			Comments?: string;
			Id?: string;
			Name?: string;
			Path?: string;
			Size?: number;
		}[];
		Folders?: {
			"@url": string;
			Email: string;
			Files: {
				"@url"?: string;
				ArchiveFileId?: string;
				Comments?: string;
				Id?: string;
				Name?: string;
				Path?: string;
				Size?: number;
			}[];
			Folders: unknown[];
			Id: string;
			Name: string;
		}[];
		Id?: string;
		Name: string;
	};
}

export interface FortnoxDaInboxFolderSingleItem {
	"@url"?: string;
	Email?: string;
	Files?: {
		"@url"?: string;
		ArchiveFileId?: string;
		Comments?: string;
		Id?: string;
		Name?: string;
		Path?: string;
		Size?: number;
	}[];
	Folders?: {
		"@url": string;
		Email: string;
		Files: {
			"@url"?: string;
			ArchiveFileId?: string;
			Comments?: string;
			Id?: string;
			Name?: string;
			Path?: string;
			Size?: number;
		}[];
		Folders: unknown[];
		Id: string;
		Name: string;
	}[];
	Id?: string;
	Name: string;
}

export interface FortnoxDaSupplierInvoiceFileConnectionListItemWrap {
	SupplierInvoiceFileConnections: {
		"@url"?: string;
		FileId?: string;
		Name?: string;
		SupplierInvoiceNumber?: string;
		SupplierName?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxDaSupplierInvoiceFileConnectionSingleItem {
	"@url"?: string;
	FileId?: string;
	Name?: string;
	SupplierInvoiceNumber?: string;
	SupplierName?: string;
}

export interface FortnoxDaSupplierInvoiceFileConnectionSingleItemWrap {
	SupplierInvoiceFileConnection: {
		"@url"?: string;
		FileId?: string;
		Name?: string;
		SupplierInvoiceNumber?: string;
		SupplierName?: string;
	};
}

export interface FortnoxDaSupplierInvoiceFileConnectionSinglePayloadItem {
	FileId?: string;
	Name?: string;
	SupplierInvoiceNumber?: string;
	SupplierName?: string;
}

export interface FortnoxDaSupplierInvoiceFileConnectionSinglePayloadItemWrap {
	SupplierInvoiceFileConnection: {
		FileId?: string;
		Name?: string;
		SupplierInvoiceNumber?: string;
		SupplierName?: string;
	};
}

export interface FortnoxDaVoucherFileConnectionListItemWrap {
	VoucherFileConnections: {
		"@url"?: string;
		FileId: string;
		Name?: string;
		VoucherDescription?: string;
		VoucherNumber: string;
		VoucherSeries: string;
		VoucherYear?: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxDaVoucherFileConnectionSingleItem {
	"@url"?: string;
	FileId: string;
	Name?: string;
	VoucherDescription?: string;
	VoucherNumber: string;
	VoucherSeries: string;
	VoucherYear?: number;
}

export interface FortnoxDaVoucherFileConnectionSingleItemWrap {
	VoucherFileConnection: {
		"@url"?: string;
		FileId: string;
		Name?: string;
		VoucherDescription?: string;
		VoucherNumber: string;
		VoucherSeries: string;
		VoucherYear?: number;
	};
}

export interface FortnoxDaVoucherFileConnectionSinglePayloadItem {
	FileId: string;
	VoucherDescription?: string;
	VoucherNumber: string;
	VoucherSeries: string;
	VoucherYear?: number;
}

export interface FortnoxDaVoucherFileConnectionSinglePayloadItemWrap {
	VoucherFileConnection: {
		FileId: string;
		VoucherDescription?: string;
		VoucherNumber: string;
		VoucherSeries: string;
		VoucherYear?: number;
	};
}

export interface FortnoxDefaultDeliveryTypesSingleItem {
	Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
}

export interface FortnoxDefaultDeliveryTypesSinglePayloadItem {
	Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
}

export interface FortnoxDefaultTemplatesSingleItem {
	CashInvoice?: string;
	Invoice?: string;
	Offer?: string;
	Order?: string;
}

export interface FortnoxDefaultTemplatesSinglePayloadItem {
	CashInvoice?: string;
	Invoice?: string;
	Offer?: string;
	Order?: string;
}

export interface FortnoxDelete {
	Date?: string;
}

export interface FortnoxDeleteWrap {
	Asset: {
		Date?: string;
	};
}

export interface FortnoxDocumentEDIFieldSingleItem {
	EDIGlobalLocationNumber?: string;
	EDIGlobalLocationNumberDelivery?: string;
	EDIInvoiceExtra1?: string;
	EDIInvoiceExtra2?: string;
	EDIOurElectronicReference?: string;
	EDIStatus?: string;
	EDIYourElectronicReference?: string;
}

export interface FortnoxDocumentEDIFieldSinglePayloadItem {
	EDIGlobalLocationNumber?: string;
	EDIGlobalLocationNumberDelivery?: string;
	EDIInvoiceExtra1?: string;
	EDIInvoiceExtra2?: string;
	EDIOurElectronicReference?: string;
	EDIYourElectronicReference?: string;
}

export interface FortnoxDocumentEmailFieldSingleItem {
	EmailAddressBCC?: string;
	EmailAddressCC?: string;
	EmailAddressFrom?: string;
	EmailAddressTo?: string;
	EmailBody?: string;
	EmailSubject?: string;
}

export interface FortnoxDocumentEmailFieldSinglePayloadItem {
	EmailAddressBCC?: string;
	EmailAddressCC?: string;
	EmailAddressFrom?: string;
	EmailAddressTo?: string;
	EmailBody?: string;
	EmailSubject?: string;
}

export interface FortnoxDocumentTagListItemWrap {
	Labels: {
		Description: string;
		Id?: number;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxDocumentTagSingleItem {
	Description: string;
	Id?: number;
}

export interface FortnoxDocumentTagSingleItemWrap {
	Label: {
		Description: string;
		Id?: number;
	};
}

export interface FortnoxDocumentTagSinglePayloadItem {
	Description: string;
	Id?: number;
}

export interface FortnoxDocumentTagSinglePayloadItemWrap {
	Label: {
		Description: string;
		Id?: number;
	};
}

export interface FortnoxEUVatLimitRegulationResponseWrap {
	EUVatLimitRegulation: {
		IsOverLimit?: boolean;
		Limit?: number;
		TotalExclVat?: number;
		Year?: string;
	};
}

export interface FortnoxEUVatLimitRegulationSingleItem {
	IsOverLimit?: boolean;
	Limit?: number;
	TotalExclVat?: number;
	Year?: string;
}

export interface FortnoxErrorInformation {
	Code?: number;
	Error?: number;
	Message?: string;
}

export interface FortnoxErrorInformationWrap {
	ErrorInformation: {
		Code?: number;
		Error?: number;
		Message?: string;
	};
}

export interface FortnoxFileStorageFileSingleItem {
	"@url"?: string;
	ArchiveFileId?: string;
	Comments?: string;
	Id?: string;
	Name?: string;
	Path?: string;
	Size?: number;
}

export interface FortnoxFileStorageFolderListItem {
	"@url": string;
	Email: string;
	Files: {
		"@url"?: string;
		ArchiveFileId?: string;
		Comments?: string;
		Id?: string;
		Name?: string;
		Path?: string;
		Size?: number;
	}[];
	Folders: {
		"@url": string;
		Email: string;
		Files: {
			"@url"?: string;
			ArchiveFileId?: string;
			Comments?: string;
			Id?: string;
			Name?: string;
			Path?: string;
			Size?: number;
		}[];
		Folders: unknown[];
		Id: string;
		Name: string;
	}[];
	Id: string;
	Name: string;
}

export interface FortnoxFileStorageFolderSingleItem {
	"@url"?: string;
	Email?: string;
	Files?: {
		"@url"?: string;
		ArchiveFileId?: string;
		Comments?: string;
		Id?: string;
		Name?: string;
		Path?: string;
		Size?: number;
	}[];
	Folders?: {
		"@url": string;
		Email: string;
		Files: {
			"@url"?: string;
			ArchiveFileId?: string;
			Comments?: string;
			Id?: string;
			Name?: string;
			Path?: string;
			Size?: number;
		}[];
		Folders: unknown[];
		Id: string;
		Name: string;
	}[];
	Id?: string;
	Name: string;
}

export interface FortnoxFileStorageFolderSingleItemWrap {
	Folder: {
		"@url"?: string;
		Email?: string;
		Files?: {
			"@url"?: string;
			ArchiveFileId?: string;
			Comments?: string;
			Id?: string;
			Name?: string;
			Path?: string;
			Size?: number;
		}[];
		Folders?: {
			"@url": string;
			Email: string;
			Files: {
				"@url"?: string;
				ArchiveFileId?: string;
				Comments?: string;
				Id?: string;
				Name?: string;
				Path?: string;
				Size?: number;
			}[];
			Folders: unknown[];
			Id: string;
			Name: string;
		}[];
		Id?: string;
		Name: string;
	};
}

export interface FortnoxFileStorageFolderFileRow {
	"@url"?: string;
	ArchiveFileId?: string;
	Comments?: string;
	Id?: string;
	Name?: string;
	Path?: string;
	Size?: number;
}

export interface FortnoxFileStorageFolderFileRowWrap {
	File: {
		"@url"?: string;
		ArchiveFileId?: string;
		Comments?: string;
		Id?: string;
		Name?: string;
		Path?: string;
		Size?: number;
	};
}

export interface FortnoxItemUrlConnectionListItemWrap {
	ArticleUrlConnections: {
		"@url"?: string;
		ArticleNumber: string;
		Id?: number;
		URLConnection: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxItemUrlConnectionSingleItem {
	"@url"?: string;
	ArticleNumber: string;
	Id?: number;
	URLConnection: string;
}

export interface FortnoxItemUrlConnectionSingleItemWrap {
	ArticleUrlConnection: {
		"@url"?: string;
		ArticleNumber: string;
		Id?: number;
		URLConnection: string;
	};
}

export interface FortnoxItemUrlConnectionSinglePayloadItem {
	ArticleNumber: string;
	Id?: number;
	URLConnection: string;
}

export interface FortnoxItemUrlConnectionSinglePayloadItemWrap {
	ArticleUrlConnection: {
		ArticleNumber: string;
		Id?: number;
		URLConnection: string;
	};
}

export interface FortnoxKfBundleInstanceSingleItem {
	Revision?: number;
	SubRows?: {
		AccountNumber?: number;
		AmountInBundle?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		DocumentRow?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		};
		FixedPrice?: boolean;
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceAdjustment?: boolean;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		SalesPriceInBundle?: number;
		StockPointCode?: string;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		UserPrice?: boolean;
		VAT?: number;
		VATCode?: string;
	}[];
}

export interface FortnoxKfBundleInstanceSinglePayloadItem {
	Revision?: number;
	SubRows?: {
		AccountNumber?: number;
		AmountInBundle?: number;
		ArticleNumber?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		DocumentRow?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		};
		FixedPrice?: boolean;
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceAdjustment?: boolean;
		Project?: string;
		RowId?: number;
		SalesPriceInBundle?: number;
		StockPointCode?: string;
		Unit?: string;
		UserPrice?: boolean;
		VAT?: number;
		VATCode?: string;
	}[];
}

export interface FortnoxKfBundleSubItemInstanceSingleItem {
	AccountNumber?: number;
	AmountInBundle?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	DocumentRow?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	};
	FixedPrice?: boolean;
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	Price?: number;
	PriceAdjustment?: boolean;
	PriceExcludingVAT?: number;
	Project?: string;
	RowId?: number;
	SalesPriceInBundle?: number;
	StockPointCode?: string;
	Total?: number;
	TotalExcludingVAT?: number;
	Unit?: string;
	UserPrice?: boolean;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxKfBundleSubItemInstanceSinglePayloadItem {
	AccountNumber?: number;
	AmountInBundle?: number;
	ArticleNumber?: string;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	DocumentRow?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	};
	FixedPrice?: boolean;
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	Price?: number;
	PriceAdjustment?: boolean;
	Project?: string;
	RowId?: number;
	SalesPriceInBundle?: number;
	StockPointCode?: string;
	Unit?: string;
	UserPrice?: boolean;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxKfCustomerListItem {
	"@url"?: string;
	Active?: boolean;
	Address1?: string;
	Address2?: string;
	City?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CountryCode?: string;
	Currency?: string;
	CustomerNumber?: string;
	DefaultDeliveryTypes?: {
		Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	};
	DefaultTemplates?: {
		CashInvoice?: string;
		Invoice?: string;
		Offer?: string;
		Order?: string;
	};
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryCountryCode?: string;
	DeliveryFax?: string;
	DeliveryName?: string;
	DeliveryPhone1?: string;
	DeliveryPhone2?: string;
	DeliveryZipCode?: string;
	Email?: string;
	EmailInvoice?: string;
	EmailInvoiceBCC?: string;
	EmailInvoiceCC?: string;
	EmailOffer?: string;
	EmailOfferBCC?: string;
	EmailOfferCC?: string;
	EmailOrder?: string;
	EmailOrderBCC?: string;
	EmailOrderCC?: string;
	ExternalReference?: string;
	Fax?: string;
	GLN?: string;
	GLNDelivery?: string;
	InvoiceAdministrationFee?: number;
	InvoiceDiscount?: number;
	InvoiceFreight?: number;
	InvoiceRemark?: string;
	Name: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	Project?: string;
	SalesAccount?: number;
	ShowPriceVATIncluded?: boolean;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Type?: string;
	VATNumber?: string;
	VATType?: string;
	VisitingAddress?: string;
	VisitingCity?: string;
	VisitingCountry?: string;
	VisitingCountryCode?: string;
	VisitingZipCode?: string;
	WWW?: string;
	WayOfDelivery?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfCustomerListItemWrap {
	Customers: {
		"@url"?: string;
		Active?: boolean;
		Address1?: string;
		Address2?: string;
		City?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CountryCode?: string;
		Currency?: string;
		CustomerNumber?: string;
		DefaultDeliveryTypes?: {
			Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
			Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
			Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		};
		DefaultTemplates?: {
			CashInvoice?: string;
			Invoice?: string;
			Offer?: string;
			Order?: string;
		};
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryCountryCode?: string;
		DeliveryFax?: string;
		DeliveryName?: string;
		DeliveryPhone1?: string;
		DeliveryPhone2?: string;
		DeliveryZipCode?: string;
		Email?: string;
		EmailInvoice?: string;
		EmailInvoiceBCC?: string;
		EmailInvoiceCC?: string;
		EmailOffer?: string;
		EmailOfferBCC?: string;
		EmailOfferCC?: string;
		EmailOrder?: string;
		EmailOrderBCC?: string;
		EmailOrderCC?: string;
		ExternalReference?: string;
		Fax?: string;
		GLN?: string;
		GLNDelivery?: string;
		InvoiceAdministrationFee?: number;
		InvoiceDiscount?: number;
		InvoiceFreight?: number;
		InvoiceRemark?: string;
		Name: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		Project?: string;
		SalesAccount?: number;
		ShowPriceVATIncluded?: boolean;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Type?: string;
		VATNumber?: string;
		VATType?: string;
		VisitingAddress?: string;
		VisitingCity?: string;
		VisitingCountry?: string;
		VisitingCountryCode?: string;
		VisitingZipCode?: string;
		WWW?: string;
		WayOfDelivery?: string;
		YourReference?: string;
		ZipCode?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxKfCustomerReferenceRowRow {
	CustomerNumber?: string;
	Id?: number;
	Reference?: string;
}

export interface FortnoxKfCustomerReferenceRowRowWrap {
	CustomerReferenceRow: {
		CustomerNumber?: string;
		Id?: number;
		Reference?: string;
	};
}

export interface FortnoxKfCustomerReferenceRowSingleItem {
	CustomerNumber?: string;
	Id?: number;
	Reference?: string;
}

export interface FortnoxKfCustomerReferenceSingleItem {
	CustomerReferenceRows?: {
		CustomerNumber?: string;
		Id?: number;
		Reference?: string;
	}[];
}

export interface FortnoxKfCustomerReferenceSingleItemWrap {
	CustomerReference: {
		CustomerReferenceRows?: {
			CustomerNumber?: string;
			Id?: number;
			Reference?: string;
		}[];
	};
}

export interface FortnoxKfCustomerSingleItem {
	"@url"?: string;
	Active?: boolean;
	Address1?: string;
	Address2?: string;
	City?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CountryCode?: string;
	Currency?: string;
	CustomerNumber?: string;
	DefaultDeliveryTypes?: {
		Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	};
	DefaultTemplates?: {
		CashInvoice?: string;
		Invoice?: string;
		Offer?: string;
		Order?: string;
	};
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryCountryCode?: string;
	DeliveryFax?: string;
	DeliveryName?: string;
	DeliveryPhone1?: string;
	DeliveryPhone2?: string;
	DeliveryZipCode?: string;
	Email?: string;
	EmailInvoice?: string;
	EmailInvoiceBCC?: string;
	EmailInvoiceCC?: string;
	EmailOffer?: string;
	EmailOfferBCC?: string;
	EmailOfferCC?: string;
	EmailOrder?: string;
	EmailOrderBCC?: string;
	EmailOrderCC?: string;
	ExternalReference?: string;
	Fax?: string;
	GLN?: string;
	GLNDelivery?: string;
	InvoiceAdministrationFee?: string;
	InvoiceDiscount?: number;
	InvoiceFreight?: string;
	InvoiceRemark?: string;
	Name: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	Project?: string;
	SalesAccount?: string;
	ShowPriceVATIncluded?: boolean;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Type?: "PRIVATE" | "COMPANY";
	VATNumber?: string;
	VATType?: "SEVAT" | "SEREVERSEDVAT" | "EUREVERSEDVAT" | "EUVAT" | "EXPORT";
	VisitingAddress?: string;
	VisitingCity?: string;
	VisitingCountry?: string;
	VisitingCountryCode?: string;
	VisitingZipCode?: string;
	WWW?: string;
	WayOfDelivery?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfCustomerSingleItemWrap {
	Customer: {
		"@url"?: string;
		Active?: boolean;
		Address1?: string;
		Address2?: string;
		City?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CountryCode?: string;
		Currency?: string;
		CustomerNumber?: string;
		DefaultDeliveryTypes?: {
			Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
			Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
			Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		};
		DefaultTemplates?: {
			CashInvoice?: string;
			Invoice?: string;
			Offer?: string;
			Order?: string;
		};
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryCountryCode?: string;
		DeliveryFax?: string;
		DeliveryName?: string;
		DeliveryPhone1?: string;
		DeliveryPhone2?: string;
		DeliveryZipCode?: string;
		Email?: string;
		EmailInvoice?: string;
		EmailInvoiceBCC?: string;
		EmailInvoiceCC?: string;
		EmailOffer?: string;
		EmailOfferBCC?: string;
		EmailOfferCC?: string;
		EmailOrder?: string;
		EmailOrderBCC?: string;
		EmailOrderCC?: string;
		ExternalReference?: string;
		Fax?: string;
		GLN?: string;
		GLNDelivery?: string;
		InvoiceAdministrationFee?: string;
		InvoiceDiscount?: number;
		InvoiceFreight?: string;
		InvoiceRemark?: string;
		Name: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		Project?: string;
		SalesAccount?: string;
		ShowPriceVATIncluded?: boolean;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Type?: "PRIVATE" | "COMPANY";
		VATNumber?: string;
		VATType?: "SEVAT" | "SEREVERSEDVAT" | "EUREVERSEDVAT" | "EUVAT" | "EXPORT";
		VisitingAddress?: string;
		VisitingCity?: string;
		VisitingCountry?: string;
		VisitingCountryCode?: string;
		VisitingZipCode?: string;
		WWW?: string;
		WayOfDelivery?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxKfCustomerSinglePayloadItem {
	Active?: boolean;
	Address1?: string;
	Address2?: string;
	City?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CountryCode?: string;
	Currency?: string;
	CustomerNumber?: string;
	DefaultDeliveryTypes?: {
		Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
	};
	DefaultTemplates?: {
		CashInvoice?: string;
		Invoice?: string;
		Offer?: string;
		Order?: string;
	};
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryCountryCode?: string;
	DeliveryFax?: string;
	DeliveryName?: string;
	DeliveryPhone1?: string;
	DeliveryPhone2?: string;
	DeliveryZipCode?: string;
	Email?: string;
	EmailInvoice?: string;
	EmailInvoiceBCC?: string;
	EmailInvoiceCC?: string;
	EmailOffer?: string;
	EmailOfferBCC?: string;
	EmailOfferCC?: string;
	EmailOrder?: string;
	EmailOrderBCC?: string;
	EmailOrderCC?: string;
	ExternalReference?: string;
	Fax?: string;
	GLN?: string;
	GLNDelivery?: string;
	InvoiceAdministrationFee?: string;
	InvoiceDiscount?: number;
	InvoiceFreight?: string;
	InvoiceRemark?: string;
	Name: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	Project?: string;
	SalesAccount?: string;
	ShowPriceVATIncluded?: boolean;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Type?: "PRIVATE" | "COMPANY";
	VATNumber?: string;
	VATType?: "SEVAT" | "SEREVERSEDVAT" | "EUREVERSEDVAT" | "EUVAT" | "EXPORT";
	VisitingAddress?: string;
	VisitingCity?: string;
	VisitingCountry?: string;
	VisitingCountryCode?: string;
	VisitingZipCode?: string;
	WWW?: string;
	WayOfDelivery?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfCustomerSinglePayloadItemWrap {
	Customer: {
		Active?: boolean;
		Address1?: string;
		Address2?: string;
		City?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CountryCode?: string;
		Currency?: string;
		CustomerNumber?: string;
		DefaultDeliveryTypes?: {
			Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE";
			Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE";
			Order?: "PRINT" | "EMAIL" | "PRINTSERVICE";
		};
		DefaultTemplates?: {
			CashInvoice?: string;
			Invoice?: string;
			Offer?: string;
			Order?: string;
		};
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryCountryCode?: string;
		DeliveryFax?: string;
		DeliveryName?: string;
		DeliveryPhone1?: string;
		DeliveryPhone2?: string;
		DeliveryZipCode?: string;
		Email?: string;
		EmailInvoice?: string;
		EmailInvoiceBCC?: string;
		EmailInvoiceCC?: string;
		EmailOffer?: string;
		EmailOfferBCC?: string;
		EmailOfferCC?: string;
		EmailOrder?: string;
		EmailOrderBCC?: string;
		EmailOrderCC?: string;
		ExternalReference?: string;
		Fax?: string;
		GLN?: string;
		GLNDelivery?: string;
		InvoiceAdministrationFee?: string;
		InvoiceDiscount?: number;
		InvoiceFreight?: string;
		InvoiceRemark?: string;
		Name: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		Project?: string;
		SalesAccount?: string;
		ShowPriceVATIncluded?: boolean;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Type?: "PRIVATE" | "COMPANY";
		VATNumber?: string;
		VATType?: "SEVAT" | "SEREVERSEDVAT" | "EUREVERSEDVAT" | "EUVAT" | "EXPORT";
		VisitingAddress?: string;
		VisitingCity?: string;
		VisitingCountry?: string;
		VisitingCountryCode?: string;
		VisitingZipCode?: string;
		WWW?: string;
		WayOfDelivery?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxKfInvoiceAccrualListItem {
	"@url"?: string;
	AccrualAccount?: number;
	Description: string;
	EndDate?: string;
	InvoiceAccrualRows?: {
		Account: number;
		CostCenter?: string;
		Credit?: number;
		Debit?: number;
		Project?: string;
		TransactionInformation?: string;
	}[];
	InvoiceNumber: number;
	Period?:
		| "MONTHLY"
		| "BIMONTHLY"
		| "QUARTERLY"
		| "SEMIANNUALLY"
		| "ANNUALLY"
		| "1_MONTHS"
		| "2_MONTHS"
		| "3_MONTHS"
		| "6_MONTHS"
		| "12_MONTHS";
	RevenueAccount?: number;
	StartDate?: string;
	Times?: number;
	Total?: number;
	VATIncluded?: boolean;
}

export interface FortnoxKfInvoiceAccrualListItemWrap {
	InvoiceAccruals: {
		"@url"?: string;
		AccrualAccount?: number;
		Description: string;
		EndDate?: string;
		InvoiceAccrualRows?: {
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[];
		InvoiceNumber: number;
		Period?:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY"
			| "1_MONTHS"
			| "2_MONTHS"
			| "3_MONTHS"
			| "6_MONTHS"
			| "12_MONTHS";
		RevenueAccount?: number;
		StartDate?: string;
		Times?: number;
		Total?: number;
		VATIncluded?: boolean;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxKfInvoiceAccrualSingleItem {
	"@url"?: string;
	AccrualAccount: number;
	Description: string;
	EndDate: string;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	InvoiceAccrualRows: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[],
	];
	InvoiceNumber: number;
	Period?:
		| "MONTHLY"
		| "BIMONTHLY"
		| "QUARTERLY"
		| "SEMIANNUALLY"
		| "ANNUALLY"
		| "1_MONTHS"
		| "2_MONTHS"
		| "3_MONTHS"
		| "6_MONTHS"
		| "12_MONTHS";
	RevenueAccount: number;
	StartDate: string;
	Times?: number;
	Total: number;
	VATIncluded?: boolean;
}

export interface FortnoxKfInvoiceAccrualSingleItemWrap {
	InvoiceAccrual: {
		"@url"?: string;
		AccrualAccount: number;
		Description: string;
		EndDate: string;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		InvoiceAccrualRows: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			}[],
		];
		InvoiceNumber: number;
		Period?:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY"
			| "1_MONTHS"
			| "2_MONTHS"
			| "3_MONTHS"
			| "6_MONTHS"
			| "12_MONTHS";
		RevenueAccount: number;
		StartDate: string;
		Times?: number;
		Total: number;
		VATIncluded?: boolean;
	};
}

export interface FortnoxKfInvoiceAccrualSinglePayloadItem {
	AccrualAccount: number;
	Description: string;
	EndDate: string;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	InvoiceAccrualRows: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[],
	];
	InvoiceNumber: number;
	Period?:
		| "MONTHLY"
		| "BIMONTHLY"
		| "QUARTERLY"
		| "SEMIANNUALLY"
		| "ANNUALLY"
		| "1_MONTHS"
		| "2_MONTHS"
		| "3_MONTHS"
		| "6_MONTHS"
		| "12_MONTHS";
	RevenueAccount: number;
	StartDate: string;
	Times?: number;
	Total: number;
	VATIncluded?: boolean;
}

export interface FortnoxKfInvoiceAccrualSinglePayloadItemWrap {
	InvoiceAccrual: {
		AccrualAccount: number;
		Description: string;
		EndDate: string;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		InvoiceAccrualRows: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			}[],
		];
		InvoiceNumber: number;
		Period?:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY"
			| "1_MONTHS"
			| "2_MONTHS"
			| "3_MONTHS"
			| "6_MONTHS"
			| "12_MONTHS";
		RevenueAccount: number;
		StartDate: string;
		Times?: number;
		Total: number;
		VATIncluded?: boolean;
	};
}

export interface FortnoxKfInvoiceListItem {
	"@url": string;
	"@urlTaxReductionList": string;
	AccountingMethod: string;
	Address1: string;
	Address2: string;
	AdministrationFee: number;
	AdministrationFeeVAT: number;
	Balance: number;
	BasisTaxReduction: number;
	Booked: boolean;
	Cancelled: boolean;
	City: string;
	Comments: string;
	ContractReference: string;
	ContributionPercent: number;
	ContributionValue: number;
	CostCenter: string;
	Country: string;
	Credit: string;
	CreditInvoiceReference: string;
	Currency: string;
	CurrencyRate: number;
	CurrencyUnit: number;
	CustomerName: string;
	CustomerNumber: string;
	DeliveryAddress1: string;
	DeliveryAddress2: string;
	DeliveryCity: string;
	DeliveryCountry: string;
	DeliveryDate: string;
	DeliveryName: string;
	DeliveryZipCode: string;
	DocumentNumber: string;
	DueDate: string;
	EDIInformation: {
		EDIGlobalLocationNumber?: string;
		EDIGlobalLocationNumberDelivery?: string;
		EDIInvoiceExtra1?: string;
		EDIInvoiceExtra2?: string;
		EDIOurElectronicReference?: string;
		EDIStatus?: string;
		EDIYourElectronicReference?: string;
	};
	EUQuarterlyReport: boolean;
	EmailInformation: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1: string;
	ExternalInvoiceReference2: string;
	FinalPayDate: string;
	Freight: number;
	FreightVAT: number;
	Gross: number;
	HouseWork: boolean;
	InvoiceDate: string;
	InvoicePeriodEnd: string;
	InvoicePeriodStart: string;
	InvoiceReference: string;
	InvoiceRows: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoiceType:
		| "INVOICE"
		| "AGREEMENTINVOICE"
		| "INTRESTINVOICE"
		| "SUMMARYINVOICE"
		| "CASHINVOICE";
	Labels: {
		Id?: number;
	}[];
	Language: string;
	LastRemindDate: string;
	Net: number;
	NotCompleted: boolean;
	NoxFinans: boolean;
	OCR: string;
	OfferReference: string;
	OrderReference: string;
	OrganisationNumber: string;
	OurReference: string;
	OutboundDate: string;
	PaymentWay: string;
	Phone1: string;
	Phone2: string;
	PriceList: string;
	PrintTemplate: string;
	Project: string;
	Remarks: string;
	Reminders: number;
	RoundOff: number;
	Sent: boolean;
	TaxReduction: number;
	TaxReductionType: string;
	TermsOfDelivery: string;
	TermsOfPayment: string;
	TimeBasisReference: string;
	Total: number;
	TotalToPay: number;
	TotalVAT: number;
	VATIncluded: boolean;
	VoucherNumber: number;
	VoucherSeries: string;
	VoucherYear: number;
	WarehouseReady: boolean;
	WayOfDelivery: string;
	YourOrderNumber: string;
	YourReference: string;
	ZipCode: string;
}

export interface FortnoxKfInvoiceListResponseWrap {
	Invoices: {
		"@url": string;
		"@urlTaxReductionList": string;
		AccountingMethod: string;
		Address1: string;
		Address2: string;
		AdministrationFee: number;
		AdministrationFeeVAT: number;
		Balance: number;
		BasisTaxReduction: number;
		Booked: boolean;
		Cancelled: boolean;
		City: string;
		Comments: string;
		ContractReference: string;
		ContributionPercent: number;
		ContributionValue: number;
		CostCenter: string;
		Country: string;
		Credit: string;
		CreditInvoiceReference: string;
		Currency: string;
		CurrencyRate: number;
		CurrencyUnit: number;
		CustomerName: string;
		CustomerNumber: string;
		DeliveryAddress1: string;
		DeliveryAddress2: string;
		DeliveryCity: string;
		DeliveryCountry: string;
		DeliveryDate: string;
		DeliveryName: string;
		DeliveryZipCode: string;
		DocumentNumber: string;
		DueDate: string;
		EDIInformation: {
			EDIGlobalLocationNumber?: string;
			EDIGlobalLocationNumberDelivery?: string;
			EDIInvoiceExtra1?: string;
			EDIInvoiceExtra2?: string;
			EDIOurElectronicReference?: string;
			EDIStatus?: string;
			EDIYourElectronicReference?: string;
		};
		EUQuarterlyReport: boolean;
		EmailInformation: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1: string;
		ExternalInvoiceReference2: string;
		FinalPayDate: string;
		Freight: number;
		FreightVAT: number;
		Gross: number;
		HouseWork: boolean;
		InvoiceDate: string;
		InvoicePeriodEnd: string;
		InvoicePeriodStart: string;
		InvoiceReference: string;
		InvoiceRows: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoiceType:
			| "INVOICE"
			| "AGREEMENTINVOICE"
			| "INTRESTINVOICE"
			| "SUMMARYINVOICE"
			| "CASHINVOICE";
		Labels: {
			Id?: number;
		}[];
		Language: string;
		LastRemindDate: string;
		Net: number;
		NotCompleted: boolean;
		NoxFinans: boolean;
		OCR: string;
		OfferReference: string;
		OrderReference: string;
		OrganisationNumber: string;
		OurReference: string;
		OutboundDate: string;
		PaymentWay: string;
		Phone1: string;
		Phone2: string;
		PriceList: string;
		PrintTemplate: string;
		Project: string;
		Remarks: string;
		Reminders: number;
		RoundOff: number;
		Sent: boolean;
		TaxReduction: number;
		TaxReductionType: string;
		TermsOfDelivery: string;
		TermsOfPayment: string;
		TimeBasisReference: string;
		Total: number;
		TotalToPay: number;
		TotalVAT: number;
		VATIncluded: boolean;
		VoucherNumber: number;
		VoucherSeries: string;
		VoucherYear: number;
		WarehouseReady: boolean;
		WayOfDelivery: string;
		YourOrderNumber: string;
		YourReference: string;
		ZipCode: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxKfInvoicePaymentListItem {
	"@url"?: string;
	Amount?: number;
	AmountCurrency?: number;
	Booked?: boolean;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	InvoiceCustomerName?: string;
	InvoiceCustomerNumber?: string;
	InvoiceDueDate?: string;
	InvoiceNumber: number;
	InvoiceOCR?: string;
	InvoiceTotal?: number;
	ModeOfPayment?: string;
	ModeOfPaymentAccount?: string;
	Number?: string;
	PaymentDate?: string;
	Source?: string;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WriteOffExist?: boolean;
	WriteOffs?: {
		AccountNumber?: number;
		Amount?: number;
		CostCenter?: string;
		Currency?: string;
		Description?: string;
		Project?: string;
		TransactionInformation?: string;
	}[];
}

export interface FortnoxKfInvoicePaymentListItemWrap {
	InvoicePayments: {
		"@url"?: string;
		Amount?: number;
		AmountCurrency?: number;
		Booked?: boolean;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		InvoiceCustomerName?: string;
		InvoiceCustomerNumber?: string;
		InvoiceDueDate?: string;
		InvoiceNumber: number;
		InvoiceOCR?: string;
		InvoiceTotal?: number;
		ModeOfPayment?: string;
		ModeOfPaymentAccount?: string;
		Number?: string;
		PaymentDate?: string;
		Source?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WriteOffExist?: boolean;
		WriteOffs?: {
			AccountNumber?: number;
			Amount?: number;
			CostCenter?: string;
			Currency?: string;
			Description?: string;
			Project?: string;
			TransactionInformation?: string;
		}[];
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxKfInvoicePaymentSingleItem {
	"@url"?: string;
	Amount?: number;
	AmountCurrency?: number;
	Booked?: boolean;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	InvoiceCustomerName?: string;
	InvoiceCustomerNumber?: string;
	InvoiceDueDate?: string;
	InvoiceNumber: number;
	InvoiceOCR?: string;
	InvoiceTotal?: string;
	ModeOfPayment?: string;
	ModeOfPaymentAccount?: number;
	Number?: string;
	PaymentDate?: string;
	Source?: string;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WriteOffs?: {
		AccountNumber?: number;
		Amount?: number;
		CostCenter?: string;
		Currency?: string;
		Description?: string;
		Project?: string;
		TransactionInformation?: string;
	}[];
}

export interface FortnoxKfInvoicePaymentSingleItemWrap {
	InvoicePayment: {
		"@url"?: string;
		Amount?: number;
		AmountCurrency?: number;
		Booked?: boolean;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		InvoiceCustomerName?: string;
		InvoiceCustomerNumber?: string;
		InvoiceDueDate?: string;
		InvoiceNumber: number;
		InvoiceOCR?: string;
		InvoiceTotal?: string;
		ModeOfPayment?: string;
		ModeOfPaymentAccount?: number;
		Number?: string;
		PaymentDate?: string;
		Source?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WriteOffs?: {
			AccountNumber?: number;
			Amount?: number;
			CostCenter?: string;
			Currency?: string;
			Description?: string;
			Project?: string;
			TransactionInformation?: string;
		}[];
	};
}

export interface FortnoxKfInvoicePaymentSinglePayloadItem {
	Amount?: number;
	AmountCurrency?: number;
	Booked?: boolean;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	InvoiceCustomerName?: string;
	InvoiceCustomerNumber?: string;
	InvoiceDueDate?: string;
	InvoiceNumber: number;
	InvoiceOCR?: string;
	InvoiceTotal?: string;
	ModeOfPayment?: string;
	ModeOfPaymentAccount?: number;
	Number?: string;
	PaymentDate?: string;
	Source?: string;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WriteOffs?: {
		AccountNumber?: number;
		Amount?: number;
		CostCenter?: string;
		Currency?: string;
		Description?: string;
		Project?: string;
		TransactionInformation?: string;
	}[];
}

export interface FortnoxKfInvoicePaymentSinglePayloadItemWrap {
	InvoicePayment: {
		Amount?: number;
		AmountCurrency?: number;
		Booked?: boolean;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		InvoiceCustomerName?: string;
		InvoiceCustomerNumber?: string;
		InvoiceDueDate?: string;
		InvoiceNumber: number;
		InvoiceOCR?: string;
		InvoiceTotal?: string;
		ModeOfPayment?: string;
		ModeOfPaymentAccount?: number;
		Number?: string;
		PaymentDate?: string;
		Source?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WriteOffs?: {
			AccountNumber?: number;
			Amount?: number;
			CostCenter?: string;
			Currency?: string;
			Description?: string;
			Project?: string;
			TransactionInformation?: string;
		}[];
	};
}

export interface FortnoxKfInvoiceResponseWrap {
	Invoice: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		AccountingMethod?: "ACCRUAL" | "CASH";
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		Balance?: number;
		BasisTaxReduction?: number;
		Booked?: boolean;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContractReference?: number;
		ContributionPercent?: number;
		ContributionValue?: number;
		CostCenter?: string;
		Country?: string;
		Credit?: string;
		CreditInvoiceReference?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		DueDate?: string;
		EDIInformation?: {
			EDIGlobalLocationNumber?: string;
			EDIGlobalLocationNumberDelivery?: string;
			EDIInvoiceExtra1?: string;
			EDIInvoiceExtra2?: string;
			EDIOurElectronicReference?: string;
			EDIStatus?: string;
			EDIYourElectronicReference?: string;
		};
		EUQuarterlyReport?: boolean;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		FinalPayDate?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceDate?: string;
		InvoicePeriodEnd?: string;
		InvoicePeriodReference?: string;
		InvoicePeriodStart?: string;
		InvoiceReference?: string;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoiceType?:
			| "INVOICE"
			| "AGREEMENTINVOICE"
			| "INTRESTINVOICE"
			| "SUMMARYINVOICE"
			| "CASHINVOICE";
		Labels?: {
			Id?: number;
		}[];
		Language?: "SV" | "EN";
		LastRemindDate?: string;
		Net?: number;
		NotCompleted?: boolean;
		NoxFinans?: boolean;
		OCR?: string;
		OfferReference?: string;
		OrderReference?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		PaymentWay?: "CASH" | "CARD" | "AG";
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		Reminders?: number;
		RoundOff?: number;
		Sent?: boolean;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		TimeBasisReference?: number;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WarehouseReady?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxKfInvoiceRowSingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	Price?: number;
	PriceExcludingVAT?: number;
	Project?: string;
	RowId?: number;
	StockPointCode?: string;
	Total?: number;
	TotalExcludingVAT?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxKfInvoiceRowSinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	Price?: number;
	Project?: string;
	RowId?: number;
	StockPointCode?: string;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxKfInvoiceRowV2SingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Bundle?: {
		Revision?: number;
		SubRows?: {
			AccountNumber?: number;
			AmountInBundle?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			DocumentRow?: {
				AccountNumber?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				Cost?: number;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				Price?: number;
				PriceExcludingVAT?: number;
				Project?: string;
				RowId?: number;
				StockPointCode?: string;
				Total?: number;
				TotalExcludingVAT?: number;
				Unit?: string;
				VAT?: number;
				VATCode?: string;
			};
			FixedPrice?: boolean;
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceAdjustment?: boolean;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			SalesPriceInBundle?: number;
			StockPointCode?: string;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			UserPrice?: boolean;
			VAT?: number;
			VATCode?: string;
		}[];
	};
	ContributionPercent?: string;
	ContributionValue?: string;
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	Price?: number;
	PriceExcludingVAT?: number;
	Project?: string;
	RowId?: number;
	StockPointCode?: string;
	Total?: number;
	TotalExcludingVAT?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxKfInvoiceRowV2SinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Bundle?: {
		Revision?: number;
		SubRows?: {
			AccountNumber?: number;
			AmountInBundle?: number;
			ArticleNumber?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			DocumentRow?: {
				AccountNumber?: number;
				ArticleNumber?: string;
				Cost?: number;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				Price?: number;
				Project?: string;
				RowId?: number;
				StockPointCode?: string;
				Unit?: string;
				VAT?: number;
				VATCode?: string;
			};
			FixedPrice?: boolean;
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceAdjustment?: boolean;
			Project?: string;
			RowId?: number;
			SalesPriceInBundle?: number;
			StockPointCode?: string;
			Unit?: string;
			UserPrice?: boolean;
			VAT?: number;
			VATCode?: string;
		}[];
	};
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	Price?: number;
	Project?: string;
	RowId?: number;
	StockPointCode?: string;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxKfInvoiceSingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	AccountingMethod?: "ACCRUAL" | "CASH";
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	Balance?: number;
	BasisTaxReduction?: number;
	Booked?: boolean;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContractReference?: number;
	ContributionPercent?: number;
	ContributionValue?: number;
	CostCenter?: string;
	Country?: string;
	Credit?: string;
	CreditInvoiceReference?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	DueDate?: string;
	EDIInformation?: {
		EDIGlobalLocationNumber?: string;
		EDIGlobalLocationNumberDelivery?: string;
		EDIInvoiceExtra1?: string;
		EDIInvoiceExtra2?: string;
		EDIOurElectronicReference?: string;
		EDIStatus?: string;
		EDIYourElectronicReference?: string;
	};
	EUQuarterlyReport?: boolean;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	FinalPayDate?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceDate?: string;
	InvoicePeriodEnd?: string;
	InvoicePeriodReference?: string;
	InvoicePeriodStart?: string;
	InvoiceReference?: string;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoiceType?:
		| "INVOICE"
		| "AGREEMENTINVOICE"
		| "INTRESTINVOICE"
		| "SUMMARYINVOICE"
		| "CASHINVOICE";
	Labels?: {
		Id?: number;
	}[];
	Language?: "SV" | "EN";
	LastRemindDate?: string;
	Net?: number;
	NotCompleted?: boolean;
	NoxFinans?: boolean;
	OCR?: string;
	OfferReference?: string;
	OrderReference?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	PaymentWay?: "CASH" | "CARD" | "AG";
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	Reminders?: number;
	RoundOff?: number;
	Sent?: boolean;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	TimeBasisReference?: number;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WarehouseReady?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfInvoiceSinglePayloadItem {
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	City?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CreditInvoiceReference?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	DueDate?: string;
	EDIInformation?: {
		EDIGlobalLocationNumber?: string;
		EDIGlobalLocationNumberDelivery?: string;
		EDIInvoiceExtra1?: string;
		EDIInvoiceExtra2?: string;
		EDIOurElectronicReference?: string;
		EDIYourElectronicReference?: string;
	};
	EUQuarterlyReport?: boolean;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	InvoiceDate?: string;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoiceType?:
		| "INVOICE"
		| "AGREEMENTINVOICE"
		| "INTRESTINVOICE"
		| "SUMMARYINVOICE"
		| "CASHINVOICE";
	Labels?: {
		Id?: number;
	}[];
	Language?: "SV" | "EN";
	NotCompleted?: boolean;
	OCR?: string;
	OurReference?: string;
	OutboundDate?: string;
	PaymentWay?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfInvoiceSinglePayloadItemWrap {
	Invoice: {
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		City?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CreditInvoiceReference?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		DueDate?: string;
		EDIInformation?: {
			EDIGlobalLocationNumber?: string;
			EDIGlobalLocationNumberDelivery?: string;
			EDIInvoiceExtra1?: string;
			EDIInvoiceExtra2?: string;
			EDIOurElectronicReference?: string;
			EDIYourElectronicReference?: string;
		};
		EUQuarterlyReport?: boolean;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		InvoiceDate?: string;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoiceType?:
			| "INVOICE"
			| "AGREEMENTINVOICE"
			| "INTRESTINVOICE"
			| "SUMMARYINVOICE"
			| "CASHINVOICE";
		Labels?: {
			Id?: number;
		}[];
		Language?: "SV" | "EN";
		NotCompleted?: boolean;
		OCR?: string;
		OurReference?: string;
		OutboundDate?: string;
		PaymentWay?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxKfInvoiceV2ListItem {
	"@url": string;
	"@urlTaxReductionList": string;
	AccountingMethod: string;
	Address1: string;
	Address2: string;
	AdministrationFee: number;
	AdministrationFeeVAT: number;
	Balance: number;
	BasisTaxReduction: number;
	Booked: boolean;
	Cancelled: boolean;
	City: string;
	Comments: string;
	ContractReference: string;
	ContributionPercent: number;
	ContributionValue: number;
	CostCenter: string;
	Country: string;
	Credit: string;
	CreditInvoiceReference: string;
	Currency: string;
	CurrencyRate: number;
	CurrencyUnit: number;
	CustomerName: string;
	CustomerNumber: string;
	DeliveryAddress1: string;
	DeliveryAddress2: string;
	DeliveryCity: string;
	DeliveryCountry: string;
	DeliveryDate: string;
	DeliveryName: string;
	DeliveryZipCode: string;
	DocumentNumber: string;
	DueDate: string;
	EDIInformation: {
		EDIGlobalLocationNumber?: string;
		EDIGlobalLocationNumberDelivery?: string;
		EDIInvoiceExtra1?: string;
		EDIInvoiceExtra2?: string;
		EDIOurElectronicReference?: string;
		EDIStatus?: string;
		EDIYourElectronicReference?: string;
	};
	EUQuarterlyReport: boolean;
	EmailInformation: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1: string;
	ExternalInvoiceReference2: string;
	FinalPayDate: string;
	Freight: number;
	FreightVAT: number;
	Gross: number;
	HouseWork: boolean;
	InvoiceDate: string;
	InvoicePeriodEnd: string;
	InvoicePeriodStart: string;
	InvoiceReference: string;
	InvoiceRows: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					Cost?: number;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					Price?: number;
					PriceExcludingVAT?: number;
					Project?: string;
					RowId?: number;
					StockPointCode?: string;
					Total?: number;
					TotalExcludingVAT?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				Price?: number;
				PriceAdjustment?: boolean;
				PriceExcludingVAT?: number;
				Project?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				StockPointCode?: string;
				Total?: number;
				TotalExcludingVAT?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoiceType:
		| "INVOICE"
		| "AGREEMENTINVOICE"
		| "INTRESTINVOICE"
		| "SUMMARYINVOICE"
		| "CASHINVOICE";
	Labels: {
		Id?: number;
	}[];
	Language: string;
	LastRemindDate: string;
	Net: number;
	NotCompleted: boolean;
	NoxFinans: boolean;
	OCR: string;
	OfferReference: string;
	OrderReference: string;
	OrganisationNumber: string;
	OurReference: string;
	OutboundDate: string;
	PaymentWay: string;
	Phone1: string;
	Phone2: string;
	PriceList: string;
	PrintTemplate: string;
	Project: string;
	Remarks: string;
	Reminders: number;
	RoundOff: number;
	Sent: boolean;
	TaxReduction: number;
	TaxReductionType: string;
	TermsOfDelivery: string;
	TermsOfPayment: string;
	TimeBasisReference: string;
	Total: number;
	TotalToPay: number;
	TotalVAT: number;
	VATIncluded: boolean;
	VoucherNumber: number;
	VoucherSeries: string;
	VoucherYear: number;
	WarehouseReady: boolean;
	WayOfDelivery: string;
	YourOrderNumber: string;
	YourReference: string;
	ZipCode: string;
}

export interface FortnoxKfInvoiceV2ListResponseWrap {
	Invoices: {
		"@url": string;
		"@urlTaxReductionList": string;
		AccountingMethod: string;
		Address1: string;
		Address2: string;
		AdministrationFee: number;
		AdministrationFeeVAT: number;
		Balance: number;
		BasisTaxReduction: number;
		Booked: boolean;
		Cancelled: boolean;
		City: string;
		Comments: string;
		ContractReference: string;
		ContributionPercent: number;
		ContributionValue: number;
		CostCenter: string;
		Country: string;
		Credit: string;
		CreditInvoiceReference: string;
		Currency: string;
		CurrencyRate: number;
		CurrencyUnit: number;
		CustomerName: string;
		CustomerNumber: string;
		DeliveryAddress1: string;
		DeliveryAddress2: string;
		DeliveryCity: string;
		DeliveryCountry: string;
		DeliveryDate: string;
		DeliveryName: string;
		DeliveryZipCode: string;
		DocumentNumber: string;
		DueDate: string;
		EDIInformation: {
			EDIGlobalLocationNumber?: string;
			EDIGlobalLocationNumberDelivery?: string;
			EDIInvoiceExtra1?: string;
			EDIInvoiceExtra2?: string;
			EDIOurElectronicReference?: string;
			EDIStatus?: string;
			EDIYourElectronicReference?: string;
		};
		EUQuarterlyReport: boolean;
		EmailInformation: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1: string;
		ExternalInvoiceReference2: string;
		FinalPayDate: string;
		Freight: number;
		FreightVAT: number;
		Gross: number;
		HouseWork: boolean;
		InvoiceDate: string;
		InvoicePeriodEnd: string;
		InvoicePeriodStart: string;
		InvoiceReference: string;
		InvoiceRows: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						Cost?: number;
						CostCenter?: string;
						DeliveredQuantity?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "MAJORAPPLIANCEREPAIR"
							| "MOVINGSERVICES"
							| "ITSERVICES"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "OTHERCOSTS"
							| "SOLARCELLS"
							| "STORAGESELFPRODUCEDELECTRICITY"
							| "CHARGINGSTATIONELECTRICVEHICLE"
							| "HOMEMAINTENANCE"
							| "FURNISHING"
							| "TRANSPORTATIONSERVICES"
							| "WASHINGANDCAREOFCLOTHING";
						Price?: number;
						PriceExcludingVAT?: number;
						Project?: string;
						RowId?: number;
						StockPointCode?: string;
						Total?: number;
						TotalExcludingVAT?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					Price?: number;
					PriceAdjustment?: boolean;
					PriceExcludingVAT?: number;
					Project?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					StockPointCode?: string;
					Total?: number;
					TotalExcludingVAT?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoiceType:
			| "INVOICE"
			| "AGREEMENTINVOICE"
			| "INTRESTINVOICE"
			| "SUMMARYINVOICE"
			| "CASHINVOICE";
		Labels: {
			Id?: number;
		}[];
		Language: string;
		LastRemindDate: string;
		Net: number;
		NotCompleted: boolean;
		NoxFinans: boolean;
		OCR: string;
		OfferReference: string;
		OrderReference: string;
		OrganisationNumber: string;
		OurReference: string;
		OutboundDate: string;
		PaymentWay: string;
		Phone1: string;
		Phone2: string;
		PriceList: string;
		PrintTemplate: string;
		Project: string;
		Remarks: string;
		Reminders: number;
		RoundOff: number;
		Sent: boolean;
		TaxReduction: number;
		TaxReductionType: string;
		TermsOfDelivery: string;
		TermsOfPayment: string;
		TimeBasisReference: string;
		Total: number;
		TotalToPay: number;
		TotalVAT: number;
		VATIncluded: boolean;
		VoucherNumber: number;
		VoucherSeries: string;
		VoucherYear: number;
		WarehouseReady: boolean;
		WayOfDelivery: string;
		YourOrderNumber: string;
		YourReference: string;
		ZipCode: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxKfInvoiceV2ResponseWrap {
	Invoice: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		AccountingMethod?: "ACCRUAL" | "CASH";
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		Balance?: number;
		BasisTaxReduction?: number;
		Booked?: boolean;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContractReference?: number;
		ContributionPercent?: number;
		ContributionValue?: number;
		CostCenter?: string;
		Country?: string;
		Credit?: string;
		CreditInvoiceReference?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		DueDate?: string;
		EDIInformation?: {
			EDIGlobalLocationNumber?: string;
			EDIGlobalLocationNumberDelivery?: string;
			EDIInvoiceExtra1?: string;
			EDIInvoiceExtra2?: string;
			EDIOurElectronicReference?: string;
			EDIStatus?: string;
			EDIYourElectronicReference?: string;
		};
		EUQuarterlyReport?: boolean;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		FinalPayDate?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceDate?: string;
		InvoicePeriodEnd?: string;
		InvoicePeriodReference?: string;
		InvoicePeriodStart?: string;
		InvoiceReference?: string;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						Cost?: number;
						CostCenter?: string;
						DeliveredQuantity?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "MAJORAPPLIANCEREPAIR"
							| "MOVINGSERVICES"
							| "ITSERVICES"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "OTHERCOSTS"
							| "SOLARCELLS"
							| "STORAGESELFPRODUCEDELECTRICITY"
							| "CHARGINGSTATIONELECTRICVEHICLE"
							| "HOMEMAINTENANCE"
							| "FURNISHING"
							| "TRANSPORTATIONSERVICES"
							| "WASHINGANDCAREOFCLOTHING";
						Price?: number;
						PriceExcludingVAT?: number;
						Project?: string;
						RowId?: number;
						StockPointCode?: string;
						Total?: number;
						TotalExcludingVAT?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					Price?: number;
					PriceAdjustment?: boolean;
					PriceExcludingVAT?: number;
					Project?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					StockPointCode?: string;
					Total?: number;
					TotalExcludingVAT?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			PriceExcludingVAT?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Total?: number;
			TotalExcludingVAT?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoiceType?:
			| "INVOICE"
			| "AGREEMENTINVOICE"
			| "INTRESTINVOICE"
			| "SUMMARYINVOICE"
			| "CASHINVOICE";
		Labels?: {
			Id?: number;
		}[];
		Language?: "SV" | "EN";
		LastRemindDate?: string;
		Net?: number;
		NotCompleted?: boolean;
		NoxFinans?: boolean;
		OCR?: string;
		OfferReference?: string;
		OrderReference?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		PaymentWay?: "CASH" | "CARD" | "AG";
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		Reminders?: number;
		RoundOff?: number;
		Sent?: boolean;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		TimeBasisReference?: number;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WarehouseReady?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxKfInvoiceV2SingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	AccountingMethod?: "ACCRUAL" | "CASH";
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	Balance?: number;
	BasisTaxReduction?: number;
	Booked?: boolean;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContractReference?: number;
	ContributionPercent?: number;
	ContributionValue?: number;
	CostCenter?: string;
	Country?: string;
	Credit?: string;
	CreditInvoiceReference?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	DueDate?: string;
	EDIInformation?: {
		EDIGlobalLocationNumber?: string;
		EDIGlobalLocationNumberDelivery?: string;
		EDIInvoiceExtra1?: string;
		EDIInvoiceExtra2?: string;
		EDIOurElectronicReference?: string;
		EDIStatus?: string;
		EDIYourElectronicReference?: string;
	};
	EUQuarterlyReport?: boolean;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	FinalPayDate?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceDate?: string;
	InvoicePeriodEnd?: string;
	InvoicePeriodReference?: string;
	InvoicePeriodStart?: string;
	InvoiceReference?: string;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					Cost?: number;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					Price?: number;
					PriceExcludingVAT?: number;
					Project?: string;
					RowId?: number;
					StockPointCode?: string;
					Total?: number;
					TotalExcludingVAT?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				Price?: number;
				PriceAdjustment?: boolean;
				PriceExcludingVAT?: number;
				Project?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				StockPointCode?: string;
				Total?: number;
				TotalExcludingVAT?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		PriceExcludingVAT?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Total?: number;
		TotalExcludingVAT?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoiceType?:
		| "INVOICE"
		| "AGREEMENTINVOICE"
		| "INTRESTINVOICE"
		| "SUMMARYINVOICE"
		| "CASHINVOICE";
	Labels?: {
		Id?: number;
	}[];
	Language?: "SV" | "EN";
	LastRemindDate?: string;
	Net?: number;
	NotCompleted?: boolean;
	NoxFinans?: boolean;
	OCR?: string;
	OfferReference?: string;
	OrderReference?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	PaymentWay?: "CASH" | "CARD" | "AG";
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	Reminders?: number;
	RoundOff?: number;
	Sent?: boolean;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	TimeBasisReference?: number;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WarehouseReady?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfInvoiceV2SinglePayloadItem {
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	City?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CreditInvoiceReference?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	DueDate?: string;
	EDIInformation?: {
		EDIGlobalLocationNumber?: string;
		EDIGlobalLocationNumberDelivery?: string;
		EDIInvoiceExtra1?: string;
		EDIInvoiceExtra2?: string;
		EDIOurElectronicReference?: string;
		EDIYourElectronicReference?: string;
	};
	EUQuarterlyReport?: boolean;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	InvoiceDate?: string;
	InvoiceRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					Cost?: number;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					Price?: number;
					Project?: string;
					RowId?: number;
					StockPointCode?: string;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				StockPointCode?: string;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		Price?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	InvoiceType?:
		| "INVOICE"
		| "AGREEMENTINVOICE"
		| "INTRESTINVOICE"
		| "SUMMARYINVOICE"
		| "CASHINVOICE";
	Labels?: {
		Id?: number;
	}[];
	Language?: "SV" | "EN";
	NotCompleted?: boolean;
	OCR?: string;
	OurReference?: string;
	OutboundDate?: string;
	PaymentWay?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxKfInvoiceV2SinglePayloadItemWrap {
	Invoice: {
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		City?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CreditInvoiceReference?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		DueDate?: string;
		EDIInformation?: {
			EDIGlobalLocationNumber?: string;
			EDIGlobalLocationNumberDelivery?: string;
			EDIInvoiceExtra1?: string;
			EDIInvoiceExtra2?: string;
			EDIOurElectronicReference?: string;
			EDIYourElectronicReference?: string;
		};
		EUQuarterlyReport?: boolean;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		InvoiceDate?: string;
		InvoiceRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						Cost?: number;
						CostCenter?: string;
						DeliveredQuantity?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "MAJORAPPLIANCEREPAIR"
							| "MOVINGSERVICES"
							| "ITSERVICES"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "OTHERCOSTS"
							| "SOLARCELLS"
							| "STORAGESELFPRODUCEDELECTRICITY"
							| "CHARGINGSTATIONELECTRICVEHICLE"
							| "HOMEMAINTENANCE"
							| "FURNISHING"
							| "TRANSPORTATIONSERVICES"
							| "WASHINGANDCAREOFCLOTHING";
						Price?: number;
						Project?: string;
						RowId?: number;
						StockPointCode?: string;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					StockPointCode?: string;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			Price?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		InvoiceType?:
			| "INVOICE"
			| "AGREEMENTINVOICE"
			| "INTRESTINVOICE"
			| "SUMMARYINVOICE"
			| "CASHINVOICE";
		Labels?: {
			Id?: number;
		}[];
		Language?: "SV" | "EN";
		NotCompleted?: boolean;
		OCR?: string;
		OurReference?: string;
		OutboundDate?: string;
		PaymentWay?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxKfNoxInvoiceCreatePayload {
	BalanceIncludeFees?: number;
	BalanceIncludeFeesCurrency?: number;
	CurrentCapitalBalance?: number;
	CurrentCapitalBalanceCurrency?: number;
	InvoiceDocumentURL?: string;
	InvoiceNumber: string;
	NextEvent?: string;
	NextEventDate?: string;
	OCRNumber?: string;
	SendMethod: string;
	Service: string;
	ServiceName?: string;
	Status?: string;
}

export interface FortnoxKfNoxInvoiceCreatePayloadWrap {
	NoxFinansInvoice: {
		BalanceIncludeFees?: number;
		BalanceIncludeFeesCurrency?: number;
		CurrentCapitalBalance?: number;
		CurrentCapitalBalanceCurrency?: number;
		InvoiceDocumentURL?: string;
		InvoiceNumber: string;
		NextEvent?: string;
		NextEventDate?: string;
		OCRNumber?: string;
		SendMethod: string;
		Service: string;
		ServiceName?: string;
		Status?: string;
	};
}

export interface FortnoxKfNoxInvoiceSingleItem {
	"@url": string;
	BalanceIncludeFees: number;
	BalanceIncludeFeesCurrency: number;
	CurrentCapitalBalance: number;
	CurrentCapitalBalanceCurrency: number;
	InvoiceDocumentURL?: string;
	InvoiceNumber: number;
	NextEvent: string;
	NextEventDate: string;
	OCRNumber: string;
	Service: string;
	ServiceName: string;
	Status: string;
}

export interface FortnoxKfNoxInvoiceSingleItemWrap {
	NoxFinansInvoice: {
		"@url": string;
		BalanceIncludeFees: number;
		BalanceIncludeFeesCurrency: number;
		CurrentCapitalBalance: number;
		CurrentCapitalBalanceCurrency: number;
		InvoiceDocumentURL?: string;
		InvoiceNumber: number;
		NextEvent: string;
		NextEventDate: string;
		OCRNumber: string;
		Service: string;
		ServiceName: string;
		Status: string;
	};
}

export interface FortnoxKfNoxInvoiceUpdateAndPausePayload {
	PausedUntilDate: string;
}

export interface FortnoxKfNoxInvoiceUpdateAndPausePayloadWrap {
	NoxFinansInvoice: {
		PausedUntilDate: string;
	};
}

export interface FortnoxKfNoxInvoiceUpdateAndRepostPaymentPayload {
	BookkeepPaymentInFortnox: boolean;
	ClientTakesFees: boolean;
	PaymentAmount: number;
	PaymentMethodAccount: number;
	PaymentMethodCode: string;
	ReportToFinance: boolean;
}

export interface FortnoxKfNoxInvoiceUpdateAndRepostPaymentPayloadWrap {
	NoxFinansInvoice: {
		BookkeepPaymentInFortnox: boolean;
		ClientTakesFees: boolean;
		PaymentAmount: number;
		PaymentMethodAccount: number;
		PaymentMethodCode: string;
		ReportToFinance: boolean;
	};
}

export interface FortnoxKfNoxInvoiceUpdateAndStopPayload {
	BalanceIncludeFees?: number;
	BalanceIncludeFeesCurrency?: number;
	CurrentCapitalBalance?: number;
	CurrentCapitalBalanceCurrency?: number;
	InvoiceDocumentURL?: string;
	InvoiceNumber?: number;
	NextEvent?: string;
	NextEventDate?: string;
	OCRNumber?: string;
	Service?: string;
	ServiceName?: string;
	Status?: string;
}

export interface FortnoxKfNoxInvoiceUpdateAndStopPayloadWrap {
	NoxFinansInvoice: {
		BalanceIncludeFees?: number;
		BalanceIncludeFeesCurrency?: number;
		CurrentCapitalBalance?: number;
		CurrentCapitalBalanceCurrency?: number;
		InvoiceDocumentURL?: string;
		InvoiceNumber?: number;
		NextEvent?: string;
		NextEventDate?: string;
		OCRNumber?: string;
		Service?: string;
		ServiceName?: string;
		Status?: string;
	};
}

export interface FortnoxKfNoxInvoiceUpdateAndTakeFeesPayload {
	BalanceIncludeFees?: number;
	BalanceIncludeFeesCurrency?: number;
	CurrentCapitalBalance?: number;
	CurrentCapitalBalanceCurrency?: number;
	InvoiceDocumentURL?: string;
	InvoiceNumber?: number;
	NextEvent?: string;
	NextEventDate?: string;
	OCRNumber?: string;
	Service?: string;
	ServiceName?: string;
	Status?: string;
}

export interface FortnoxKfNoxInvoiceUpdateAndTakeFeesPayloadWrap {
	NoxFinansInvoice: {
		BalanceIncludeFees?: number;
		BalanceIncludeFeesCurrency?: number;
		CurrentCapitalBalance?: number;
		CurrentCapitalBalanceCurrency?: number;
		InvoiceDocumentURL?: string;
		InvoiceNumber?: number;
		NextEvent?: string;
		NextEventDate?: string;
		OCRNumber?: string;
		Service?: string;
		ServiceName?: string;
		Status?: string;
	};
}

export interface FortnoxKfNoxInvoiceUpdateAndUnpausePayload {
	BalanceIncludeFees?: number;
	BalanceIncludeFeesCurrency?: number;
	CurrentCapitalBalance?: number;
	CurrentCapitalBalanceCurrency?: number;
	InvoiceDocumentURL?: string;
	InvoiceNumber?: number;
	NextEvent?: string;
	NextEventDate?: string;
	OCRNumber?: string;
	Service?: string;
	ServiceName?: string;
	Status?: string;
}

export interface FortnoxKfNoxInvoiceUpdateAndUnpausePayloadWrap {
	NoxFinansInvoice: {
		BalanceIncludeFees?: number;
		BalanceIncludeFeesCurrency?: number;
		CurrentCapitalBalance?: number;
		CurrentCapitalBalanceCurrency?: number;
		InvoiceDocumentURL?: string;
		InvoiceNumber?: number;
		NextEvent?: string;
		NextEventDate?: string;
		OCRNumber?: string;
		Service?: string;
		ServiceName?: string;
		Status?: string;
	};
}

export interface FortnoxKfTermsOfDeliveryListItemWrap {
	TermsOfDeliveries: {
		"@url"?: string;
		Code: string;
		Description: string;
		DescriptionEnglish?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxKfTermsOfDeliverySingleItem {
	"@url"?: string;
	Code: string;
	Description: string;
	DescriptionEnglish?: string;
}

export interface FortnoxKfTermsOfDeliverySingleItemWrap {
	TermsOfDelivery: {
		"@url"?: string;
		Code: string;
		Description: string;
		DescriptionEnglish?: string;
	};
}

export interface FortnoxKfTermsOfDeliverySinglePayloadItem {
	Code: string;
	Description: string;
	DescriptionEnglish?: string;
}

export interface FortnoxKfTermsOfDeliverySinglePayloadItemWrap {
	TermsOfDelivery: {
		Code: string;
		Description: string;
		DescriptionEnglish?: string;
	};
}

export interface FortnoxLfSupplierInvoiceAccrualListItem {
	"@url"?: string;
	AccrualAccount?: number;
	CostAccount?: number;
	Description?: string;
	EndDate?: string;
	Period:
		| "MONTHLY"
		| "BIMONTHLY"
		| "QUARTERLY"
		| "SEMIANNUALLY"
		| "ANNUALLY"
		| "1_MONTHS"
		| "2_MONTHS"
		| "3_MONTHS"
		| "6_MONTHS"
		| "12_MONTHS";
	StartDate?: string;
	SupplierInvoiceAccrualRows?: {
		Account: number;
		CostCenter?: string;
		Credit?: number;
		Debit?: number;
		Project?: string;
		TransactionInformation?: string;
	}[];
	SupplierInvoiceNumber?: number;
	Times?: number;
	Total?: number;
	VATIncluded?: boolean;
}

export interface FortnoxLfSupplierInvoiceAccrualListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	SupplierInvoiceAccruals: {
		"@url"?: string;
		AccrualAccount?: number;
		CostAccount?: number;
		Description?: string;
		EndDate?: string;
		Period:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY"
			| "1_MONTHS"
			| "2_MONTHS"
			| "3_MONTHS"
			| "6_MONTHS"
			| "12_MONTHS";
		StartDate?: string;
		SupplierInvoiceAccrualRows?: {
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[];
		SupplierInvoiceNumber?: number;
		Times?: number;
		Total?: number;
		VATIncluded?: boolean;
	}[];
}

export interface FortnoxLfSupplierInvoiceAccrualSingleItem {
	"@url"?: string;
	AccrualAccount: number;
	CostAccount: number;
	Description?: string;
	EndDate: string;
	Period:
		| "MONTHLY"
		| "BIMONTHLY"
		| "QUARTERLY"
		| "SEMIANNUALLY"
		| "ANNUALLY"
		| "1_MONTHS"
		| "2_MONTHS"
		| "3_MONTHS"
		| "6_MONTHS"
		| "12_MONTHS";
	StartDate: string;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	SupplierInvoiceAccrualRows: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[],
	];
	SupplierInvoiceNumber: number;
	Times: number;
	Total: number;
	VATIncluded?: boolean;
}

export interface FortnoxLfSupplierInvoiceAccrualSingleItemWrap {
	SupplierInvoiceAccrual: {
		"@url"?: string;
		AccrualAccount: number;
		CostAccount: number;
		Description?: string;
		EndDate: string;
		Period:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY"
			| "1_MONTHS"
			| "2_MONTHS"
			| "3_MONTHS"
			| "6_MONTHS"
			| "12_MONTHS";
		StartDate: string;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		SupplierInvoiceAccrualRows: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			}[],
		];
		SupplierInvoiceNumber: number;
		Times: number;
		Total: number;
		VATIncluded?: boolean;
	};
}

export interface FortnoxLfSupplierInvoiceAccrualSinglePayloadItem {
	AccrualAccount: number;
	CostAccount: number;
	Description?: string;
	EndDate: string;
	Period:
		| "MONTHLY"
		| "BIMONTHLY"
		| "QUARTERLY"
		| "SEMIANNUALLY"
		| "ANNUALLY"
		| "1_MONTHS"
		| "2_MONTHS"
		| "3_MONTHS"
		| "6_MONTHS"
		| "12_MONTHS";
	StartDate: string;
	/**
	 * @minItems 2
	 * @maxItems 2147483647
	 */
	SupplierInvoiceAccrualRows: [
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		},
		...{
			Account: number;
			CostCenter?: string;
			Credit?: number;
			Debit?: number;
			Project?: string;
			TransactionInformation?: string;
		}[],
	];
	SupplierInvoiceNumber: number;
	Times: number;
	Total: number;
	VATIncluded?: boolean;
}

export interface FortnoxLfSupplierInvoiceAccrualSinglePayloadItemWrap {
	SupplierInvoiceAccrual: {
		AccrualAccount: number;
		CostAccount: number;
		Description?: string;
		EndDate: string;
		Period:
			| "MONTHLY"
			| "BIMONTHLY"
			| "QUARTERLY"
			| "SEMIANNUALLY"
			| "ANNUALLY"
			| "1_MONTHS"
			| "2_MONTHS"
			| "3_MONTHS"
			| "6_MONTHS"
			| "12_MONTHS";
		StartDate: string;
		/**
		 * @minItems 2
		 * @maxItems 2147483647
		 */
		SupplierInvoiceAccrualRows: [
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			},
			...{
				Account: number;
				CostCenter?: string;
				Credit?: number;
				Debit?: number;
				Project?: string;
				TransactionInformation?: string;
			}[],
		];
		SupplierInvoiceNumber: number;
		Times: number;
		Total: number;
		VATIncluded?: boolean;
	};
}

export interface FortnoxLfSupplierInvoiceListItem {
	"@url"?: string;
	AccountingMethod?: string;
	AdministrationFee?: number;
	AuthorizerName?: string;
	Balance?: string;
	Booked?: boolean;
	Cancel?: boolean;
	Cancelled?: boolean;
	Comments?: string;
	CostCenter?: string;
	Credit?: boolean;
	CreditReference?: string;
	Currency?: string;
	CurrencyRate?: string;
	CurrencyUnit?: number;
	DisablePaymentFile?: boolean;
	DueDate?: string;
	ExternalInvoiceNumber?: string;
	ExternalInvoiceSeries?: string;
	FinalPayDate?: string;
	Freight?: number;
	GivenNumber?: string;
	InvoiceDate?: string;
	InvoiceNumber?: string;
	OCR?: string;
	OurReference?: string;
	PaymentPending?: boolean;
	Project?: string;
	RoundOffValue?: number;
	SalesType?: string;
	SupplierInvoiceRows?: {
		Account?: number;
		AccountDescription?: string;
		ArticleNumber?: string;
		Code?:
			| "TOT"
			| "VAT"
			| "FRT"
			| "AFE"
			| "ROV"
			| "CND"
			| "CNC"
			| "PRD"
			| "PRC"
			| "SRD"
			| "SRC"
			| "PRE"
			| "GWB"
			| "ACC";
		CostCenter?: string;
		Credit?: number;
		CreditCurrency?: number;
		Debit?: number;
		DebitCurrency?: number;
		ItemDescription?: string;
		Price?: number;
		Project?: string;
		Quantity?: number;
		StockLocationCode?: string;
		StockPointCode?: string;
		Total?: number;
		TransactionInformation?: string;
		Unit?: string;
	}[];
	SupplierName?: string;
	SupplierNumber: string;
	Total?: string;
	VAT?: number;
	VATType?: string;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: string;
	Vouchers?: {
		Number?: number;
		ReferenceType?: string;
		Series?: string;
		Year?: number;
	}[];
	YourReference?: string;
}

export interface FortnoxLfSupplierInvoiceListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	SupplierInvoices: {
		"@url"?: string;
		AccountingMethod?: string;
		AdministrationFee?: number;
		AuthorizerName?: string;
		Balance?: string;
		Booked?: boolean;
		Cancel?: boolean;
		Cancelled?: boolean;
		Comments?: string;
		CostCenter?: string;
		Credit?: boolean;
		CreditReference?: string;
		Currency?: string;
		CurrencyRate?: string;
		CurrencyUnit?: number;
		DisablePaymentFile?: boolean;
		DueDate?: string;
		ExternalInvoiceNumber?: string;
		ExternalInvoiceSeries?: string;
		FinalPayDate?: string;
		Freight?: number;
		GivenNumber?: string;
		InvoiceDate?: string;
		InvoiceNumber?: string;
		OCR?: string;
		OurReference?: string;
		PaymentPending?: boolean;
		Project?: string;
		RoundOffValue?: number;
		SalesType?: string;
		SupplierInvoiceRows?: {
			Account?: number;
			AccountDescription?: string;
			ArticleNumber?: string;
			Code?:
				| "TOT"
				| "VAT"
				| "FRT"
				| "AFE"
				| "ROV"
				| "CND"
				| "CNC"
				| "PRD"
				| "PRC"
				| "SRD"
				| "SRC"
				| "PRE"
				| "GWB"
				| "ACC";
			CostCenter?: string;
			Credit?: number;
			CreditCurrency?: number;
			Debit?: number;
			DebitCurrency?: number;
			ItemDescription?: string;
			Price?: number;
			Project?: string;
			Quantity?: number;
			StockLocationCode?: string;
			StockPointCode?: string;
			Total?: number;
			TransactionInformation?: string;
			Unit?: string;
		}[];
		SupplierName?: string;
		SupplierNumber: string;
		Total?: string;
		VAT?: number;
		VATType?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: string;
		Vouchers?: {
			Number?: number;
			ReferenceType?: string;
			Series?: string;
			Year?: number;
		}[];
		YourReference?: string;
	}[];
}

export interface FortnoxLfSupplierInvoicePaymentListItem {
	"@url"?: string;
	Amount?: number;
	AmountCurrency?: number;
	Booked?: boolean;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	Information?: string;
	InvoiceDueDate?: string;
	InvoiceNumber: string;
	InvoiceOCR?: string;
	InvoiceSupplierName?: string;
	InvoiceSupplierNumber?: string;
	InvoiceTotal?: number;
	ModeOfPayment?: string;
	Number?: number;
	PaymentDate?: string;
	Source?: "manual" | "direct";
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WriteOffExist?: boolean;
	WriteOffs?: {
		AccountNumber?: number;
		Amount?: number;
		CostCenter?: string;
		Currency?: string;
		Description?: string;
		Project?: string;
		TransactionInformation?: string;
	}[];
}

export interface FortnoxLfSupplierInvoicePaymentListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	SupplierInvoicePayments: {
		"@url"?: string;
		Amount?: number;
		AmountCurrency?: number;
		Booked?: boolean;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		Information?: string;
		InvoiceDueDate?: string;
		InvoiceNumber: string;
		InvoiceOCR?: string;
		InvoiceSupplierName?: string;
		InvoiceSupplierNumber?: string;
		InvoiceTotal?: number;
		ModeOfPayment?: string;
		Number?: number;
		PaymentDate?: string;
		Source?: "manual" | "direct";
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WriteOffExist?: boolean;
		WriteOffs?: {
			AccountNumber?: number;
			Amount?: number;
			CostCenter?: string;
			Currency?: string;
			Description?: string;
			Project?: string;
			TransactionInformation?: string;
		}[];
	}[];
}

export interface FortnoxLfSupplierInvoicePaymentSingleItem {
	"@url"?: string;
	Amount?: number;
	AmountCurrency?: number;
	Booked?: boolean;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	Information?: string;
	InvoiceDueDate?: string;
	InvoiceNumber: string;
	InvoiceOCR?: string;
	InvoiceSupplierName?: string;
	InvoiceSupplierNumber?: string;
	InvoiceTotal?: string;
	ModeOfPayment?: string;
	Number?: number;
	PaymentDate?: string;
	Source?: "manual" | "direct";
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WriteOffs?: {
		AccountNumber?: number;
		Amount?: number;
		CostCenter?: string;
		Currency?: string;
		Description?: string;
		Project?: string;
		TransactionInformation?: string;
	}[];
}

export interface FortnoxLfSupplierInvoicePaymentSingleItemWrap {
	SupplierInvoicePayment: {
		"@url"?: string;
		Amount?: number;
		AmountCurrency?: number;
		Booked?: boolean;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		Information?: string;
		InvoiceDueDate?: string;
		InvoiceNumber: string;
		InvoiceOCR?: string;
		InvoiceSupplierName?: string;
		InvoiceSupplierNumber?: string;
		InvoiceTotal?: string;
		ModeOfPayment?: string;
		Number?: number;
		PaymentDate?: string;
		Source?: "manual" | "direct";
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WriteOffs?: {
			AccountNumber?: number;
			Amount?: number;
			CostCenter?: string;
			Currency?: string;
			Description?: string;
			Project?: string;
			TransactionInformation?: string;
		}[];
	};
}

export interface FortnoxLfSupplierInvoicePaymentSinglePayloadItem {
	Amount?: number;
	AmountCurrency?: number;
	Booked?: boolean;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	Information?: string;
	InvoiceDueDate?: string;
	InvoiceNumber: string;
	InvoiceOCR?: string;
	InvoiceSupplierName?: string;
	InvoiceSupplierNumber?: string;
	InvoiceTotal?: string;
	ModeOfPayment?: string;
	Number?: number;
	PaymentDate?: string;
	Source?: "manual" | "direct";
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WriteOffs?: {
		AccountNumber?: number;
		Amount?: number;
		CostCenter?: string;
		Currency?: string;
		Description?: string;
		Project?: string;
		TransactionInformation?: string;
	}[];
}

export interface FortnoxLfSupplierInvoicePaymentSinglePayloadItemWrap {
	SupplierInvoicePayment: {
		Amount?: number;
		AmountCurrency?: number;
		Booked?: boolean;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		Information?: string;
		InvoiceDueDate?: string;
		InvoiceNumber: string;
		InvoiceOCR?: string;
		InvoiceSupplierName?: string;
		InvoiceSupplierNumber?: string;
		InvoiceTotal?: string;
		ModeOfPayment?: string;
		Number?: number;
		PaymentDate?: string;
		Source?: "manual" | "direct";
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WriteOffs?: {
			AccountNumber?: number;
			Amount?: number;
			CostCenter?: string;
			Currency?: string;
			Description?: string;
			Project?: string;
			TransactionInformation?: string;
		}[];
	};
}

export interface FortnoxLfSupplierInvoiceRowSingleItem {
	Account?: number;
	AccountDescription?: string;
	ArticleNumber?: string;
	Code?:
		| "TOT"
		| "VAT"
		| "FRT"
		| "AFE"
		| "ROV"
		| "CND"
		| "CNC"
		| "PRD"
		| "PRC"
		| "SRD"
		| "SRC"
		| "PRE"
		| "GWB"
		| "ACC";
	CostCenter?: string;
	Credit?: number;
	CreditCurrency?: number;
	Debit?: number;
	DebitCurrency?: number;
	ItemDescription?: string;
	Price?: number;
	Project?: string;
	Quantity?: number;
	StockLocationCode?: string;
	StockPointCode?: string;
	Total?: number;
	TransactionInformation?: string;
	Unit?: string;
}

export interface FortnoxLfSupplierInvoiceRowSinglePayloadItem {
	Account?: number;
	AccountDescription?: string;
	ArticleNumber?: string;
	Code?:
		| "TOT"
		| "VAT"
		| "FRT"
		| "AFE"
		| "ROV"
		| "CND"
		| "CNC"
		| "PRD"
		| "PRC"
		| "SRD"
		| "SRC"
		| "PRE"
		| "GWB"
		| "ACC";
	CostCenter?: string;
	Credit?: number;
	CreditCurrency?: number;
	Debit?: number;
	DebitCurrency?: number;
	ItemDescription?: string;
	Price?: number;
	Project?: string;
	Quantity?: number;
	StockLocationCode?: string;
	StockPointCode?: string;
	Total?: number;
	TransactionInformation?: string;
	Unit?: string;
}

export interface FortnoxLfSupplierInvoiceSingleItem {
	"@url"?: string;
	AccountingMethod?: "ACCRUAL" | "CASH";
	AdministrationFee?: string;
	Balance?: string;
	Booked?: boolean;
	Cancelled?: boolean;
	Comments?: string;
	CostCenter?: string;
	Credit?: boolean;
	CreditReference?: number;
	Currency?: string;
	CurrencyRate?: string;
	CurrencyUnit?: number;
	DisablePaymentFile?: boolean;
	DueDate?: string;
	ExternalInvoiceNumber?: string;
	ExternalInvoiceSeries?: string;
	FinalPayDate?: string;
	Freight?: string;
	GivenNumber?: string;
	InvoiceDate?: string;
	InvoiceNumber?: string;
	OCR?: string;
	OurReference?: string;
	PaymentPending?: boolean;
	Project?: string;
	RoundOffValue?: string;
	SalesType?: "STOCK" | "SERVICE";
	SupplierInvoiceRows?: {
		Account?: number;
		AccountDescription?: string;
		ArticleNumber?: string;
		Code?:
			| "TOT"
			| "VAT"
			| "FRT"
			| "AFE"
			| "ROV"
			| "CND"
			| "CNC"
			| "PRD"
			| "PRC"
			| "SRD"
			| "SRC"
			| "PRE"
			| "GWB"
			| "ACC";
		CostCenter?: string;
		Credit?: number;
		CreditCurrency?: number;
		Debit?: number;
		DebitCurrency?: number;
		ItemDescription?: string;
		Price?: number;
		Project?: string;
		Quantity?: number;
		StockLocationCode?: string;
		StockPointCode?: string;
		Total?: number;
		TransactionInformation?: string;
		Unit?: string;
	}[];
	SupplierName?: string;
	SupplierNumber: string;
	Total?: string;
	VAT?: string;
	VATType?: "NORMAL" | "EUINTERNAL" | "REVERSE";
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	Vouchers?: {
		Number?: number;
		ReferenceType?: string;
		Series?: string;
		Year?: number;
	}[];
	YourReference?: string;
}

export interface FortnoxLfSupplierInvoiceSingleItemWrap {
	SupplierInvoice: {
		"@url"?: string;
		AccountingMethod?: "ACCRUAL" | "CASH";
		AdministrationFee?: string;
		Balance?: string;
		Booked?: boolean;
		Cancelled?: boolean;
		Comments?: string;
		CostCenter?: string;
		Credit?: boolean;
		CreditReference?: number;
		Currency?: string;
		CurrencyRate?: string;
		CurrencyUnit?: number;
		DisablePaymentFile?: boolean;
		DueDate?: string;
		ExternalInvoiceNumber?: string;
		ExternalInvoiceSeries?: string;
		FinalPayDate?: string;
		Freight?: string;
		GivenNumber?: string;
		InvoiceDate?: string;
		InvoiceNumber?: string;
		OCR?: string;
		OurReference?: string;
		PaymentPending?: boolean;
		Project?: string;
		RoundOffValue?: string;
		SalesType?: "STOCK" | "SERVICE";
		SupplierInvoiceRows?: {
			Account?: number;
			AccountDescription?: string;
			ArticleNumber?: string;
			Code?:
				| "TOT"
				| "VAT"
				| "FRT"
				| "AFE"
				| "ROV"
				| "CND"
				| "CNC"
				| "PRD"
				| "PRC"
				| "SRD"
				| "SRC"
				| "PRE"
				| "GWB"
				| "ACC";
			CostCenter?: string;
			Credit?: number;
			CreditCurrency?: number;
			Debit?: number;
			DebitCurrency?: number;
			ItemDescription?: string;
			Price?: number;
			Project?: string;
			Quantity?: number;
			StockLocationCode?: string;
			StockPointCode?: string;
			Total?: number;
			TransactionInformation?: string;
			Unit?: string;
		}[];
		SupplierName?: string;
		SupplierNumber: string;
		Total?: string;
		VAT?: string;
		VATType?: "NORMAL" | "EUINTERNAL" | "REVERSE";
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		Vouchers?: {
			Number?: number;
			ReferenceType?: string;
			Series?: string;
			Year?: number;
		}[];
		YourReference?: string;
	};
}

export interface FortnoxLfSupplierInvoiceSinglePayloadItem {
	AdministrationFee?: string;
	Comments?: string;
	CostCenter?: string;
	Currency?: string;
	CurrencyRate?: string;
	CurrencyUnit?: number;
	DisablePaymentFile?: boolean;
	DueDate?: string;
	ExternalInvoiceNumber?: string;
	ExternalInvoiceSeries?: string;
	Freight?: string;
	GivenNumber?: string;
	InvoiceDate?: string;
	InvoiceNumber?: string;
	OCR?: string;
	OurReference?: string;
	PaymentPending?: boolean;
	Project?: string;
	RoundOffValue?: string;
	SalesType?: "STOCK" | "SERVICE";
	SupplierInvoiceRows?: {
		Account?: number;
		AccountDescription?: string;
		ArticleNumber?: string;
		Code?:
			| "TOT"
			| "VAT"
			| "FRT"
			| "AFE"
			| "ROV"
			| "CND"
			| "CNC"
			| "PRD"
			| "PRC"
			| "SRD"
			| "SRC"
			| "PRE"
			| "GWB"
			| "ACC";
		CostCenter?: string;
		Credit?: number;
		CreditCurrency?: number;
		Debit?: number;
		DebitCurrency?: number;
		ItemDescription?: string;
		Price?: number;
		Project?: string;
		Quantity?: number;
		StockLocationCode?: string;
		StockPointCode?: string;
		Total?: number;
		TransactionInformation?: string;
		Unit?: string;
	}[];
	SupplierNumber: string;
	Total?: string;
	VAT?: string;
	VATType?: "NORMAL" | "EUINTERNAL" | "REVERSE";
	YourReference?: string;
}

export interface FortnoxLfSupplierInvoiceSinglePayloadItemWrap {
	SupplierInvoice: {
		AdministrationFee?: string;
		Comments?: string;
		CostCenter?: string;
		Currency?: string;
		CurrencyRate?: string;
		CurrencyUnit?: number;
		DisablePaymentFile?: boolean;
		DueDate?: string;
		ExternalInvoiceNumber?: string;
		ExternalInvoiceSeries?: string;
		Freight?: string;
		GivenNumber?: string;
		InvoiceDate?: string;
		InvoiceNumber?: string;
		OCR?: string;
		OurReference?: string;
		PaymentPending?: boolean;
		Project?: string;
		RoundOffValue?: string;
		SalesType?: "STOCK" | "SERVICE";
		SupplierInvoiceRows?: {
			Account?: number;
			AccountDescription?: string;
			ArticleNumber?: string;
			Code?:
				| "TOT"
				| "VAT"
				| "FRT"
				| "AFE"
				| "ROV"
				| "CND"
				| "CNC"
				| "PRD"
				| "PRC"
				| "SRD"
				| "SRC"
				| "PRE"
				| "GWB"
				| "ACC";
			CostCenter?: string;
			Credit?: number;
			CreditCurrency?: number;
			Debit?: number;
			DebitCurrency?: number;
			ItemDescription?: string;
			Price?: number;
			Project?: string;
			Quantity?: number;
			StockLocationCode?: string;
			StockPointCode?: string;
			Total?: number;
			TransactionInformation?: string;
			Unit?: string;
		}[];
		SupplierNumber: string;
		Total?: string;
		VAT?: string;
		VATType?: "NORMAL" | "EUINTERNAL" | "REVERSE";
		YourReference?: string;
	};
}

export interface FortnoxLfSupplierListItem {
	"@url"?: string;
	Active?: boolean;
	Address1?: string;
	Address2?: string;
	BG?: string;
	BIC?: string;
	Bank?: string;
	BankAccountNumber?: string;
	BranchCode?: string;
	City?: string;
	ClearingNumber?: number;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CountryCode?: string;
	Currency?: string;
	DisablePaymentFile?: boolean;
	Email?: string;
	Fax?: string;
	IBAN?: string;
	Name: string;
	OrganisationNumber?: string;
	OurCustomerNumber?: string;
	OurReference?: string;
	PG?: string;
	Phone?: string;
	Phone1?: string;
	Phone2?: string;
	PreDefinedAccount?: string;
	Project?: string;
	SupplierNumber?: string;
	TermsOfPayment?: string;
	VATNumber?: string;
	VATType?: string;
	VisitingAddress?: string;
	VisitingCity?: string;
	VisitingCountry?: string;
	VisitingCountryCode?: string;
	VisitingZipCode?: string;
	WWW?: string;
	WorkPlace?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxLfSupplierListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	Suppliers: {
		"@url"?: string;
		Active?: boolean;
		Address1?: string;
		Address2?: string;
		BG?: string;
		BIC?: string;
		Bank?: string;
		BankAccountNumber?: string;
		BranchCode?: string;
		City?: string;
		ClearingNumber?: number;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CountryCode?: string;
		Currency?: string;
		DisablePaymentFile?: boolean;
		Email?: string;
		Fax?: string;
		IBAN?: string;
		Name: string;
		OrganisationNumber?: string;
		OurCustomerNumber?: string;
		OurReference?: string;
		PG?: string;
		Phone?: string;
		Phone1?: string;
		Phone2?: string;
		PreDefinedAccount?: string;
		Project?: string;
		SupplierNumber?: string;
		TermsOfPayment?: string;
		VATNumber?: string;
		VATType?: string;
		VisitingAddress?: string;
		VisitingCity?: string;
		VisitingCountry?: string;
		VisitingCountryCode?: string;
		VisitingZipCode?: string;
		WWW?: string;
		WorkPlace?: string;
		YourReference?: string;
		ZipCode?: string;
	}[];
}

export interface FortnoxLfSupplierSingleItem {
	"@url"?: string;
	Active?: boolean;
	Address1?: string;
	Address2?: string;
	BG?: string;
	BIC?: string;
	Bank?: string;
	BankAccountNumber?: string;
	BranchCode?: string;
	City?: string;
	ClearingNumber?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CountryCode?: string;
	Currency?: string;
	DisablePaymentFile?: boolean;
	Email?: string;
	Fax?: string;
	IBAN?: string;
	Name: string;
	OrganisationNumber?: string;
	OurCustomerNumber?: string;
	OurReference?: string;
	PG?: string;
	Phone1?: string;
	Phone2?: string;
	PreDefinedAccount?: string;
	Project?: string;
	SupplierNumber?: string;
	TermsOfPayment?: string;
	VATNumber?: string;
	VATType?: string;
	VisitingAddress?: string;
	VisitingCity?: string;
	VisitingCountry?: string;
	VisitingCountryCode?: string;
	VisitingZipCode?: string;
	WWW?: string;
	WorkPlace?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxLfSupplierSingleItemWrap {
	Supplier: {
		"@url"?: string;
		Active?: boolean;
		Address1?: string;
		Address2?: string;
		BG?: string;
		BIC?: string;
		Bank?: string;
		BankAccountNumber?: string;
		BranchCode?: string;
		City?: string;
		ClearingNumber?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CountryCode?: string;
		Currency?: string;
		DisablePaymentFile?: boolean;
		Email?: string;
		Fax?: string;
		IBAN?: string;
		Name: string;
		OrganisationNumber?: string;
		OurCustomerNumber?: string;
		OurReference?: string;
		PG?: string;
		Phone1?: string;
		Phone2?: string;
		PreDefinedAccount?: string;
		Project?: string;
		SupplierNumber?: string;
		TermsOfPayment?: string;
		VATNumber?: string;
		VATType?: string;
		VisitingAddress?: string;
		VisitingCity?: string;
		VisitingCountry?: string;
		VisitingCountryCode?: string;
		VisitingZipCode?: string;
		WWW?: string;
		WorkPlace?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxLfSupplierSinglePayloadItem {
	Active?: boolean;
	Address1?: string;
	Address2?: string;
	BG?: string;
	BIC?: string;
	Bank?: string;
	BankAccountNumber?: string;
	BranchCode?: string;
	City?: string;
	ClearingNumber?: string;
	Comments?: string;
	CostCenter?: string;
	Country?: string;
	CountryCode?: string;
	Currency?: string;
	DisablePaymentFile?: boolean;
	Email?: string;
	Fax?: string;
	IBAN?: string;
	Name: string;
	OrganisationNumber?: string;
	OurCustomerNumber?: string;
	OurReference?: string;
	PG?: string;
	Phone1?: string;
	Phone2?: string;
	PreDefinedAccount?: string;
	Project?: string;
	SupplierNumber?: string;
	TermsOfPayment?: string;
	VATNumber?: string;
	VATType?: string;
	VisitingAddress?: string;
	VisitingCity?: string;
	VisitingCountry?: string;
	VisitingCountryCode?: string;
	VisitingZipCode?: string;
	WWW?: string;
	WorkPlace?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxLfSupplierSinglePayloadItemWrap {
	Supplier: {
		Active?: boolean;
		Address1?: string;
		Address2?: string;
		BG?: string;
		BIC?: string;
		Bank?: string;
		BankAccountNumber?: string;
		BranchCode?: string;
		City?: string;
		ClearingNumber?: string;
		Comments?: string;
		CostCenter?: string;
		Country?: string;
		CountryCode?: string;
		Currency?: string;
		DisablePaymentFile?: boolean;
		Email?: string;
		Fax?: string;
		IBAN?: string;
		Name: string;
		OrganisationNumber?: string;
		OurCustomerNumber?: string;
		OurReference?: string;
		PG?: string;
		Phone1?: string;
		Phone2?: string;
		PreDefinedAccount?: string;
		Project?: string;
		SupplierNumber?: string;
		TermsOfPayment?: string;
		VATNumber?: string;
		VATType?: string;
		VisitingAddress?: string;
		VisitingCity?: string;
		VisitingCountry?: string;
		VisitingCountryCode?: string;
		VisitingZipCode?: string;
		WWW?: string;
		WorkPlace?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxLfVoucherReferenceSingleItem {
	Number?: number;
	ReferenceType?: string;
	Series?: string;
	Year?: number;
}

export interface FortnoxLockedPeriodSettingsSingleItem {
	EndDate?: string;
}

export interface FortnoxLockedPeriodSettingsSingleItemWrap {
	LockedPeriod: {
		EndDate?: string;
	};
}

export interface FortnoxLonAbsenceTransactionsListItem {
	"@url"?: string;
	CauseCode:
		| "ASK"
		| "FPE"
		| "FRA"
		| "HAV"
		| "KOM"
		| "MIL"
		| "NAR"
		| "OS1"
		| "OS2"
		| "OS3"
		| "OS4"
		| "OS5"
		| "PAP"
		| "PEM"
		| "PER"
		| "SEM"
		| "SJK"
		| "SMB"
		| "SVE"
		| "TJL"
		| "UTB"
		| "VAB";
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Extent?: number;
	HolidayEntitling?: boolean;
	Hours?: number;
	Project?: string;
	id?: string;
}

export interface FortnoxLonAbsenceTransactionsListItemWrap {
	AbsenceTransactions: {
		"@url"?: string;
		CauseCode:
			| "ASK"
			| "FPE"
			| "FRA"
			| "HAV"
			| "KOM"
			| "MIL"
			| "NAR"
			| "OS1"
			| "OS2"
			| "OS3"
			| "OS4"
			| "OS5"
			| "PAP"
			| "PEM"
			| "PER"
			| "SEM"
			| "SJK"
			| "SMB"
			| "SVE"
			| "TJL"
			| "UTB"
			| "VAB";
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Extent?: number;
		HolidayEntitling?: boolean;
		Hours?: number;
		Project?: string;
		id?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxLonAbsenceTransactionsSingleItem {
	"@url"?: string;
	CauseCode:
		| "ASK"
		| "FPE"
		| "FRA"
		| "HAV"
		| "KOM"
		| "MIL"
		| "NAR"
		| "OS1"
		| "OS2"
		| "OS3"
		| "OS4"
		| "OS5"
		| "PAP"
		| "PEM"
		| "PER"
		| "SEM"
		| "SJK"
		| "SMB"
		| "SVE"
		| "TJL"
		| "UTB"
		| "VAB";
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Extent?: number;
	HolidayEntitling?: boolean;
	Hours?: number;
	Project?: string;
	id?: string;
}

export interface FortnoxLonAbsenceTransactionsSingleItemWrap {
	AbsenceTransaction: {
		"@url"?: string;
		CauseCode:
			| "ASK"
			| "FPE"
			| "FRA"
			| "HAV"
			| "KOM"
			| "MIL"
			| "NAR"
			| "OS1"
			| "OS2"
			| "OS3"
			| "OS4"
			| "OS5"
			| "PAP"
			| "PEM"
			| "PER"
			| "SEM"
			| "SJK"
			| "SMB"
			| "SVE"
			| "TJL"
			| "UTB"
			| "VAB";
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Extent?: number;
		HolidayEntitling?: boolean;
		Hours?: number;
		Project?: string;
		id?: string;
	};
}

export interface FortnoxLonAbsenceTransactionsSinglePayloadItem {
	CauseCode:
		| "ASK"
		| "FPE"
		| "FRA"
		| "HAV"
		| "KOM"
		| "MIL"
		| "NAR"
		| "OS1"
		| "OS2"
		| "OS3"
		| "OS4"
		| "OS5"
		| "PAP"
		| "PEM"
		| "PER"
		| "SEM"
		| "SJK"
		| "SMB"
		| "SVE"
		| "TJL"
		| "UTB"
		| "VAB";
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Extent?: number;
	HolidayEntitling?: boolean;
	Hours?: number;
	Project?: string;
}

export interface FortnoxLonAbsenceTransactionsSinglePayloadItemWrap {
	AbsenceTransaction: {
		CauseCode:
			| "ASK"
			| "FPE"
			| "FRA"
			| "HAV"
			| "KOM"
			| "MIL"
			| "NAR"
			| "OS1"
			| "OS2"
			| "OS3"
			| "OS4"
			| "OS5"
			| "PAP"
			| "PEM"
			| "PER"
			| "SEM"
			| "SJK"
			| "SMB"
			| "SVE"
			| "TJL"
			| "UTB"
			| "VAB";
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Extent?: number;
		HolidayEntitling?: boolean;
		Hours?: number;
		Project?: string;
	};
}

export interface FortnoxLonAttendanceTransactionsListItem {
	"@url"?: string;
	CauseCode:
		| "ARB"
		| "BE2"
		| "BER"
		| "FLX"
		| "HLG"
		| "JO2"
		| "JOR"
		| "MER"
		| "OB1"
		| "OB2"
		| "OB3"
		| "OB4"
		| "OB5"
		| "OK0"
		| "OK1"
		| "OK2"
		| "OK3"
		| "OK4"
		| "OK5"
		| "OT1"
		| "OT2"
		| "OT3"
		| "OT4"
		| "OT5"
		| "RES"
		| "TID";
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Hours?: string;
	Project?: string;
	id?: string;
}

export interface FortnoxLonAttendanceTransactionsListItemWrap {
	AttendanceTransactions: {
		"@url"?: string;
		CauseCode:
			| "ARB"
			| "BE2"
			| "BER"
			| "FLX"
			| "HLG"
			| "JO2"
			| "JOR"
			| "MER"
			| "OB1"
			| "OB2"
			| "OB3"
			| "OB4"
			| "OB5"
			| "OK0"
			| "OK1"
			| "OK2"
			| "OK3"
			| "OK4"
			| "OK5"
			| "OT1"
			| "OT2"
			| "OT3"
			| "OT4"
			| "OT5"
			| "RES"
			| "TID";
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Hours?: string;
		Project?: string;
		id?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxLonAttendanceTransactionsSingleItem {
	"@url"?: string;
	CauseCode:
		| "ARB"
		| "BE2"
		| "BER"
		| "FLX"
		| "HLG"
		| "JO2"
		| "JOR"
		| "MER"
		| "OB1"
		| "OB2"
		| "OB3"
		| "OB4"
		| "OB5"
		| "OK0"
		| "OK1"
		| "OK2"
		| "OK3"
		| "OK4"
		| "OK5"
		| "OT1"
		| "OT2"
		| "OT3"
		| "OT4"
		| "OT5"
		| "RES"
		| "TID";
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Hours?: string;
	Project?: string;
	id?: string;
}

export interface FortnoxLonAttendanceTransactionsSingleItemWrap {
	AttendanceTransaction: {
		"@url"?: string;
		CauseCode:
			| "ARB"
			| "BE2"
			| "BER"
			| "FLX"
			| "HLG"
			| "JO2"
			| "JOR"
			| "MER"
			| "OB1"
			| "OB2"
			| "OB3"
			| "OB4"
			| "OB5"
			| "OK0"
			| "OK1"
			| "OK2"
			| "OK3"
			| "OK4"
			| "OK5"
			| "OT1"
			| "OT2"
			| "OT3"
			| "OT4"
			| "OT5"
			| "RES"
			| "TID";
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Hours?: string;
		Project?: string;
		id?: string;
	};
}

export interface FortnoxLonAttendanceTransactionsSinglePayloadItem {
	CauseCode:
		| "ARB"
		| "BE2"
		| "BER"
		| "FLX"
		| "HLG"
		| "JO2"
		| "JOR"
		| "MER"
		| "OB1"
		| "OB2"
		| "OB3"
		| "OB4"
		| "OB5"
		| "OK0"
		| "OK1"
		| "OK2"
		| "OK3"
		| "OK4"
		| "OK5"
		| "OT1"
		| "OT2"
		| "OT3"
		| "OT4"
		| "OT5"
		| "RES"
		| "TID";
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Hours?: string;
	Project?: string;
}

export interface FortnoxLonAttendanceTransactionsSinglePayloadItemWrap {
	AttendanceTransaction: {
		CauseCode:
			| "ARB"
			| "BE2"
			| "BER"
			| "FLX"
			| "HLG"
			| "JO2"
			| "JOR"
			| "MER"
			| "OB1"
			| "OB2"
			| "OB3"
			| "OB4"
			| "OB5"
			| "OK0"
			| "OK1"
			| "OK2"
			| "OK3"
			| "OK4"
			| "OK5"
			| "OT1"
			| "OT2"
			| "OT3"
			| "OT4"
			| "OT5"
			| "RES"
			| "TID";
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Hours?: string;
		Project?: string;
	};
}

export interface FortnoxLonDatedSalarySupplementListItem {
	EmployeeId: string;
	FirstDay: string;
	FixedSalarySupplement: number;
	VariableSalarySupplement: number;
}

export interface FortnoxLonDatedSalarySupplementListPayloadItem {
	EmployeeId?: string;
	FirstDay?: string;
	FixedSalarySupplement?: number;
	VariableSalarySupplement?: number;
}

export interface FortnoxLonDatedScheduleListItem {
	EmployeeId: string;
	FirstDay: string;
	ScheduleId?: string;
}

export interface FortnoxLonDatedScheduleListPayloadItem {
	EmployeeId: string;
	FirstDay: string;
	ScheduleId?: string;
}

export interface FortnoxLonDatedWageListItem {
	EmployeeId: string;
	FirstDay: string;
	HourlyPay?: string;
	MonthlySalary?: string;
}

export interface FortnoxLonDatedWageListPayloadItem {
	EmployeeId: string;
	FirstDay: string;
	HourlyPay?: string;
	MonthlySalary?: string;
}

export interface FortnoxLonEmployeeCategoryListItem {
	Name: string;
	Value: string;
	value: string;
}

export interface FortnoxLonEmployeeChildListItem {
	ApprovedDays: number;
	Child: string;
	EmployeeId: string;
	Id?: string;
	IngoingWithdrawnDays: number;
	WithdrawnDays?: number;
}

export interface FortnoxLonEmployeeChildListPayloadItem {
	ApprovedDays: number;
	Child: string;
	EmployeeId: string;
	Id?: string;
	IngoingWithdrawnDays: number;
	WithdrawnDays?: number;
}

export interface FortnoxLonEmployeeListItem {
	"@url"?: string;
	ATFValue?: number;
	ATKValue?: number;
	AbsenceHoursNonVacationBased?: number;
	AbsenceHoursVacationBased?: number;
	AbsenceWorkdaysNonVacationBased?: number;
	AbsenceWorkdaysVacationBased?: number;
	Address1?: string;
	Address2?: string;
	AutoNonRecurringTax?: boolean;
	AverageHourlyWage?: string;
	AverageWeeklyHours?: string;
	BankAccountNo?: string;
	City?: string;
	ClearingNo?: string;
	CostCenter?: string;
	Country?: string;
	CurrentCompBalance?: number;
	CurrentFlexBalance?: number;
	DatedSalarySupplements?: {
		EmployeeId: string;
		FirstDay: string;
		FixedSalarySupplement: number;
		VariableSalarySupplement: number;
	}[];
	DatedSchedules?: {
		EmployeeId: string;
		FirstDay: string;
		ScheduleId?: string;
	}[];
	DatedWages?: {
		EmployeeId: string;
		FirstDay: string;
		HourlyPay?: string;
		MonthlySalary?: string;
	}[];
	Email: string;
	EmployedTo?: string;
	EmployeeCategories?: {
		Name: string;
		Value: string;
		value: string;
	}[];
	EmployeeChildren?: {
		ApprovedDays: number;
		Child: string;
		EmployeeId: string;
		Id?: string;
		IngoingWithdrawnDays: number;
		WithdrawnDays?: number;
	}[];
	EmployeeId?: string;
	EmploymentDate?: string;
	EmploymentForm?:
		| "TV"
		| "PRO"
		| "TID"
		| "SVT"
		| "VIK"
		| "PRJ"
		| "PRA"
		| "FER"
		| "SES"
		| "NEJ";
	FirstName: string;
	ForaType?:
		| "A"
		| "A51"
		| "A52"
		| "A53"
		| "A54"
		| "A55"
		| "A56"
		| "A57"
		| "A58"
		| "A59"
		| "A60"
		| "A61"
		| "A62"
		| "A63"
		| "A64"
		| "A65"
		| "A66"
		| "A67"
		| "A68"
		| "A69"
		| "A70"
		| "A71"
		| "A72"
		| "A73"
		| "A74"
		| "A75"
		| "A76"
		| "A77"
		| "A78"
		| "A79"
		| "A80"
		| "A81"
		| "A82"
		| "A83"
		| "A84"
		| "A85"
		| "A86"
		| "A3"
		| "A91"
		| "A92"
		| "A93"
		| "A11"
		| "A12"
		| "A13"
		| "A14"
		| "A15"
		| "A16"
		| "A17"
		| "A18"
		| "A19"
		| "A20"
		| "A21"
		| "A22"
		| "A23"
		| "A24"
		| "A25"
		| "A26"
		| "A27"
		| "A28"
		| "A29"
		| "A30"
		| "A41"
		| "A42"
		| "A43"
		| "A44"
		| "A45"
		| "A46"
		| "A47"
		| "A48"
		| "T"
		| "T6"
		| "-";
	FullName?: string;
	FullTimeEquivalent?: number;
	HourlyPay?: string;
	Inactive?: boolean;
	IngoingSickLeave?: {
		EndDate?: string;
		FirstDay: string;
		SickDaysCount?: number;
		SickWaitingPeriodDeduction?: number;
	}[];
	IngoingUsedHolidaySupplement?: number;
	IngoingUsedVacationDays?: number;
	InitialComp?: number;
	InitialFlex?: number;
	JobTitle?: string;
	LastName: string;
	MonthlySalary?: string;
	NonRecurringTax?: string;
	NonVacationBasedCalendarDaysPartial?: number;
	NonVacationBasedCalendarDaysWhole?: number;
	OpeningSalaries?: {
		Amount?: number;
		EmployeeId: string;
		Period?: string;
		ProductGroup?: string;
		Quantity?: number;
		QuantityUnit?: string;
		RowId?: number;
		SalaryTypeName?: string;
		SalaryTypeNumber: string;
		SortCode?: string;
		TextRow?: string;
		Total?: number;
		VAT?: number;
	}[];
	PayslipType?: "pdf" | "digital" | "kivra";
	PersonalIdentityNumber?: string;
	PersonelType?: "TJM" | "ARB";
	Phone1?: string;
	Phone2?: string;
	PostCode?: string;
	PreliminaryTaxDeducted?: number;
	Project?: string;
	SalaryForm?: "MAN" | "TIM";
	ScheduleId?: string;
	TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???";
	TaxColumn?: number;
	TaxTable?: string;
	VacationBasedAttendanceDays?: number;
	VacationBasedAttendanceHours?: number;
	VacationBasedCalendarDaysWhole?: number;
	VacationBasedSalaryTotal?: number;
	VacationBasedSalaryVariableAddition?: number;
	VacationBasedSalaryWorkedTime?: number;
	VacationCalculationAdvanceVacationDebt?: number;
	VacationCalculationIncludeInCalculation?: boolean;
	VacationCalculationSameWagePercent?: boolean;
	VacationCalculationSoleCustody?: boolean;
	VacationCalculationSumOnlyNoDays?: boolean;
	VacationCalculationTotalVacationSalarySum?: number;
	VacationCalculationVacationEntitlement?: number;
	VacationCalculationVariableAdditionSum?: number;
	VacationDaysPaid?: number;
	VacationDaysPendingPaid?: number;
	VacationDaysPendingPrepaid?: number;
	VacationDaysPendingSaved?: number;
	VacationDaysPendingSavedYear1?: number;
	VacationDaysPendingSavedYear2?: number;
	VacationDaysPendingSavedYear3?: number;
	VacationDaysPendingSavedYear4?: number;
	VacationDaysPendingSavedYear5?: number;
	VacationDaysPendingSavedYear6Plus?: number;
	VacationDaysPendingUnpaid?: number;
	VacationDaysPrepaid?: number;
	VacationDaysRegisteredPaid?: number;
	VacationDaysRegisteredPrepaid?: number;
	VacationDaysRegisteredSaved?: number;
	VacationDaysRegisteredSavedYear1?: number;
	VacationDaysRegisteredSavedYear2?: number;
	VacationDaysRegisteredSavedYear3?: number;
	VacationDaysRegisteredSavedYear4?: number;
	VacationDaysRegisteredSavedYear5?: number;
	VacationDaysRegisteredSavedYear6Plus?: number;
	VacationDaysRegisteredUnpaid?: number;
	VacationDaysSaved?: number;
	VacationDaysSavedEmploymentRateYear1?: number;
	VacationDaysSavedEmploymentRateYear2?: number;
	VacationDaysSavedEmploymentRateYear3?: number;
	VacationDaysSavedEmploymentRateYear4?: number;
	VacationDaysSavedEmploymentRateYear5?: number;
	VacationDaysSavedEmploymentRateYear6Plus?: number;
	VacationDaysSavedYear1?: number;
	VacationDaysSavedYear2?: number;
	VacationDaysSavedYear3?: number;
	VacationDaysSavedYear4?: number;
	VacationDaysSavedYear5?: number;
	VacationDaysSavedYear6Plus?: number;
	VacationDaysUnpaid?: number;
	WorkingTimeEnumeration?: string;
}

export interface FortnoxLonEmployeeListItemWrap {
	Employees: {
		"@url"?: string;
		ATFValue?: number;
		ATKValue?: number;
		AbsenceHoursNonVacationBased?: number;
		AbsenceHoursVacationBased?: number;
		AbsenceWorkdaysNonVacationBased?: number;
		AbsenceWorkdaysVacationBased?: number;
		Address1?: string;
		Address2?: string;
		AutoNonRecurringTax?: boolean;
		AverageHourlyWage?: string;
		AverageWeeklyHours?: string;
		BankAccountNo?: string;
		City?: string;
		ClearingNo?: string;
		CostCenter?: string;
		Country?: string;
		CurrentCompBalance?: number;
		CurrentFlexBalance?: number;
		DatedSalarySupplements?: {
			EmployeeId: string;
			FirstDay: string;
			FixedSalarySupplement: number;
			VariableSalarySupplement: number;
		}[];
		DatedSchedules?: {
			EmployeeId: string;
			FirstDay: string;
			ScheduleId?: string;
		}[];
		DatedWages?: {
			EmployeeId: string;
			FirstDay: string;
			HourlyPay?: string;
			MonthlySalary?: string;
		}[];
		Email: string;
		EmployedTo?: string;
		EmployeeCategories?: {
			Name: string;
			Value: string;
			value: string;
		}[];
		EmployeeChildren?: {
			ApprovedDays: number;
			Child: string;
			EmployeeId: string;
			Id?: string;
			IngoingWithdrawnDays: number;
			WithdrawnDays?: number;
		}[];
		EmployeeId?: string;
		EmploymentDate?: string;
		EmploymentForm?:
			| "TV"
			| "PRO"
			| "TID"
			| "SVT"
			| "VIK"
			| "PRJ"
			| "PRA"
			| "FER"
			| "SES"
			| "NEJ";
		FirstName: string;
		ForaType?:
			| "A"
			| "A51"
			| "A52"
			| "A53"
			| "A54"
			| "A55"
			| "A56"
			| "A57"
			| "A58"
			| "A59"
			| "A60"
			| "A61"
			| "A62"
			| "A63"
			| "A64"
			| "A65"
			| "A66"
			| "A67"
			| "A68"
			| "A69"
			| "A70"
			| "A71"
			| "A72"
			| "A73"
			| "A74"
			| "A75"
			| "A76"
			| "A77"
			| "A78"
			| "A79"
			| "A80"
			| "A81"
			| "A82"
			| "A83"
			| "A84"
			| "A85"
			| "A86"
			| "A3"
			| "A91"
			| "A92"
			| "A93"
			| "A11"
			| "A12"
			| "A13"
			| "A14"
			| "A15"
			| "A16"
			| "A17"
			| "A18"
			| "A19"
			| "A20"
			| "A21"
			| "A22"
			| "A23"
			| "A24"
			| "A25"
			| "A26"
			| "A27"
			| "A28"
			| "A29"
			| "A30"
			| "A41"
			| "A42"
			| "A43"
			| "A44"
			| "A45"
			| "A46"
			| "A47"
			| "A48"
			| "T"
			| "T6"
			| "-";
		FullName?: string;
		FullTimeEquivalent?: number;
		HourlyPay?: string;
		Inactive?: boolean;
		IngoingSickLeave?: {
			EndDate?: string;
			FirstDay: string;
			SickDaysCount?: number;
			SickWaitingPeriodDeduction?: number;
		}[];
		IngoingUsedHolidaySupplement?: number;
		IngoingUsedVacationDays?: number;
		InitialComp?: number;
		InitialFlex?: number;
		JobTitle?: string;
		LastName: string;
		MonthlySalary?: string;
		NonRecurringTax?: string;
		NonVacationBasedCalendarDaysPartial?: number;
		NonVacationBasedCalendarDaysWhole?: number;
		OpeningSalaries?: {
			Amount?: number;
			EmployeeId: string;
			Period?: string;
			ProductGroup?: string;
			Quantity?: number;
			QuantityUnit?: string;
			RowId?: number;
			SalaryTypeName?: string;
			SalaryTypeNumber: string;
			SortCode?: string;
			TextRow?: string;
			Total?: number;
			VAT?: number;
		}[];
		PayslipType?: "pdf" | "digital" | "kivra";
		PersonalIdentityNumber?: string;
		PersonelType?: "TJM" | "ARB";
		Phone1?: string;
		Phone2?: string;
		PostCode?: string;
		PreliminaryTaxDeducted?: number;
		Project?: string;
		SalaryForm?: "MAN" | "TIM";
		ScheduleId?: string;
		TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???";
		TaxColumn?: number;
		TaxTable?: string;
		VacationBasedAttendanceDays?: number;
		VacationBasedAttendanceHours?: number;
		VacationBasedCalendarDaysWhole?: number;
		VacationBasedSalaryTotal?: number;
		VacationBasedSalaryVariableAddition?: number;
		VacationBasedSalaryWorkedTime?: number;
		VacationCalculationAdvanceVacationDebt?: number;
		VacationCalculationIncludeInCalculation?: boolean;
		VacationCalculationSameWagePercent?: boolean;
		VacationCalculationSoleCustody?: boolean;
		VacationCalculationSumOnlyNoDays?: boolean;
		VacationCalculationTotalVacationSalarySum?: number;
		VacationCalculationVacationEntitlement?: number;
		VacationCalculationVariableAdditionSum?: number;
		VacationDaysPaid?: number;
		VacationDaysPendingPaid?: number;
		VacationDaysPendingPrepaid?: number;
		VacationDaysPendingSaved?: number;
		VacationDaysPendingSavedYear1?: number;
		VacationDaysPendingSavedYear2?: number;
		VacationDaysPendingSavedYear3?: number;
		VacationDaysPendingSavedYear4?: number;
		VacationDaysPendingSavedYear5?: number;
		VacationDaysPendingSavedYear6Plus?: number;
		VacationDaysPendingUnpaid?: number;
		VacationDaysPrepaid?: number;
		VacationDaysRegisteredPaid?: number;
		VacationDaysRegisteredPrepaid?: number;
		VacationDaysRegisteredSaved?: number;
		VacationDaysRegisteredSavedYear1?: number;
		VacationDaysRegisteredSavedYear2?: number;
		VacationDaysRegisteredSavedYear3?: number;
		VacationDaysRegisteredSavedYear4?: number;
		VacationDaysRegisteredSavedYear5?: number;
		VacationDaysRegisteredSavedYear6Plus?: number;
		VacationDaysRegisteredUnpaid?: number;
		VacationDaysSaved?: number;
		VacationDaysSavedEmploymentRateYear1?: number;
		VacationDaysSavedEmploymentRateYear2?: number;
		VacationDaysSavedEmploymentRateYear3?: number;
		VacationDaysSavedEmploymentRateYear4?: number;
		VacationDaysSavedEmploymentRateYear5?: number;
		VacationDaysSavedEmploymentRateYear6Plus?: number;
		VacationDaysSavedYear1?: number;
		VacationDaysSavedYear2?: number;
		VacationDaysSavedYear3?: number;
		VacationDaysSavedYear4?: number;
		VacationDaysSavedYear5?: number;
		VacationDaysSavedYear6Plus?: number;
		VacationDaysUnpaid?: number;
		WorkingTimeEnumeration?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxLonEmployeeSingleItem {
	ATFValue?: number;
	ATKValue?: number;
	AbsenceHoursNonVacationBased?: number;
	AbsenceHoursVacationBased?: number;
	AbsenceWorkdaysNonVacationBased?: number;
	AbsenceWorkdaysVacationBased?: number;
	Address1?: string;
	Address2?: string;
	AutoNonRecurringTax?: boolean;
	AverageHourlyWage?: string;
	AverageWeeklyHours?: string;
	BankAccountNo?: string;
	City?: string;
	ClearingNo?: string;
	CostCenter?: string;
	Country?: string;
	CurrentCompBalance?: number;
	CurrentFlexBalance?: number;
	DatedSalarySupplements?: {
		EmployeeId: string;
		FirstDay: string;
		FixedSalarySupplement: number;
		VariableSalarySupplement: number;
	}[];
	DatedSchedules?: {
		EmployeeId: string;
		FirstDay: string;
		ScheduleId?: string;
	}[];
	DatedWages?: {
		EmployeeId: string;
		FirstDay: string;
		HourlyPay?: string;
		MonthlySalary?: string;
	}[];
	Email: string;
	EmployedTo?: string;
	EmployeeCategories?: {
		Name: string;
		Value: string;
		value: string;
	}[];
	EmployeeChildren?: {
		ApprovedDays: number;
		Child: string;
		EmployeeId: string;
		Id?: string;
		IngoingWithdrawnDays: number;
		WithdrawnDays?: number;
	}[];
	EmployeeId?: string;
	EmploymentDate?: string;
	EmploymentForm?:
		| "TV"
		| "PRO"
		| "TID"
		| "SVT"
		| "VIK"
		| "PRJ"
		| "PRA"
		| "FER"
		| "SES"
		| "NEJ";
	FirstName: string;
	ForaType?:
		| "A"
		| "A51"
		| "A52"
		| "A53"
		| "A54"
		| "A55"
		| "A56"
		| "A57"
		| "A58"
		| "A59"
		| "A60"
		| "A61"
		| "A62"
		| "A63"
		| "A64"
		| "A65"
		| "A66"
		| "A67"
		| "A68"
		| "A69"
		| "A70"
		| "A71"
		| "A72"
		| "A73"
		| "A74"
		| "A75"
		| "A76"
		| "A77"
		| "A78"
		| "A79"
		| "A80"
		| "A81"
		| "A82"
		| "A83"
		| "A84"
		| "A85"
		| "A86"
		| "A3"
		| "A91"
		| "A92"
		| "A93"
		| "A11"
		| "A12"
		| "A13"
		| "A14"
		| "A15"
		| "A16"
		| "A17"
		| "A18"
		| "A19"
		| "A20"
		| "A21"
		| "A22"
		| "A23"
		| "A24"
		| "A25"
		| "A26"
		| "A27"
		| "A28"
		| "A29"
		| "A30"
		| "A41"
		| "A42"
		| "A43"
		| "A44"
		| "A45"
		| "A46"
		| "A47"
		| "A48"
		| "T"
		| "T6"
		| "-";
	FullName?: string;
	FullTimeEquivalent?: number;
	HourlyPay?: string;
	Inactive?: boolean;
	IngoingSickLeave?: {
		EndDate?: string;
		FirstDay: string;
		SickDaysCount?: number;
		SickWaitingPeriodDeduction?: number;
	}[];
	IngoingUsedHolidaySupplement?: number;
	IngoingUsedVacationDays?: number;
	InitialComp?: number;
	InitialFlex?: number;
	JobTitle?: string;
	LastName: string;
	MonthlySalary?: string;
	NonRecurringTax?: string;
	NonVacationBasedCalendarDaysPartial?: number;
	NonVacationBasedCalendarDaysWhole?: number;
	OpeningSalaries?: {
		Amount?: number;
		EmployeeId: string;
		Period?: string;
		ProductGroup?: string;
		Quantity?: number;
		QuantityUnit?: string;
		RowId?: number;
		SalaryTypeName?: string;
		SalaryTypeNumber: string;
		SortCode?: string;
		TextRow?: string;
		Total?: number;
		VAT?: number;
	}[];
	PayslipType?: "pdf" | "digital" | "kivra";
	PersonalIdentityNumber?: string;
	PersonelType?: "TJM" | "ARB";
	Phone1?: string;
	Phone2?: string;
	PostCode?: string;
	PreliminaryTaxDeducted?: number;
	Project?: string;
	SalaryForm?: "MAN" | "TIM";
	ScheduleId?: string;
	TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???";
	TaxColumn?: number;
	TaxTable?: string;
	VacationBasedAttendanceDays?: number;
	VacationBasedAttendanceHours?: number;
	VacationBasedCalendarDaysWhole?: number;
	VacationBasedSalaryTotal?: number;
	VacationBasedSalaryVariableAddition?: number;
	VacationBasedSalaryWorkedTime?: number;
	VacationCalculationAdvanceVacationDebt?: number;
	VacationCalculationIncludeInCalculation?: boolean;
	VacationCalculationSameWagePercent?: boolean;
	VacationCalculationSoleCustody?: boolean;
	VacationCalculationSumOnlyNoDays?: boolean;
	VacationCalculationTotalVacationSalarySum?: number;
	VacationCalculationVacationEntitlement?: number;
	VacationCalculationVariableAdditionSum?: number;
	VacationDaysPaid?: number;
	VacationDaysPendingPaid?: number;
	VacationDaysPendingPrepaid?: number;
	VacationDaysPendingSaved?: number;
	VacationDaysPendingSavedYear1?: number;
	VacationDaysPendingSavedYear2?: number;
	VacationDaysPendingSavedYear3?: number;
	VacationDaysPendingSavedYear4?: number;
	VacationDaysPendingSavedYear5?: number;
	VacationDaysPendingSavedYear6Plus?: number;
	VacationDaysPendingUnpaid?: number;
	VacationDaysPrepaid?: number;
	VacationDaysRegisteredPaid?: number;
	VacationDaysRegisteredPrepaid?: number;
	VacationDaysRegisteredSaved?: number;
	VacationDaysRegisteredSavedYear1?: number;
	VacationDaysRegisteredSavedYear2?: number;
	VacationDaysRegisteredSavedYear3?: number;
	VacationDaysRegisteredSavedYear4?: number;
	VacationDaysRegisteredSavedYear5?: number;
	VacationDaysRegisteredSavedYear6Plus?: number;
	VacationDaysRegisteredUnpaid?: number;
	VacationDaysSaved?: number;
	VacationDaysSavedEmploymentRateYear1?: number;
	VacationDaysSavedEmploymentRateYear2?: number;
	VacationDaysSavedEmploymentRateYear3?: number;
	VacationDaysSavedEmploymentRateYear4?: number;
	VacationDaysSavedEmploymentRateYear5?: number;
	VacationDaysSavedEmploymentRateYear6Plus?: number;
	VacationDaysSavedYear1?: number;
	VacationDaysSavedYear2?: number;
	VacationDaysSavedYear3?: number;
	VacationDaysSavedYear4?: number;
	VacationDaysSavedYear5?: number;
	VacationDaysSavedYear6Plus?: number;
	VacationDaysUnpaid?: number;
	WorkingTimeEnumeration?: string;
}

export interface FortnoxLonEmployeeSingleItemWrap {
	Employee: {
		ATFValue?: number;
		ATKValue?: number;
		AbsenceHoursNonVacationBased?: number;
		AbsenceHoursVacationBased?: number;
		AbsenceWorkdaysNonVacationBased?: number;
		AbsenceWorkdaysVacationBased?: number;
		Address1?: string;
		Address2?: string;
		AutoNonRecurringTax?: boolean;
		AverageHourlyWage?: string;
		AverageWeeklyHours?: string;
		BankAccountNo?: string;
		City?: string;
		ClearingNo?: string;
		CostCenter?: string;
		Country?: string;
		CurrentCompBalance?: number;
		CurrentFlexBalance?: number;
		DatedSalarySupplements?: {
			EmployeeId: string;
			FirstDay: string;
			FixedSalarySupplement: number;
			VariableSalarySupplement: number;
		}[];
		DatedSchedules?: {
			EmployeeId: string;
			FirstDay: string;
			ScheduleId?: string;
		}[];
		DatedWages?: {
			EmployeeId: string;
			FirstDay: string;
			HourlyPay?: string;
			MonthlySalary?: string;
		}[];
		Email: string;
		EmployedTo?: string;
		EmployeeCategories?: {
			Name: string;
			Value: string;
			value: string;
		}[];
		EmployeeChildren?: {
			ApprovedDays: number;
			Child: string;
			EmployeeId: string;
			Id?: string;
			IngoingWithdrawnDays: number;
			WithdrawnDays?: number;
		}[];
		EmployeeId?: string;
		EmploymentDate?: string;
		EmploymentForm?:
			| "TV"
			| "PRO"
			| "TID"
			| "SVT"
			| "VIK"
			| "PRJ"
			| "PRA"
			| "FER"
			| "SES"
			| "NEJ";
		FirstName: string;
		ForaType?:
			| "A"
			| "A51"
			| "A52"
			| "A53"
			| "A54"
			| "A55"
			| "A56"
			| "A57"
			| "A58"
			| "A59"
			| "A60"
			| "A61"
			| "A62"
			| "A63"
			| "A64"
			| "A65"
			| "A66"
			| "A67"
			| "A68"
			| "A69"
			| "A70"
			| "A71"
			| "A72"
			| "A73"
			| "A74"
			| "A75"
			| "A76"
			| "A77"
			| "A78"
			| "A79"
			| "A80"
			| "A81"
			| "A82"
			| "A83"
			| "A84"
			| "A85"
			| "A86"
			| "A3"
			| "A91"
			| "A92"
			| "A93"
			| "A11"
			| "A12"
			| "A13"
			| "A14"
			| "A15"
			| "A16"
			| "A17"
			| "A18"
			| "A19"
			| "A20"
			| "A21"
			| "A22"
			| "A23"
			| "A24"
			| "A25"
			| "A26"
			| "A27"
			| "A28"
			| "A29"
			| "A30"
			| "A41"
			| "A42"
			| "A43"
			| "A44"
			| "A45"
			| "A46"
			| "A47"
			| "A48"
			| "T"
			| "T6"
			| "-";
		FullName?: string;
		FullTimeEquivalent?: number;
		HourlyPay?: string;
		Inactive?: boolean;
		IngoingSickLeave?: {
			EndDate?: string;
			FirstDay: string;
			SickDaysCount?: number;
			SickWaitingPeriodDeduction?: number;
		}[];
		IngoingUsedHolidaySupplement?: number;
		IngoingUsedVacationDays?: number;
		InitialComp?: number;
		InitialFlex?: number;
		JobTitle?: string;
		LastName: string;
		MonthlySalary?: string;
		NonRecurringTax?: string;
		NonVacationBasedCalendarDaysPartial?: number;
		NonVacationBasedCalendarDaysWhole?: number;
		OpeningSalaries?: {
			Amount?: number;
			EmployeeId: string;
			Period?: string;
			ProductGroup?: string;
			Quantity?: number;
			QuantityUnit?: string;
			RowId?: number;
			SalaryTypeName?: string;
			SalaryTypeNumber: string;
			SortCode?: string;
			TextRow?: string;
			Total?: number;
			VAT?: number;
		}[];
		PayslipType?: "pdf" | "digital" | "kivra";
		PersonalIdentityNumber?: string;
		PersonelType?: "TJM" | "ARB";
		Phone1?: string;
		Phone2?: string;
		PostCode?: string;
		PreliminaryTaxDeducted?: number;
		Project?: string;
		SalaryForm?: "MAN" | "TIM";
		ScheduleId?: string;
		TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???";
		TaxColumn?: number;
		TaxTable?: string;
		VacationBasedAttendanceDays?: number;
		VacationBasedAttendanceHours?: number;
		VacationBasedCalendarDaysWhole?: number;
		VacationBasedSalaryTotal?: number;
		VacationBasedSalaryVariableAddition?: number;
		VacationBasedSalaryWorkedTime?: number;
		VacationCalculationAdvanceVacationDebt?: number;
		VacationCalculationIncludeInCalculation?: boolean;
		VacationCalculationSameWagePercent?: boolean;
		VacationCalculationSoleCustody?: boolean;
		VacationCalculationSumOnlyNoDays?: boolean;
		VacationCalculationTotalVacationSalarySum?: number;
		VacationCalculationVacationEntitlement?: number;
		VacationCalculationVariableAdditionSum?: number;
		VacationDaysPaid?: number;
		VacationDaysPendingPaid?: number;
		VacationDaysPendingPrepaid?: number;
		VacationDaysPendingSaved?: number;
		VacationDaysPendingSavedYear1?: number;
		VacationDaysPendingSavedYear2?: number;
		VacationDaysPendingSavedYear3?: number;
		VacationDaysPendingSavedYear4?: number;
		VacationDaysPendingSavedYear5?: number;
		VacationDaysPendingSavedYear6Plus?: number;
		VacationDaysPendingUnpaid?: number;
		VacationDaysPrepaid?: number;
		VacationDaysRegisteredPaid?: number;
		VacationDaysRegisteredPrepaid?: number;
		VacationDaysRegisteredSaved?: number;
		VacationDaysRegisteredSavedYear1?: number;
		VacationDaysRegisteredSavedYear2?: number;
		VacationDaysRegisteredSavedYear3?: number;
		VacationDaysRegisteredSavedYear4?: number;
		VacationDaysRegisteredSavedYear5?: number;
		VacationDaysRegisteredSavedYear6Plus?: number;
		VacationDaysRegisteredUnpaid?: number;
		VacationDaysSaved?: number;
		VacationDaysSavedEmploymentRateYear1?: number;
		VacationDaysSavedEmploymentRateYear2?: number;
		VacationDaysSavedEmploymentRateYear3?: number;
		VacationDaysSavedEmploymentRateYear4?: number;
		VacationDaysSavedEmploymentRateYear5?: number;
		VacationDaysSavedEmploymentRateYear6Plus?: number;
		VacationDaysSavedYear1?: number;
		VacationDaysSavedYear2?: number;
		VacationDaysSavedYear3?: number;
		VacationDaysSavedYear4?: number;
		VacationDaysSavedYear5?: number;
		VacationDaysSavedYear6Plus?: number;
		VacationDaysUnpaid?: number;
		WorkingTimeEnumeration?: string;
	};
}

export interface FortnoxLonEmployeeSinglePayloadItem {
	ATFValue?: number;
	ATKValue?: number;
	AbsenceHoursNonVacationBased?: number;
	AbsenceHoursVacationBased?: number;
	AbsenceWorkdaysNonVacationBased?: number;
	AbsenceWorkdaysVacationBased?: number;
	Address1?: string;
	Address2?: string;
	AutoNonRecurringTax?: boolean;
	AverageHourlyWage?: string;
	AverageWeeklyHours?: string;
	BankAccountNo?: string;
	City?: string;
	ClearingNo?: string;
	CostCenter?: string;
	Country?: string;
	CurrentCompBalance?: number;
	CurrentFlexBalance?: number;
	DatedSalarySupplements?: {
		EmployeeId?: string;
		FirstDay?: string;
		FixedSalarySupplement?: number;
		VariableSalarySupplement?: number;
	}[];
	DatedSchedules?: {
		EmployeeId: string;
		FirstDay: string;
		ScheduleId?: string;
	}[];
	DatedWages?: {
		EmployeeId: string;
		FirstDay: string;
		HourlyPay?: string;
		MonthlySalary?: string;
	}[];
	Email: string;
	EmployedTo?: string;
	EmployeeChildren?: {
		ApprovedDays: number;
		Child: string;
		EmployeeId: string;
		Id?: string;
		IngoingWithdrawnDays: number;
		WithdrawnDays?: number;
	}[];
	EmployeeId?: string;
	EmploymentDate?: string;
	EmploymentForm?:
		| "TV"
		| "PRO"
		| "TID"
		| "SVT"
		| "VIK"
		| "PRJ"
		| "PRA"
		| "FER"
		| "SES"
		| "NEJ";
	FirstName: string;
	ForaType?:
		| "A"
		| "A51"
		| "A52"
		| "A53"
		| "A54"
		| "A55"
		| "A56"
		| "A57"
		| "A58"
		| "A59"
		| "A60"
		| "A61"
		| "A62"
		| "A63"
		| "A64"
		| "A65"
		| "A66"
		| "A67"
		| "A68"
		| "A69"
		| "A70"
		| "A71"
		| "A72"
		| "A73"
		| "A74"
		| "A75"
		| "A76"
		| "A77"
		| "A78"
		| "A79"
		| "A80"
		| "A81"
		| "A82"
		| "A83"
		| "A84"
		| "A85"
		| "A86"
		| "A3"
		| "A91"
		| "A92"
		| "A93"
		| "A11"
		| "A12"
		| "A13"
		| "A14"
		| "A15"
		| "A16"
		| "A17"
		| "A18"
		| "A19"
		| "A20"
		| "A21"
		| "A22"
		| "A23"
		| "A24"
		| "A25"
		| "A26"
		| "A27"
		| "A28"
		| "A29"
		| "A30"
		| "A41"
		| "A42"
		| "A43"
		| "A44"
		| "A45"
		| "A46"
		| "A47"
		| "A48"
		| "T"
		| "T6"
		| "-";
	FullName?: string;
	FullTimeEquivalent?: number;
	HourlyPay?: string;
	Inactive?: boolean;
	IngoingSickLeave?: {
		EndDate?: string;
		FirstDay: string;
		SickDaysCount?: number;
		SickWaitingPeriodDeduction?: number;
	}[];
	IngoingUsedHolidaySupplement?: number;
	IngoingUsedVacationDays?: number;
	InitialComp?: number;
	InitialFlex?: number;
	JobTitle?: string;
	LastName: string;
	MonthlySalary?: string;
	NonRecurringTax?: string;
	NonVacationBasedCalendarDaysPartial?: number;
	NonVacationBasedCalendarDaysWhole?: number;
	OpeningSalaries?: {
		Amount?: number;
		EmployeeId: string;
		Period?: string;
		ProductGroup?: string;
		Quantity?: number;
		QuantityUnit?: string;
		RowId?: number;
		SalaryTypeName?: string;
		SalaryTypeNumber: string;
		SortCode?: string;
		TextRow?: string;
		Total?: number;
		VAT?: number;
	}[];
	PayslipType?: "pdf" | "digital" | "kivra";
	PersonalIdentityNumber?: string;
	PersonelType?: "TJM" | "ARB";
	Phone1?: string;
	Phone2?: string;
	PostCode?: string;
	PreliminaryTaxDeducted?: number;
	Project?: string;
	SalaryForm?: "MAN" | "TIM";
	ScheduleId?: string;
	TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???";
	TaxColumn?: number;
	TaxTable?: string;
	VacationBasedAttendanceDays?: number;
	VacationBasedAttendanceHours?: number;
	VacationBasedCalendarDaysWhole?: number;
	VacationBasedSalaryTotal?: number;
	VacationBasedSalaryVariableAddition?: number;
	VacationBasedSalaryWorkedTime?: number;
	VacationCalculationAdvanceVacationDebt?: number;
	VacationCalculationIncludeInCalculation?: boolean;
	VacationCalculationSameWagePercent?: boolean;
	VacationCalculationSoleCustody?: boolean;
	VacationCalculationSumOnlyNoDays?: boolean;
	VacationCalculationTotalVacationSalarySum?: number;
	VacationCalculationVacationEntitlement?: number;
	VacationCalculationVariableAdditionSum?: number;
	VacationDaysPaid?: number;
	VacationDaysPendingPaid?: number;
	VacationDaysPendingPrepaid?: number;
	VacationDaysPendingSaved?: number;
	VacationDaysPendingSavedYear1?: number;
	VacationDaysPendingSavedYear2?: number;
	VacationDaysPendingSavedYear3?: number;
	VacationDaysPendingSavedYear4?: number;
	VacationDaysPendingSavedYear5?: number;
	VacationDaysPendingSavedYear6Plus?: number;
	VacationDaysPendingUnpaid?: number;
	VacationDaysPrepaid?: number;
	VacationDaysRegisteredPaid?: number;
	VacationDaysRegisteredPrepaid?: number;
	VacationDaysRegisteredSaved?: number;
	VacationDaysRegisteredSavedYear1?: number;
	VacationDaysRegisteredSavedYear2?: number;
	VacationDaysRegisteredSavedYear3?: number;
	VacationDaysRegisteredSavedYear4?: number;
	VacationDaysRegisteredSavedYear5?: number;
	VacationDaysRegisteredSavedYear6Plus?: number;
	VacationDaysRegisteredUnpaid?: number;
	VacationDaysSaved?: number;
	VacationDaysSavedEmploymentRateYear1?: number;
	VacationDaysSavedEmploymentRateYear2?: number;
	VacationDaysSavedEmploymentRateYear3?: number;
	VacationDaysSavedEmploymentRateYear4?: number;
	VacationDaysSavedEmploymentRateYear5?: number;
	VacationDaysSavedEmploymentRateYear6Plus?: number;
	VacationDaysSavedYear1?: number;
	VacationDaysSavedYear2?: number;
	VacationDaysSavedYear3?: number;
	VacationDaysSavedYear4?: number;
	VacationDaysSavedYear5?: number;
	VacationDaysSavedYear6Plus?: number;
	VacationDaysUnpaid?: number;
	WorkingTimeEnumeration?: string;
}

export interface FortnoxLonEmployeeSinglePayloadItemWrap {
	Employee: {
		ATFValue?: number;
		ATKValue?: number;
		AbsenceHoursNonVacationBased?: number;
		AbsenceHoursVacationBased?: number;
		AbsenceWorkdaysNonVacationBased?: number;
		AbsenceWorkdaysVacationBased?: number;
		Address1?: string;
		Address2?: string;
		AutoNonRecurringTax?: boolean;
		AverageHourlyWage?: string;
		AverageWeeklyHours?: string;
		BankAccountNo?: string;
		City?: string;
		ClearingNo?: string;
		CostCenter?: string;
		Country?: string;
		CurrentCompBalance?: number;
		CurrentFlexBalance?: number;
		DatedSalarySupplements?: {
			EmployeeId?: string;
			FirstDay?: string;
			FixedSalarySupplement?: number;
			VariableSalarySupplement?: number;
		}[];
		DatedSchedules?: {
			EmployeeId: string;
			FirstDay: string;
			ScheduleId?: string;
		}[];
		DatedWages?: {
			EmployeeId: string;
			FirstDay: string;
			HourlyPay?: string;
			MonthlySalary?: string;
		}[];
		Email: string;
		EmployedTo?: string;
		EmployeeChildren?: {
			ApprovedDays: number;
			Child: string;
			EmployeeId: string;
			Id?: string;
			IngoingWithdrawnDays: number;
			WithdrawnDays?: number;
		}[];
		EmployeeId?: string;
		EmploymentDate?: string;
		EmploymentForm?:
			| "TV"
			| "PRO"
			| "TID"
			| "SVT"
			| "VIK"
			| "PRJ"
			| "PRA"
			| "FER"
			| "SES"
			| "NEJ";
		FirstName: string;
		ForaType?:
			| "A"
			| "A51"
			| "A52"
			| "A53"
			| "A54"
			| "A55"
			| "A56"
			| "A57"
			| "A58"
			| "A59"
			| "A60"
			| "A61"
			| "A62"
			| "A63"
			| "A64"
			| "A65"
			| "A66"
			| "A67"
			| "A68"
			| "A69"
			| "A70"
			| "A71"
			| "A72"
			| "A73"
			| "A74"
			| "A75"
			| "A76"
			| "A77"
			| "A78"
			| "A79"
			| "A80"
			| "A81"
			| "A82"
			| "A83"
			| "A84"
			| "A85"
			| "A86"
			| "A3"
			| "A91"
			| "A92"
			| "A93"
			| "A11"
			| "A12"
			| "A13"
			| "A14"
			| "A15"
			| "A16"
			| "A17"
			| "A18"
			| "A19"
			| "A20"
			| "A21"
			| "A22"
			| "A23"
			| "A24"
			| "A25"
			| "A26"
			| "A27"
			| "A28"
			| "A29"
			| "A30"
			| "A41"
			| "A42"
			| "A43"
			| "A44"
			| "A45"
			| "A46"
			| "A47"
			| "A48"
			| "T"
			| "T6"
			| "-";
		FullName?: string;
		FullTimeEquivalent?: number;
		HourlyPay?: string;
		Inactive?: boolean;
		IngoingSickLeave?: {
			EndDate?: string;
			FirstDay: string;
			SickDaysCount?: number;
			SickWaitingPeriodDeduction?: number;
		}[];
		IngoingUsedHolidaySupplement?: number;
		IngoingUsedVacationDays?: number;
		InitialComp?: number;
		InitialFlex?: number;
		JobTitle?: string;
		LastName: string;
		MonthlySalary?: string;
		NonRecurringTax?: string;
		NonVacationBasedCalendarDaysPartial?: number;
		NonVacationBasedCalendarDaysWhole?: number;
		OpeningSalaries?: {
			Amount?: number;
			EmployeeId: string;
			Period?: string;
			ProductGroup?: string;
			Quantity?: number;
			QuantityUnit?: string;
			RowId?: number;
			SalaryTypeName?: string;
			SalaryTypeNumber: string;
			SortCode?: string;
			TextRow?: string;
			Total?: number;
			VAT?: number;
		}[];
		PayslipType?: "pdf" | "digital" | "kivra";
		PersonalIdentityNumber?: string;
		PersonelType?: "TJM" | "ARB";
		Phone1?: string;
		Phone2?: string;
		PostCode?: string;
		PreliminaryTaxDeducted?: number;
		Project?: string;
		SalaryForm?: "MAN" | "TIM";
		ScheduleId?: string;
		TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???";
		TaxColumn?: number;
		TaxTable?: string;
		VacationBasedAttendanceDays?: number;
		VacationBasedAttendanceHours?: number;
		VacationBasedCalendarDaysWhole?: number;
		VacationBasedSalaryTotal?: number;
		VacationBasedSalaryVariableAddition?: number;
		VacationBasedSalaryWorkedTime?: number;
		VacationCalculationAdvanceVacationDebt?: number;
		VacationCalculationIncludeInCalculation?: boolean;
		VacationCalculationSameWagePercent?: boolean;
		VacationCalculationSoleCustody?: boolean;
		VacationCalculationSumOnlyNoDays?: boolean;
		VacationCalculationTotalVacationSalarySum?: number;
		VacationCalculationVacationEntitlement?: number;
		VacationCalculationVariableAdditionSum?: number;
		VacationDaysPaid?: number;
		VacationDaysPendingPaid?: number;
		VacationDaysPendingPrepaid?: number;
		VacationDaysPendingSaved?: number;
		VacationDaysPendingSavedYear1?: number;
		VacationDaysPendingSavedYear2?: number;
		VacationDaysPendingSavedYear3?: number;
		VacationDaysPendingSavedYear4?: number;
		VacationDaysPendingSavedYear5?: number;
		VacationDaysPendingSavedYear6Plus?: number;
		VacationDaysPendingUnpaid?: number;
		VacationDaysPrepaid?: number;
		VacationDaysRegisteredPaid?: number;
		VacationDaysRegisteredPrepaid?: number;
		VacationDaysRegisteredSaved?: number;
		VacationDaysRegisteredSavedYear1?: number;
		VacationDaysRegisteredSavedYear2?: number;
		VacationDaysRegisteredSavedYear3?: number;
		VacationDaysRegisteredSavedYear4?: number;
		VacationDaysRegisteredSavedYear5?: number;
		VacationDaysRegisteredSavedYear6Plus?: number;
		VacationDaysRegisteredUnpaid?: number;
		VacationDaysSaved?: number;
		VacationDaysSavedEmploymentRateYear1?: number;
		VacationDaysSavedEmploymentRateYear2?: number;
		VacationDaysSavedEmploymentRateYear3?: number;
		VacationDaysSavedEmploymentRateYear4?: number;
		VacationDaysSavedEmploymentRateYear5?: number;
		VacationDaysSavedEmploymentRateYear6Plus?: number;
		VacationDaysSavedYear1?: number;
		VacationDaysSavedYear2?: number;
		VacationDaysSavedYear3?: number;
		VacationDaysSavedYear4?: number;
		VacationDaysSavedYear5?: number;
		VacationDaysSavedYear6Plus?: number;
		VacationDaysUnpaid?: number;
		WorkingTimeEnumeration?: string;
	};
}

export interface FortnoxLonExpensesListItem {
	"@url"?: string;
	Account: number;
	Code: string;
	Text: string;
}

export interface FortnoxLonExpensesListItemWrap {
	Expenses: {
		"@url"?: string;
		Account: number;
		Code: string;
		Text: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxLonExpensesSingleItem {
	Account: number;
	Code: string;
	Text: string;
}

export interface FortnoxLonExpensesSingleItemWrap {
	Expense: {
		Account: number;
		Code: string;
		Text: string;
	};
}

export interface FortnoxLonExpensesSinglePayloadItem {
	Account: number;
	Code: string;
	Text: string;
}

export interface FortnoxLonExpensesSinglePayloadItemWrap {
	Expense: {
		Account: number;
		Code: string;
		Text: string;
	};
}

export interface FortnoxLonIngoingSickLeaveListItem {
	EndDate?: string;
	FirstDay: string;
	SickDaysCount?: number;
	SickWaitingPeriodDeduction?: number;
}

export interface FortnoxLonOpeningSalaryListItem {
	Amount?: number;
	EmployeeId: string;
	Period?: string;
	ProductGroup?: string;
	Quantity?: number;
	QuantityUnit?: string;
	RowId?: number;
	SalaryTypeName?: string;
	SalaryTypeNumber: string;
	SortCode?: string;
	TextRow?: string;
	Total?: number;
	VAT?: number;
}

export interface FortnoxLonOpeningSalaryListPayloadItem {
	Amount?: number;
	EmployeeId: string;
	Period?: string;
	ProductGroup?: string;
	Quantity?: number;
	QuantityUnit?: string;
	RowId?: number;
	SalaryTypeName?: string;
	SalaryTypeNumber: string;
	SortCode?: string;
	TextRow?: string;
	Total?: number;
	VAT?: number;
}

export interface FortnoxLonSalaryTransactionsListItem {
	"@url"?: string;
	Amount?: string;
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Expense?: string;
	Number?: string;
	Project?: string;
	SalaryCode: string;
	SalaryRow?: number;
	TextRow?: string;
	Total?: string;
	VAT?: string;
}

export interface FortnoxLonSalaryTransactionsListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	SalaryTransactions: {
		"@url"?: string;
		Amount?: string;
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Expense?: string;
		Number?: string;
		Project?: string;
		SalaryCode: string;
		SalaryRow?: number;
		TextRow?: string;
		Total?: string;
		VAT?: string;
	}[];
}

export interface FortnoxLonSalaryTransactionsSingleItem {
	Amount?: string;
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Expense?: string;
	Number?: string;
	Project?: string;
	SalaryCode: string;
	SalaryRow?: number;
	TextRow?: string;
	Total?: string;
	VAT?: string;
}

export interface FortnoxLonSalaryTransactionsSingleItemWrap {
	SalaryTransaction: {
		Amount?: string;
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Expense?: string;
		Number?: string;
		Project?: string;
		SalaryCode: string;
		SalaryRow?: number;
		TextRow?: string;
		Total?: string;
		VAT?: string;
	};
}

export interface FortnoxLonSalaryTransactionsSinglePayloadItem {
	Amount?: string;
	CostCenter?: string;
	Date: string;
	EmployeeId: string;
	Expense?: string;
	Number?: string;
	Project?: string;
	SalaryCode: string;
	SalaryRow?: number;
	TextRow?: string;
	Total?: string;
	VAT?: string;
}

export interface FortnoxLonSalaryTransactionsSinglePayloadItemWrap {
	SalaryTransaction: {
		Amount?: string;
		CostCenter?: string;
		Date: string;
		EmployeeId: string;
		Expense?: string;
		Number?: string;
		Project?: string;
		SalaryCode: string;
		SalaryRow?: number;
		TextRow?: string;
		Total?: string;
		VAT?: string;
	};
}

export interface FortnoxLonScheduleTimeSingleItem {
	Date?: string;
	EmployeeId?: string;
	Hours?: string;
	IWH1?: string;
	IWH2?: string;
	IWH3?: string;
	IWH4?: string;
	IWH5?: string;
	ScheduleId?: string;
}

export interface FortnoxLonScheduleTimeSingleItemWrap {
	ScheduleTime: {
		Date?: string;
		EmployeeId?: string;
		Hours?: string;
		IWH1?: string;
		IWH2?: string;
		IWH3?: string;
		IWH4?: string;
		IWH5?: string;
		ScheduleId?: string;
	};
}

export interface FortnoxLonScheduleTimeSinglePayloadItem {
	Date?: string;
	EmployeeId?: string;
	Hours?: string;
	IWH1?: string;
	IWH2?: string;
	IWH3?: string;
	IWH4?: string;
	IWH5?: string;
	ScheduleId?: string;
}

export interface FortnoxLonScheduleTimeSinglePayloadItemWrap {
	ScheduleTime: {
		Date?: string;
		EmployeeId?: string;
		Hours?: string;
		IWH1?: string;
		IWH2?: string;
		IWH3?: string;
		IWH4?: string;
		IWH5?: string;
		ScheduleId?: string;
	};
}

export interface FortnoxLonVacationDebtBasisSingleItem {
	Employees?: {
		DaysEarned?: number;
		DaysSaved?: number;
		DaysUnused?: number;
		DebtAdvance?: number;
		DebtEarned?: number;
		DebtSaved?: number;
		DebtUnused?: number;
		EmployeeId: string;
		EmployeeName?: string;
		TotalDebtEmployee?: number;
		TotalDebtEmployerContribution?: number;
		VariableEarned?: number;
		VariableUnused?: number;
		WageEarned?: number;
		WageSaved?: number;
		WageUnused?: number;
	}[];
	LastDay?: string;
	Month: number;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	Year: number;
}

export interface FortnoxLonVacationDebtBasisSingleItemWrap {
	VacationDebtBasis: {
		Employees?: {
			DaysEarned?: number;
			DaysSaved?: number;
			DaysUnused?: number;
			DebtAdvance?: number;
			DebtEarned?: number;
			DebtSaved?: number;
			DebtUnused?: number;
			EmployeeId: string;
			EmployeeName?: string;
			TotalDebtEmployee?: number;
			TotalDebtEmployerContribution?: number;
			VariableEarned?: number;
			VariableUnused?: number;
			WageEarned?: number;
			WageSaved?: number;
			WageUnused?: number;
		}[];
		LastDay?: string;
		Month: number;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		Year: number;
	};
}

export interface FortnoxMeSingleItem {
	Email?: string;
	Id?: string;
	Locale?: string;
	Name?: string;
	SysAdmin?: boolean;
}

export interface FortnoxMeSingleItemWrap {
	Me: {
		Email?: string;
		Id?: string;
		Locale?: string;
		Name?: string;
		SysAdmin?: boolean;
	};
}

export interface FortnoxMetaInformation {
	"@CurrentPage": number;
	"@TotalPages": number;
	"@TotalResources": number;
}

export interface FortnoxModeOfPaymentListItemWrap {
	ModesOfPayments: {
		"@url"?: string;
		AccountNumber: string;
		Code?: string;
		Description?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxModeOfPaymentSingleItem {
	"@url"?: string;
	AccountNumber: string;
	Code?: string;
	Description?: string;
}

export interface FortnoxModeOfPaymentSingleItemWrap {
	ModeOfPayment: {
		"@url"?: string;
		AccountNumber: string;
		Code?: string;
		Description?: string;
	};
}

export interface FortnoxModeOfPaymentSinglePayloadItem {
	AccountNumber: string;
	Code?: string;
	Description?: string;
}

export interface FortnoxModeOfPaymentSinglePayloadItemWrap {
	ModeOfPayment: {
		AccountNumber: string;
		Code?: string;
		Description?: string;
	};
}

export interface FortnoxOOFDocumentTagsOnDocumentSingleItem {
	Id?: number;
}

export interface FortnoxOOFDocumentTagsOnDocumentSinglePayloadItem {
	Id?: number;
}

export interface FortnoxOfferBundleInstanceSingleItem {
	Revision?: number;
	SubRows?: {
		AccountNumber?: number;
		AmountInBundle?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		DocumentRow?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		};
		FixedPrice?: boolean;
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceAdjustment?: boolean;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		SalesPriceInBundle?: number;
		Total?: number;
		Unit?: string;
		UserPrice?: boolean;
		VAT?: number;
		VATCode?: string;
	}[];
}

export interface FortnoxOfferBundleInstanceSinglePayloadItem {
	Revision?: number;
	SubRows?: {
		AccountNumber?: number;
		AmountInBundle?: number;
		ArticleNumber?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		DocumentRow?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		};
		FixedPrice?: boolean;
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		PriceAdjustment?: boolean;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		SalesPriceInBundle?: number;
		Unit?: string;
		UserPrice?: boolean;
		VAT?: number;
		VATCode?: string;
	}[];
}

export interface FortnoxOfferBundleSubItemInstanceSingleItem {
	AccountNumber?: number;
	AmountInBundle?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	DocumentRow?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	};
	FixedPrice?: boolean;
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	PriceAdjustment?: boolean;
	Project?: string;
	Quantity?: string;
	RowId?: number;
	SalesPriceInBundle?: number;
	Total?: number;
	Unit?: string;
	UserPrice?: boolean;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOfferBundleSubItemInstanceSinglePayloadItem {
	AccountNumber?: number;
	AmountInBundle?: number;
	ArticleNumber?: string;
	CostCenter?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	DocumentRow?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	};
	FixedPrice?: boolean;
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	PriceAdjustment?: boolean;
	Project?: string;
	Quantity?: string;
	RowId?: number;
	SalesPriceInBundle?: number;
	Unit?: string;
	UserPrice?: boolean;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOfferOfferListItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExpireDate?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferDate?: string;
	OfferRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderReference?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	TaxReduction?: number;
	TaxReductionType?: string;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourReference?: string;
	YourReferenceNumber?: string;
	ZipCode?: string;
}

export interface FortnoxOfferOfferListResponseWrap {
	Offers: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExpireDate?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferDate?: string;
		OfferRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderReference?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		TaxReduction?: number;
		TaxReductionType?: string;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourReference?: string;
		YourReferenceNumber?: string;
		ZipCode?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxOfferOfferResponseWrap {
	Offer: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExpireDate?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferDate?: string;
		OfferRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderReference?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourReference?: string;
		YourReferenceNumber?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOfferOfferRowSingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	Project?: string;
	Quantity?: string;
	RowId?: number;
	Total?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOfferOfferRowSinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	Project?: string;
	Quantity?: string;
	RowId?: number;
	Total?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOfferOfferRowV2SingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Bundle?: {
		Revision?: number;
		SubRows?: {
			AccountNumber?: number;
			AmountInBundle?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			DocumentRow?: {
				AccountNumber?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "COOKING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "TUTORING"
					| "OTHERCOSTS";
				Price?: number;
				Project?: string;
				Quantity?: string;
				RowId?: number;
				Total?: number;
				Unit?: string;
				VAT?: number;
				VATCode?: string;
			};
			FixedPrice?: boolean;
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceAdjustment?: boolean;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			SalesPriceInBundle?: number;
			Total?: number;
			Unit?: string;
			UserPrice?: boolean;
			VAT?: number;
			VATCode?: string;
		}[];
	};
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	Project?: string;
	Quantity?: string;
	RowId?: number;
	Total?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOfferOfferRowV2SinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Bundle?: {
		Revision?: number;
		SubRows?: {
			AccountNumber?: number;
			AmountInBundle?: number;
			ArticleNumber?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			DocumentRow?: {
				AccountNumber?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "COOKING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "TUTORING"
					| "OTHERCOSTS";
				Price?: number;
				Project?: string;
				Quantity?: string;
				RowId?: number;
				Total?: number;
				Unit?: string;
				VAT?: number;
				VATCode?: string;
			};
			FixedPrice?: boolean;
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			PriceAdjustment?: boolean;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			SalesPriceInBundle?: number;
			Unit?: string;
			UserPrice?: boolean;
			VAT?: number;
			VATCode?: string;
		}[];
	};
	CostCenter?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "COOKING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "TUTORING"
		| "OTHERCOSTS";
	Price?: number;
	Project?: string;
	Quantity?: string;
	RowId?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOfferOfferSingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExpireDate?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferDate?: string;
	OfferRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderReference?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourReference?: string;
	YourReferenceNumber?: string;
	ZipCode?: string;
}

export interface FortnoxOfferOfferSinglePayloadItem {
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	City?: string;
	Comments?: string;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExpireDate?: string;
	Freight?: number;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	NotCompleted?: boolean;
	OfferDate?: string;
	OfferRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourReference?: string;
	YourReferenceNumber?: string;
	ZipCode?: string;
}

export interface FortnoxOfferOfferSinglePayloadItemWrap {
	Offer: {
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		City?: string;
		Comments?: string;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExpireDate?: string;
		Freight?: number;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		NotCompleted?: boolean;
		OfferDate?: string;
		OfferRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourReference?: string;
		YourReferenceNumber?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOfferOfferV2ListItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExpireDate?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferDate?: string;
	OfferRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "COOKING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "TUTORING"
						| "OTHERCOSTS";
					Price?: number;
					Project?: string;
					Quantity?: string;
					RowId?: number;
					Total?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "COOKING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "TUTORING"
					| "OTHERCOSTS";
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				Quantity?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				Total?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderReference?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	TaxReduction?: number;
	TaxReductionType?: string;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourReference?: string;
	YourReferenceNumber?: string;
	ZipCode?: string;
}

export interface FortnoxOfferOfferV2ListResponseWrap {
	Offers: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExpireDate?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferDate?: string;
		OfferRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						CostCenter?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "COOKING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "TUTORING"
							| "OTHERCOSTS";
						Price?: number;
						Project?: string;
						Quantity?: string;
						RowId?: number;
						Total?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "COOKING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "TUTORING"
						| "OTHERCOSTS";
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					Quantity?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					Total?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderReference?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		TaxReduction?: number;
		TaxReductionType?: string;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourReference?: string;
		YourReferenceNumber?: string;
		ZipCode?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxOfferOfferV2ResponseWrap {
	Offer: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExpireDate?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferDate?: string;
		OfferRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						CostCenter?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "COOKING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "TUTORING"
							| "OTHERCOSTS";
						Price?: number;
						Project?: string;
						Quantity?: string;
						RowId?: number;
						Total?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "COOKING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "TUTORING"
						| "OTHERCOSTS";
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					Quantity?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					Total?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderReference?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourReference?: string;
		YourReferenceNumber?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOfferOfferV2SingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExpireDate?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferDate?: string;
	OfferRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "COOKING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "TUTORING"
						| "OTHERCOSTS";
					Price?: number;
					Project?: string;
					Quantity?: string;
					RowId?: number;
					Total?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "COOKING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "TUTORING"
					| "OTHERCOSTS";
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				Quantity?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				Total?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderReference?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourReference?: string;
	YourReferenceNumber?: string;
	ZipCode?: string;
}

export interface FortnoxOfferOfferV2SinglePayloadItem {
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	City?: string;
	Comments?: string;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExpireDate?: string;
	Freight?: number;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	NotCompleted?: boolean;
	OfferDate?: string;
	OfferRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				CostCenter?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "COOKING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "TUTORING"
						| "OTHERCOSTS";
					Price?: number;
					Project?: string;
					Quantity?: string;
					RowId?: number;
					Total?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "COOKING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "TUTORING"
					| "OTHERCOSTS";
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				Quantity?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		CostCenter?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "COOKING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "TUTORING"
			| "OTHERCOSTS";
		Price?: number;
		Project?: string;
		Quantity?: string;
		RowId?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrganisationNumber?: string;
	OurReference?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourReference?: string;
	YourReferenceNumber?: string;
	ZipCode?: string;
}

export interface FortnoxOfferOfferV2SinglePayloadItemWrap {
	Offer: {
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		City?: string;
		Comments?: string;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExpireDate?: string;
		Freight?: number;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		NotCompleted?: boolean;
		OfferDate?: string;
		OfferRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					CostCenter?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						CostCenter?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "COOKING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "TUTORING"
							| "OTHERCOSTS";
						Price?: number;
						Project?: string;
						Quantity?: string;
						RowId?: number;
						Total?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "COOKING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "TUTORING"
						| "OTHERCOSTS";
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					Quantity?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			CostCenter?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "COOKING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "TUTORING"
				| "OTHERCOSTS";
			Price?: number;
			Project?: string;
			Quantity?: string;
			RowId?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrganisationNumber?: string;
		OurReference?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourReference?: string;
		YourReferenceNumber?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOrderBundleInstanceSingleItem {
	Revision?: number;
	SubRows?: {
		AccountNumber?: number;
		AmountInBundle?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		DocumentRow?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			ReservedQuantity?: string;
			RowId?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		};
		FixedPrice?: boolean;
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		PriceAdjustment?: boolean;
		Project?: string;
		ReservedQuantity?: string;
		RowId?: number;
		SalesPriceInBundle?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Total?: number;
		Unit?: string;
		UserPrice?: boolean;
		VAT?: number;
		VATCode?: string;
	}[];
}

export interface FortnoxOrderBundleInstanceSinglePayloadItem {
	Revision?: number;
	SubRows?: {
		AccountNumber?: number;
		AmountInBundle?: number;
		ArticleNumber?: string;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		DocumentRow?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			StockPointCode?: string;
			StockPointId?: string;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		};
		FixedPrice?: boolean;
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		PriceAdjustment?: boolean;
		Project?: string;
		RowId?: number;
		SalesPriceInBundle?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Unit?: string;
		UserPrice?: boolean;
		VAT?: number;
		VATCode?: string;
	}[];
}

export interface FortnoxOrderBundleSubItemInstanceSingleItem {
	AccountNumber?: number;
	AmountInBundle?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	DocumentRow?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		ReservedQuantity?: string;
		RowId?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	};
	FixedPrice?: boolean;
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	OrderedQuantity?: string;
	Price?: number;
	PriceAdjustment?: boolean;
	Project?: string;
	ReservedQuantity?: string;
	RowId?: number;
	SalesPriceInBundle?: number;
	StockPointCode?: string;
	StockPointId?: string;
	Total?: number;
	Unit?: string;
	UserPrice?: boolean;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOrderBundleSubItemInstanceSinglePayloadItem {
	AccountNumber?: number;
	AmountInBundle?: number;
	ArticleNumber?: string;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	DocumentRow?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		StockPointCode?: string;
		StockPointId?: string;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	};
	FixedPrice?: boolean;
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	OrderedQuantity?: string;
	Price?: number;
	PriceAdjustment?: boolean;
	Project?: string;
	RowId?: number;
	SalesPriceInBundle?: number;
	StockPointCode?: string;
	StockPointId?: string;
	Unit?: string;
	UserPrice?: boolean;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOrderOrderListItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryState?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferReference?: string;
	OrderDate?: string;
	OrderRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		ReservedQuantity?: string;
		RowId?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderType?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	StockPointCode?: string;
	StockPointId?: string;
	TaxReduction?: number;
	TaxReductionType?: string;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	TimeBasisReference?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WarehouseReady?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxOrderOrderListResponseWrap {
	Orders: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryState?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferReference?: string;
		OrderDate?: string;
		OrderRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			ReservedQuantity?: string;
			RowId?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderType?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		StockPointCode?: string;
		StockPointId?: string;
		TaxReduction?: number;
		TaxReductionType?: string;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		TimeBasisReference?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WarehouseReady?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxOrderOrderResponseWrap {
	Order: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryState?: "registration" | "reservation" | "delivery";
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferReference?: string;
		OrderDate?: string;
		OrderRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			ReservedQuantity?: string;
			RowId?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderType?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		StockPointCode?: string;
		StockPointId?: string;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		TimeBasisReference?: number;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WarehouseReady?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOrderOrderRowSingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	ContributionPercent?: string;
	ContributionValue?: string;
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	OrderedQuantity?: string;
	Price?: number;
	Project?: string;
	ReservedQuantity?: string;
	RowId?: number;
	StockPointCode?: string;
	StockPointId?: string;
	Total?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOrderOrderRowSinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	OrderedQuantity?: string;
	Price?: number;
	Project?: string;
	StockPointCode?: string;
	StockPointId?: string;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOrderOrderRowV2SingleItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Bundle?: {
		Revision?: number;
		SubRows?: {
			AccountNumber?: number;
			AmountInBundle?: number;
			ArticleNumber?: string;
			ContributionPercent?: string;
			ContributionValue?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			DocumentRow?: {
				AccountNumber?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				Cost?: number;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				OrderedQuantity?: string;
				Price?: number;
				Project?: string;
				ReservedQuantity?: string;
				RowId?: number;
				StockPointCode?: string;
				StockPointId?: string;
				Total?: number;
				Unit?: string;
				VAT?: number;
				VATCode?: string;
			};
			FixedPrice?: boolean;
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			PriceAdjustment?: boolean;
			Project?: string;
			ReservedQuantity?: string;
			RowId?: number;
			SalesPriceInBundle?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Total?: number;
			Unit?: string;
			UserPrice?: boolean;
			VAT?: number;
			VATCode?: string;
		}[];
	};
	ContributionPercent?: string;
	ContributionValue?: string;
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	OrderedQuantity?: string;
	Price?: number;
	Project?: string;
	ReservedQuantity?: string;
	RowId?: number;
	StockPointCode?: string;
	StockPointId?: string;
	Total?: number;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOrderOrderRowV2SinglePayloadItem {
	AccountNumber?: number;
	ArticleNumber?: string;
	Bundle?: {
		Revision?: number;
		SubRows?: {
			AccountNumber?: number;
			AmountInBundle?: number;
			ArticleNumber?: string;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			DocumentRow?: {
				AccountNumber?: number;
				ArticleNumber?: string;
				Cost?: number;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				OrderedQuantity?: string;
				Price?: number;
				Project?: string;
				StockPointCode?: string;
				StockPointId?: string;
				Unit?: string;
				VAT?: number;
				VATCode?: string;
			};
			FixedPrice?: boolean;
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			PriceAdjustment?: boolean;
			Project?: string;
			RowId?: number;
			SalesPriceInBundle?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Unit?: string;
			UserPrice?: boolean;
			VAT?: number;
			VATCode?: string;
		}[];
	};
	Cost?: number;
	CostCenter?: string;
	DeliveredQuantity?: string;
	Description?: string;
	Discount?: number;
	DiscountType?: "AMOUNT" | "PERCENT";
	HouseWork?: boolean;
	HouseWorkHoursToReport?: number;
	HouseWorkType?:
		| "CONSTRUCTION"
		| "ELECTRICITY"
		| "GLASSMETALWORK"
		| "GROUNDDRAINAGEWORK"
		| "MASONRY"
		| "PAINTINGWALLPAPERING"
		| "HVAC"
		| "MAJORAPPLIANCEREPAIR"
		| "MOVINGSERVICES"
		| "ITSERVICES"
		| "CLEANING"
		| "TEXTILECLOTHING"
		| "SNOWPLOWING"
		| "GARDENING"
		| "BABYSITTING"
		| "OTHERCARE"
		| "OTHERCOSTS"
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE"
		| "HOMEMAINTENANCE"
		| "FURNISHING"
		| "TRANSPORTATIONSERVICES"
		| "WASHINGANDCAREOFCLOTHING";
	OrderedQuantity?: string;
	Price?: number;
	Project?: string;
	RowId?: number;
	StockPointCode?: string;
	StockPointId?: string;
	Unit?: string;
	VAT?: number;
	VATCode?: string;
}

export interface FortnoxOrderOrderSingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryState?: "registration" | "reservation" | "delivery";
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferReference?: string;
	OrderDate?: string;
	OrderRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		ReservedQuantity?: string;
		RowId?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderType?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	StockPointCode?: string;
	StockPointId?: string;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	TimeBasisReference?: number;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WarehouseReady?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxOrderOrderSinglePayloadItem {
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	City?: string;
	Comments?: string;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryState?: "registration" | "reservation" | "delivery";
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	NotCompleted?: boolean;
	OrderDate?: string;
	OrderRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		StockPointCode?: string;
		StockPointId?: string;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	StockPointCode?: string;
	StockPointId?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxOrderOrderSinglePayloadItemWrap {
	Order: {
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		City?: string;
		Comments?: string;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryState?: "registration" | "reservation" | "delivery";
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		NotCompleted?: boolean;
		OrderDate?: string;
		OrderRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			StockPointCode?: string;
			StockPointId?: string;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		StockPointCode?: string;
		StockPointId?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOrderOrderV2ListItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryState?: string;
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferReference?: string;
	OrderDate?: string;
	OrderRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					Cost?: number;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					OrderedQuantity?: string;
					Price?: number;
					Project?: string;
					ReservedQuantity?: string;
					RowId?: number;
					StockPointCode?: string;
					StockPointId?: string;
					Total?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				OrderedQuantity?: string;
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				ReservedQuantity?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				StockPointCode?: string;
				StockPointId?: string;
				Total?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		ReservedQuantity?: string;
		RowId?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderType?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	StockPointCode?: string;
	StockPointId?: string;
	TaxReduction?: number;
	TaxReductionType?: string;
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	TimeBasisReference?: string;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WarehouseReady?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxOrderOrderV2ListResponseWrap {
	Orders: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryState?: string;
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferReference?: string;
		OrderDate?: string;
		OrderRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						Cost?: number;
						CostCenter?: string;
						DeliveredQuantity?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "MAJORAPPLIANCEREPAIR"
							| "MOVINGSERVICES"
							| "ITSERVICES"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "OTHERCOSTS"
							| "SOLARCELLS"
							| "STORAGESELFPRODUCEDELECTRICITY"
							| "CHARGINGSTATIONELECTRICVEHICLE"
							| "HOMEMAINTENANCE"
							| "FURNISHING"
							| "TRANSPORTATIONSERVICES"
							| "WASHINGANDCAREOFCLOTHING";
						OrderedQuantity?: string;
						Price?: number;
						Project?: string;
						ReservedQuantity?: string;
						RowId?: number;
						StockPointCode?: string;
						StockPointId?: string;
						Total?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					OrderedQuantity?: string;
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					ReservedQuantity?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					StockPointCode?: string;
					StockPointId?: string;
					Total?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			ReservedQuantity?: string;
			RowId?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderType?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		StockPointCode?: string;
		StockPointId?: string;
		TaxReduction?: number;
		TaxReductionType?: string;
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		TimeBasisReference?: string;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WarehouseReady?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxOrderOrderV2ResponseWrap {
	Order: {
		"@url"?: string;
		"@urlTaxReductionList"?: string;
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		AdministrationFeeVAT?: number;
		BasisTaxReduction?: number;
		Cancelled?: boolean;
		City?: string;
		Comments?: string;
		ContributionPercent?: number;
		ContributionValue?: number;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryState?: "registration" | "reservation" | "delivery";
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		FreightVAT?: number;
		Gross?: number;
		HouseWork?: boolean;
		InvoiceReference?: string;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		Net?: number;
		NotCompleted?: boolean;
		OfferReference?: string;
		OrderDate?: string;
		OrderRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						ContributionPercent?: string;
						ContributionValue?: string;
						Cost?: number;
						CostCenter?: string;
						DeliveredQuantity?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "MAJORAPPLIANCEREPAIR"
							| "MOVINGSERVICES"
							| "ITSERVICES"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "OTHERCOSTS"
							| "SOLARCELLS"
							| "STORAGESELFPRODUCEDELECTRICITY"
							| "CHARGINGSTATIONELECTRICVEHICLE"
							| "HOMEMAINTENANCE"
							| "FURNISHING"
							| "TRANSPORTATIONSERVICES"
							| "WASHINGANDCAREOFCLOTHING";
						OrderedQuantity?: string;
						Price?: number;
						Project?: string;
						ReservedQuantity?: string;
						RowId?: number;
						StockPointCode?: string;
						StockPointId?: string;
						Total?: number;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					OrderedQuantity?: string;
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					ReservedQuantity?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					StockPointCode?: string;
					StockPointId?: string;
					Total?: number;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			ContributionPercent?: string;
			ContributionValue?: string;
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			ReservedQuantity?: string;
			RowId?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Total?: number;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrderType?: string;
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		RoundOff?: number;
		Sent?: boolean;
		StockPointCode?: string;
		StockPointId?: string;
		TaxReduction?: number;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		TimeBasisReference?: number;
		Total?: number;
		TotalToPay?: number;
		TotalVAT?: number;
		VATIncluded?: boolean;
		WarehouseReady?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxOrderOrderV2SingleItem {
	"@url"?: string;
	"@urlTaxReductionList"?: string;
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	AdministrationFeeVAT?: number;
	BasisTaxReduction?: number;
	Cancelled?: boolean;
	City?: string;
	Comments?: string;
	ContributionPercent?: number;
	ContributionValue?: number;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryState?: "registration" | "reservation" | "delivery";
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	FreightVAT?: number;
	Gross?: number;
	HouseWork?: boolean;
	InvoiceReference?: string;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	Net?: number;
	NotCompleted?: boolean;
	OfferReference?: string;
	OrderDate?: string;
	OrderRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				ContributionPercent?: string;
				ContributionValue?: string;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					ContributionPercent?: string;
					ContributionValue?: string;
					Cost?: number;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					OrderedQuantity?: string;
					Price?: number;
					Project?: string;
					ReservedQuantity?: string;
					RowId?: number;
					StockPointCode?: string;
					StockPointId?: string;
					Total?: number;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				OrderedQuantity?: string;
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				ReservedQuantity?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				StockPointCode?: string;
				StockPointId?: string;
				Total?: number;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		ContributionPercent?: string;
		ContributionValue?: string;
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		ReservedQuantity?: string;
		RowId?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Total?: number;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrderType?: string;
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	RoundOff?: number;
	Sent?: boolean;
	StockPointCode?: string;
	StockPointId?: string;
	TaxReduction?: number;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	TimeBasisReference?: number;
	Total?: number;
	TotalToPay?: number;
	TotalVAT?: number;
	VATIncluded?: boolean;
	WarehouseReady?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxOrderOrderV2SinglePayloadItem {
	Address1?: string;
	Address2?: string;
	AdministrationFee?: number;
	City?: string;
	Comments?: string;
	CopyRemarks?: boolean;
	CostCenter?: string;
	Country?: string;
	Currency?: string;
	CurrencyRate?: number;
	CurrencyUnit?: number;
	CustomerName?: string;
	CustomerNumber: string;
	DeliveryAddress1?: string;
	DeliveryAddress2?: string;
	DeliveryCity?: string;
	DeliveryCountry?: string;
	DeliveryDate?: string;
	DeliveryName?: string;
	DeliveryState?: "registration" | "reservation" | "delivery";
	DeliveryZipCode?: string;
	DocumentNumber?: string;
	EmailInformation?: {
		EmailAddressBCC?: string;
		EmailAddressCC?: string;
		EmailAddressFrom?: string;
		EmailAddressTo?: string;
		EmailBody?: string;
		EmailSubject?: string;
	};
	ExternalInvoiceReference1?: string;
	ExternalInvoiceReference2?: string;
	Freight?: number;
	Labels?: {
		Id?: number;
	}[];
	Language?: string;
	NotCompleted?: boolean;
	OrderDate?: string;
	OrderRows?: {
		AccountNumber?: number;
		ArticleNumber?: string;
		Bundle?: {
			Revision?: number;
			SubRows?: {
				AccountNumber?: number;
				AmountInBundle?: number;
				ArticleNumber?: string;
				CostCenter?: string;
				DeliveredQuantity?: string;
				Description?: string;
				Discount?: number;
				DiscountType?: "AMOUNT" | "PERCENT";
				DocumentRow?: {
					AccountNumber?: number;
					ArticleNumber?: string;
					Cost?: number;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					OrderedQuantity?: string;
					Price?: number;
					Project?: string;
					StockPointCode?: string;
					StockPointId?: string;
					Unit?: string;
					VAT?: number;
					VATCode?: string;
				};
				FixedPrice?: boolean;
				HouseWork?: boolean;
				HouseWorkHoursToReport?: number;
				HouseWorkType?:
					| "CONSTRUCTION"
					| "ELECTRICITY"
					| "GLASSMETALWORK"
					| "GROUNDDRAINAGEWORK"
					| "MASONRY"
					| "PAINTINGWALLPAPERING"
					| "HVAC"
					| "MAJORAPPLIANCEREPAIR"
					| "MOVINGSERVICES"
					| "ITSERVICES"
					| "CLEANING"
					| "TEXTILECLOTHING"
					| "SNOWPLOWING"
					| "GARDENING"
					| "BABYSITTING"
					| "OTHERCARE"
					| "OTHERCOSTS"
					| "SOLARCELLS"
					| "STORAGESELFPRODUCEDELECTRICITY"
					| "CHARGINGSTATIONELECTRICVEHICLE"
					| "HOMEMAINTENANCE"
					| "FURNISHING"
					| "TRANSPORTATIONSERVICES"
					| "WASHINGANDCAREOFCLOTHING";
				OrderedQuantity?: string;
				Price?: number;
				PriceAdjustment?: boolean;
				Project?: string;
				RowId?: number;
				SalesPriceInBundle?: number;
				StockPointCode?: string;
				StockPointId?: string;
				Unit?: string;
				UserPrice?: boolean;
				VAT?: number;
				VATCode?: string;
			}[];
		};
		Cost?: number;
		CostCenter?: string;
		DeliveredQuantity?: string;
		Description?: string;
		Discount?: number;
		DiscountType?: "AMOUNT" | "PERCENT";
		HouseWork?: boolean;
		HouseWorkHoursToReport?: number;
		HouseWorkType?:
			| "CONSTRUCTION"
			| "ELECTRICITY"
			| "GLASSMETALWORK"
			| "GROUNDDRAINAGEWORK"
			| "MASONRY"
			| "PAINTINGWALLPAPERING"
			| "HVAC"
			| "MAJORAPPLIANCEREPAIR"
			| "MOVINGSERVICES"
			| "ITSERVICES"
			| "CLEANING"
			| "TEXTILECLOTHING"
			| "SNOWPLOWING"
			| "GARDENING"
			| "BABYSITTING"
			| "OTHERCARE"
			| "OTHERCOSTS"
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE"
			| "HOMEMAINTENANCE"
			| "FURNISHING"
			| "TRANSPORTATIONSERVICES"
			| "WASHINGANDCAREOFCLOTHING";
		OrderedQuantity?: string;
		Price?: number;
		Project?: string;
		RowId?: number;
		StockPointCode?: string;
		StockPointId?: string;
		Unit?: string;
		VAT?: number;
		VATCode?: string;
	}[];
	OrganisationNumber?: string;
	OurReference?: string;
	OutboundDate?: string;
	Phone1?: string;
	Phone2?: string;
	PriceList?: string;
	PrintTemplate?: string;
	Project?: string;
	Remarks?: string;
	StockPointCode?: string;
	StockPointId?: string;
	TaxReductionType?: "none" | "rot" | "rut" | "green";
	TermsOfDelivery?: string;
	TermsOfPayment?: string;
	VATIncluded?: boolean;
	WayOfDelivery?: string;
	YourOrderNumber?: string;
	YourReference?: string;
	ZipCode?: string;
}

export interface FortnoxOrderOrderV2SinglePayloadItemWrap {
	Order: {
		Address1?: string;
		Address2?: string;
		AdministrationFee?: number;
		City?: string;
		Comments?: string;
		CopyRemarks?: boolean;
		CostCenter?: string;
		Country?: string;
		Currency?: string;
		CurrencyRate?: number;
		CurrencyUnit?: number;
		CustomerName?: string;
		CustomerNumber: string;
		DeliveryAddress1?: string;
		DeliveryAddress2?: string;
		DeliveryCity?: string;
		DeliveryCountry?: string;
		DeliveryDate?: string;
		DeliveryName?: string;
		DeliveryState?: "registration" | "reservation" | "delivery";
		DeliveryZipCode?: string;
		DocumentNumber?: string;
		EmailInformation?: {
			EmailAddressBCC?: string;
			EmailAddressCC?: string;
			EmailAddressFrom?: string;
			EmailAddressTo?: string;
			EmailBody?: string;
			EmailSubject?: string;
		};
		ExternalInvoiceReference1?: string;
		ExternalInvoiceReference2?: string;
		Freight?: number;
		Labels?: {
			Id?: number;
		}[];
		Language?: string;
		NotCompleted?: boolean;
		OrderDate?: string;
		OrderRows?: {
			AccountNumber?: number;
			ArticleNumber?: string;
			Bundle?: {
				Revision?: number;
				SubRows?: {
					AccountNumber?: number;
					AmountInBundle?: number;
					ArticleNumber?: string;
					CostCenter?: string;
					DeliveredQuantity?: string;
					Description?: string;
					Discount?: number;
					DiscountType?: "AMOUNT" | "PERCENT";
					DocumentRow?: {
						AccountNumber?: number;
						ArticleNumber?: string;
						Cost?: number;
						CostCenter?: string;
						DeliveredQuantity?: string;
						Description?: string;
						Discount?: number;
						DiscountType?: "AMOUNT" | "PERCENT";
						HouseWork?: boolean;
						HouseWorkHoursToReport?: number;
						HouseWorkType?:
							| "CONSTRUCTION"
							| "ELECTRICITY"
							| "GLASSMETALWORK"
							| "GROUNDDRAINAGEWORK"
							| "MASONRY"
							| "PAINTINGWALLPAPERING"
							| "HVAC"
							| "MAJORAPPLIANCEREPAIR"
							| "MOVINGSERVICES"
							| "ITSERVICES"
							| "CLEANING"
							| "TEXTILECLOTHING"
							| "SNOWPLOWING"
							| "GARDENING"
							| "BABYSITTING"
							| "OTHERCARE"
							| "OTHERCOSTS"
							| "SOLARCELLS"
							| "STORAGESELFPRODUCEDELECTRICITY"
							| "CHARGINGSTATIONELECTRICVEHICLE"
							| "HOMEMAINTENANCE"
							| "FURNISHING"
							| "TRANSPORTATIONSERVICES"
							| "WASHINGANDCAREOFCLOTHING";
						OrderedQuantity?: string;
						Price?: number;
						Project?: string;
						StockPointCode?: string;
						StockPointId?: string;
						Unit?: string;
						VAT?: number;
						VATCode?: string;
					};
					FixedPrice?: boolean;
					HouseWork?: boolean;
					HouseWorkHoursToReport?: number;
					HouseWorkType?:
						| "CONSTRUCTION"
						| "ELECTRICITY"
						| "GLASSMETALWORK"
						| "GROUNDDRAINAGEWORK"
						| "MASONRY"
						| "PAINTINGWALLPAPERING"
						| "HVAC"
						| "MAJORAPPLIANCEREPAIR"
						| "MOVINGSERVICES"
						| "ITSERVICES"
						| "CLEANING"
						| "TEXTILECLOTHING"
						| "SNOWPLOWING"
						| "GARDENING"
						| "BABYSITTING"
						| "OTHERCARE"
						| "OTHERCOSTS"
						| "SOLARCELLS"
						| "STORAGESELFPRODUCEDELECTRICITY"
						| "CHARGINGSTATIONELECTRICVEHICLE"
						| "HOMEMAINTENANCE"
						| "FURNISHING"
						| "TRANSPORTATIONSERVICES"
						| "WASHINGANDCAREOFCLOTHING";
					OrderedQuantity?: string;
					Price?: number;
					PriceAdjustment?: boolean;
					Project?: string;
					RowId?: number;
					SalesPriceInBundle?: number;
					StockPointCode?: string;
					StockPointId?: string;
					Unit?: string;
					UserPrice?: boolean;
					VAT?: number;
					VATCode?: string;
				}[];
			};
			Cost?: number;
			CostCenter?: string;
			DeliveredQuantity?: string;
			Description?: string;
			Discount?: number;
			DiscountType?: "AMOUNT" | "PERCENT";
			HouseWork?: boolean;
			HouseWorkHoursToReport?: number;
			HouseWorkType?:
				| "CONSTRUCTION"
				| "ELECTRICITY"
				| "GLASSMETALWORK"
				| "GROUNDDRAINAGEWORK"
				| "MASONRY"
				| "PAINTINGWALLPAPERING"
				| "HVAC"
				| "MAJORAPPLIANCEREPAIR"
				| "MOVINGSERVICES"
				| "ITSERVICES"
				| "CLEANING"
				| "TEXTILECLOTHING"
				| "SNOWPLOWING"
				| "GARDENING"
				| "BABYSITTING"
				| "OTHERCARE"
				| "OTHERCOSTS"
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE"
				| "HOMEMAINTENANCE"
				| "FURNISHING"
				| "TRANSPORTATIONSERVICES"
				| "WASHINGANDCAREOFCLOTHING";
			OrderedQuantity?: string;
			Price?: number;
			Project?: string;
			RowId?: number;
			StockPointCode?: string;
			StockPointId?: string;
			Unit?: string;
			VAT?: number;
			VATCode?: string;
		}[];
		OrganisationNumber?: string;
		OurReference?: string;
		OutboundDate?: string;
		Phone1?: string;
		Phone2?: string;
		PriceList?: string;
		PrintTemplate?: string;
		Project?: string;
		Remarks?: string;
		StockPointCode?: string;
		StockPointId?: string;
		TaxReductionType?: "none" | "rot" | "rut" | "green";
		TermsOfDelivery?: string;
		TermsOfPayment?: string;
		VATIncluded?: boolean;
		WayOfDelivery?: string;
		YourOrderNumber?: string;
		YourReference?: string;
		ZipCode?: string;
	};
}

export interface FortnoxPaymentWriteOffSingleItem {
	AccountNumber?: number;
	Amount?: number;
	CostCenter?: string;
	Currency?: string;
	Description?: string;
	Project?: string;
	TransactionInformation?: string;
}

export interface FortnoxPaymentWriteOffSinglePayloadItem {
	AccountNumber?: number;
	Amount?: number;
	CostCenter?: string;
	Currency?: string;
	Description?: string;
	Project?: string;
	TransactionInformation?: string;
}

export interface FortnoxPreDefinedAccountListItemWrap {
	PreDefinedAccounts: {
		"@url"?: string;
		Account: number;
		Name?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxPreDefinedAccountSingleItem {
	"@url"?: string;
	Account: number;
	Name?: string;
}

export interface FortnoxPreDefinedAccountSingleItemWrap {
	PreDefinedAccount: {
		"@url"?: string;
		Account: number;
		Name?: string;
	};
}

export interface FortnoxPreDefinedAccountSinglePayloadItem {
	Account: number;
	Name?: string;
}

export interface FortnoxPreDefinedAccountSinglePayloadItemWrap {
	PreDefinedAccount: {
		Account: number;
		Name?: string;
	};
}

export interface FortnoxPriceListItem {
	"@url"?: string;
	ArticleNumber: string;
	Date?: string;
	FromQuantity?: number;
	Percent?: number;
	Price?: number;
	PriceList: string;
}

export interface FortnoxPriceListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	Prices: {
		"@url"?: string;
		ArticleNumber: string;
		Date?: string;
		FromQuantity?: number;
		Percent?: number;
		Price?: number;
		PriceList: string;
	}[];
}

export interface FortnoxPriceListListItemWrap {
	PriceLists: {
		"@url"?: string;
		Code: string;
		Comments?: string;
		Description: string;
		PreSelected?: boolean;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxPriceListSingleItem {
	"@url"?: string;
	Code: string;
	Comments?: string;
	Description: string;
	PreSelected?: boolean;
}

export interface FortnoxPriceListSingleItemWrap {
	PriceList: {
		"@url"?: string;
		Code: string;
		Comments?: string;
		Description: string;
		PreSelected?: boolean;
	};
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxPriceListSinglePayloadItem {
	Code: string;
	Comments?: string;
	Description: string;
	PreSelected?: boolean;
}

export interface FortnoxPriceListSinglePayloadItemWrap {
	PriceList: {
		Code: string;
		Comments?: string;
		Description: string;
		PreSelected?: boolean;
	};
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxPriceSingleItem {
	"@url"?: string;
	ArticleNumber: string;
	Date?: string;
	FromQuantity?: number;
	Percent?: number;
	Price?: number;
	PriceList: string;
}

export interface FortnoxPriceSingleItemWrap {
	Price: {
		"@url"?: string;
		ArticleNumber: string;
		Date?: string;
		FromQuantity?: number;
		Percent?: number;
		Price?: number;
		PriceList: string;
	};
}

export interface FortnoxPriceSinglePayloadItem {
	ArticleNumber: string;
	Date?: string;
	FromQuantity?: number;
	Percent?: number;
	Price?: number;
	PriceList: string;
}

export interface FortnoxPriceSinglePayloadItemWrap {
	Price: {
		ArticleNumber: string;
		Date?: string;
		FromQuantity?: number;
		Percent?: number;
		Price?: number;
		PriceList: string;
	};
}

export interface FortnoxPrintTemplateListItemWrap {
	PrintTemplates: {
		Name?: string;
		Template: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxPrintTemplateSingleItem {
	Name?: string;
	Template: string;
}

export interface FortnoxProjectProjectListItem {
	"@url"?: string;
	Comments?: string;
	ContactPerson?: string;
	Description: string;
	EndDate?: string;
	ProjectLeader?: string;
	ProjectNumber?: string;
	StartDate?: string;
	Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED";
}

export interface FortnoxProjectProjectListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	Projects: {
		"@url"?: string;
		Comments?: string;
		ContactPerson?: string;
		Description: string;
		EndDate?: string;
		ProjectLeader?: string;
		ProjectNumber?: string;
		StartDate?: string;
		Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED";
	}[];
}

export interface FortnoxProjectProjectSingleItem {
	"@url"?: string;
	Comments?: string;
	ContactPerson?: string;
	Description: string;
	EndDate?: string;
	ProjectLeader?: string;
	ProjectNumber?: string;
	StartDate?: string;
	Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED";
}

export interface FortnoxProjectProjectSingleItemWrap {
	Project: {
		"@url"?: string;
		Comments?: string;
		ContactPerson?: string;
		Description: string;
		EndDate?: string;
		ProjectLeader?: string;
		ProjectNumber?: string;
		StartDate?: string;
		Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED";
	};
}

export interface FortnoxProjectProjectSinglePayloadItem {
	Comments?: string;
	ContactPerson?: string;
	Description: string;
	EndDate?: string;
	ProjectLeader?: string;
	ProjectNumber?: string;
	StartDate?: string;
	Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED";
}

export interface FortnoxProjectProjectSinglePayloadItemWrap {
	Project: {
		Comments?: string;
		ContactPerson?: string;
		Description: string;
		EndDate?: string;
		ProjectLeader?: string;
		ProjectNumber?: string;
		StartDate?: string;
		Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED";
	};
}

export interface FortnoxSinvoiceExternalUrlConnectionSingleItem {
	"@url"?: string;
	ExternalURLConnection?: string;
	Id?: number;
	SupplierInvoiceNumber?: number;
	Url?: string;
}

export interface FortnoxSinvoiceExternalUrlConnectionSingleItemWrap {
	SupplierInvoiceExternalURLConnection: {
		"@url"?: string;
		ExternalURLConnection?: string;
		Id?: number;
		SupplierInvoiceNumber?: number;
		Url?: string;
	};
}

export interface FortnoxSinvoiceExternalUrlConnectionSinglePayloadItem {
	ExternalURLConnection?: string;
	SupplierInvoiceNumber?: number;
}

export interface FortnoxTaxReductionAmountSingleItem {
	AskedAmount: number;
	WorkType:
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE";
}

export interface FortnoxTaxReductionAmountSinglePayloadItem {
	AskedAmount: number;
	WorkType:
		| "SOLARCELLS"
		| "STORAGESELFPRODUCEDELECTRICITY"
		| "CHARGINGSTATIONELECTRICVEHICLE";
}

export interface FortnoxTaxReductionCreatePayload {
	ApprovedAmount?: number;
	AskedAmount: number;
	BilledAmount?: number;
	CustomerName: string;
	Id?: number;
	PropertyDesignation?: string;
	ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
	ReferenceNumber: string;
	RequestSent?: boolean;
	ResidenceAssociationOrganisationNumber?: string;
	SocialSecurityNumber: string;
	TaxReductionAmounts?: {
		AskedAmount: number;
		WorkType:
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE";
	}[];
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
}

export interface FortnoxTaxReductionCreatePayloadWrap {
	TaxReduction: {
		ApprovedAmount?: number;
		AskedAmount: number;
		BilledAmount?: number;
		CustomerName: string;
		Id?: number;
		PropertyDesignation?: string;
		ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
		ReferenceNumber: string;
		RequestSent?: boolean;
		ResidenceAssociationOrganisationNumber?: string;
		SocialSecurityNumber: string;
		TaxReductionAmounts?: {
			AskedAmount: number;
			WorkType:
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE";
		}[];
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
	};
}

export interface FortnoxTaxReductionListItem {
	"@url"?: string;
	ApprovedAmount?: number;
	AskedAmount?: number;
	BilledAmount?: number;
	CustomerName: string;
	Id?: number;
	PropertyDesignation?: string;
	ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
	ReferenceNumber: number;
	RequestSent?: string;
	ResidenceAssociationOrganisationNumber?: string;
	SocialSecurityNumber: string;
	TaxReductionAmounts?: {
		AskedAmount: number;
		WorkType:
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE";
	}[];
	TypeOfReduction?: string;
	VoucherNumber?: string;
	VoucherSeries?: string;
	VoucherYear?: string;
	WorkType?: string;
}

export interface FortnoxTaxReductionListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	TaxReductions: {
		"@url"?: string;
		ApprovedAmount?: number;
		AskedAmount?: number;
		BilledAmount?: number;
		CustomerName: string;
		Id?: number;
		PropertyDesignation?: string;
		ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
		ReferenceNumber: number;
		RequestSent?: string;
		ResidenceAssociationOrganisationNumber?: string;
		SocialSecurityNumber: string;
		TaxReductionAmounts?: {
			AskedAmount: number;
			WorkType:
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE";
		}[];
		TypeOfReduction?: string;
		VoucherNumber?: string;
		VoucherSeries?: string;
		VoucherYear?: string;
		WorkType?: string;
	}[];
}

export interface FortnoxTaxReductionSingleItem {
	"@url"?: string;
	ApprovedAmount?: number;
	AskedAmount: number;
	BilledAmount?: number;
	CustomerName: string;
	Id?: number;
	PropertyDesignation?: string;
	ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
	ReferenceNumber: string;
	RequestSent?: boolean;
	ResidenceAssociationOrganisationNumber?: string;
	SocialSecurityNumber: string;
	TaxReductionAmounts?: {
		AskedAmount: number;
		WorkType:
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE";
	}[];
	TypeOfReduction?: string;
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
	WorkType?: string;
}

export interface FortnoxTaxReductionSingleItemWrap {
	TaxReduction: {
		"@url"?: string;
		ApprovedAmount?: number;
		AskedAmount: number;
		BilledAmount?: number;
		CustomerName: string;
		Id?: number;
		PropertyDesignation?: string;
		ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
		ReferenceNumber: string;
		RequestSent?: boolean;
		ResidenceAssociationOrganisationNumber?: string;
		SocialSecurityNumber: string;
		TaxReductionAmounts?: {
			AskedAmount: number;
			WorkType:
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE";
		}[];
		TypeOfReduction?: string;
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
		WorkType?: string;
	};
}

export interface FortnoxTaxReductionUpdatePayload {
	ApprovedAmount?: number;
	AskedAmount: number;
	BilledAmount?: number;
	CustomerName: string;
	Id?: number;
	PropertyDesignation?: string;
	ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
	ReferenceNumber: string;
	RequestSent?: boolean;
	ResidenceAssociationOrganisationNumber?: string;
	SocialSecurityNumber: string;
	TaxReductionAmounts?: {
		AskedAmount: number;
		WorkType:
			| "SOLARCELLS"
			| "STORAGESELFPRODUCEDELECTRICITY"
			| "CHARGINGSTATIONELECTRICVEHICLE";
	}[];
	VoucherNumber?: number;
	VoucherSeries?: string;
	VoucherYear?: number;
}

export interface FortnoxTaxReductionUpdatePayloadWrap {
	TaxReduction: {
		ApprovedAmount?: number;
		AskedAmount: number;
		BilledAmount?: number;
		CustomerName: string;
		Id?: number;
		PropertyDesignation?: string;
		ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE";
		ReferenceNumber: string;
		RequestSent?: boolean;
		ResidenceAssociationOrganisationNumber?: string;
		SocialSecurityNumber: string;
		TaxReductionAmounts?: {
			AskedAmount: number;
			WorkType:
				| "SOLARCELLS"
				| "STORAGESELFPRODUCEDELECTRICITY"
				| "CHARGINGSTATIONELECTRICVEHICLE";
		}[];
		VoucherNumber?: number;
		VoucherSeries?: string;
		VoucherYear?: number;
	};
}

export interface FortnoxTermsOfPaymentListItem {
	"@url"?: string;
	Code: string;
	Description: string;
}

export interface FortnoxTermsOfPaymentListItemWrap {
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
	TermsOfPayments: {
		"@url"?: string;
		Code: string;
		Description: string;
	}[];
}

export interface FortnoxTermsOfPaymentSingleItem {
	"@url"?: string;
	Code: string;
	Description: string;
}

export interface FortnoxTermsOfPaymentSingleItemWrap {
	TermsOfPayment: {
		"@url"?: string;
		Code: string;
		Description: string;
	};
}

export interface FortnoxTermsOfPaymentSinglePayloadItem {
	Code: string;
	Description: string;
}

export interface FortnoxTermsOfPaymentSinglePayloadItemWrap {
	TermsOfPayment: {
		Code: string;
		Description: string;
	};
}

export interface FortnoxUnitListItemWrap {
	Units: {
		"@url"?: string;
		Code: string;
		CodeEnglish?: string;
		Description: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxUnitSingleItem {
	"@url"?: string;
	Code: string;
	CodeEnglish?: string;
	Description: string;
}

export interface FortnoxUnitSingleItemWrap {
	Unit: {
		"@url"?: string;
		Code: string;
		CodeEnglish?: string;
		Description: string;
	};
}

export interface FortnoxUnitSinglePayloadItem {
	Code: string;
	CodeEnglish?: string;
	Description: string;
}

export interface FortnoxUnitSinglePayloadItemWrap {
	Unit: {
		Code: string;
		CodeEnglish?: string;
		Description: string;
	};
}

export interface FortnoxVacationDebtBasisVacationDebtBasisEmployeeSingleItem {
	DaysEarned?: number;
	DaysSaved?: number;
	DaysUnused?: number;
	DebtAdvance?: number;
	DebtEarned?: number;
	DebtSaved?: number;
	DebtUnused?: number;
	EmployeeId: string;
	EmployeeName?: string;
	TotalDebtEmployee?: number;
	TotalDebtEmployerContribution?: number;
	VariableEarned?: number;
	VariableUnused?: number;
	WageEarned?: number;
	WageSaved?: number;
	WageUnused?: number;
}

export interface FortnoxWayOfDeliveryListItemWrap {
	WayOfDeliveries: {
		"@url"?: string;
		Code: string;
		Description?: string;
		DescriptionEnglish?: string;
	}[];
	MetaInformation: {
		"@CurrentPage": number;
		"@TotalPages": number;
		"@TotalResources": number;
	};
}

export interface FortnoxWayOfDeliverySingleItem {
	"@url"?: string;
	Code: string;
	Description?: string;
	DescriptionEnglish?: string;
}

export interface FortnoxWayOfDeliverySingleItemWrap {
	WayOfDelivery: {
		"@url"?: string;
		Code: string;
		Description?: string;
		DescriptionEnglish?: string;
	};
}

export interface FortnoxWayOfDeliverySinglePayloadItem {
	Code: string;
	Description?: string;
	DescriptionEnglish?: string;
}

export interface FortnoxWayOfDeliverySinglePayloadItemWrap {
	WayOfDelivery: {
		Code: string;
		Description?: string;
		DescriptionEnglish?: string;
	};
}

export interface GoFnoxSeFnxFinancialTransactionsApiBankfeedsV1Reference {
	type?:
		| "end-to-end-id"
		| "message"
		| "ocr"
		| "total"
		| "amount"
		| "balance"
		| "demandFee"
		| "taxReduction"
		| "invoice-id"
		| "credit-id"
		| "creditor-account"
		| "debitor-account"
		| "iban"
		| "bankgiro"
		| "plusgiro"
		| "bban"
		| "customer-number"
		| "invoice-number"
		| "swish-number"
		| "account"
		| "name"
		| "debitor-name"
		| "creditor-name"
		| "currency-diff"
		| "your-order-number"
		| "attachment"
		| "date"
		| "account-number"
		| "city"
		| "country"
		| "mcc"
		| "card-id";
	value?: string;
}

export interface GoFnoxSeFnxFinancialTransactionsApiBankfeedsV1Transaction {
	accountID?: string;
	amount?: number;
	amountCurrency?: number;
	balance?: {
		amount?: number;
		currency?: string;
	};
	cardID?: string;
	currency?: string;
	currencyRate?: number;
	direction?: "in" | "out";
	iban?: string;
	id?: string;
	paymentDate?: {
		"time.Time"?: string;
	};
	references?: {
		type?:
			| "end-to-end-id"
			| "message"
			| "ocr"
			| "total"
			| "amount"
			| "balance"
			| "demandFee"
			| "taxReduction"
			| "invoice-id"
			| "credit-id"
			| "creditor-account"
			| "debitor-account"
			| "iban"
			| "bankgiro"
			| "plusgiro"
			| "bban"
			| "customer-number"
			| "invoice-number"
			| "swish-number"
			| "account"
			| "name"
			| "debitor-name"
			| "creditor-name"
			| "currency-diff"
			| "your-order-number"
			| "attachment"
			| "date"
			| "account-number"
			| "city"
			| "country"
			| "mcc"
			| "card-id";
		value?: string;
	}[];
	responseCode?: string;
	responseCodeDescription?: string;
	settlementDate?: {
		"time.Time"?: string;
	};
	status?: string;
	type?: string;
}

export interface IntegrationDeveloperIntegrationSalesResponse {
	amount?: number;
	date?: string;
	orderId?: string;
	tenantId?: string;
	type?: string;
}

export interface IntegrationDeveloperRatingDTO {
	comment?: string;
	companyEmployeeRange?: string;
	companyName?: string;
	created?: string;
	integrationId?: number;
	isMyRating?: boolean;
	rating?: number;
	ratingId?: number;
	response?: {
		comment?: string;
		created?: string;
		updated?: string;
	};
	updated?: string;
}

export interface IntegrationDeveloperRatingResponseDTO {
	comment?: string;
	created?: string;
	updated?: string;
}

export interface IntegrationDeveloperTenantPartnerInformationDTO {
	partner?: string;
	tenantId?: number;
}

export interface IntegrationDeveloperUserMappingDTO {
	externalSourceId?: string;
	status?: string;
	tenantId?: number;
}

export interface IntegrationDeveloperUsersResponse {
	activationTime?: string;
	email?: string;
	externalSourceId?: string;
	name?: string;
	userType?: string;
}

export interface IntegrationDeveloperWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface IntegrationPartnerAppSalesPurchase {
	amount?: number;
	identifier?: string;
	purchaseTime?: {};
}

export interface IntegrationPartnerAppSalesResponse {
	appId?: string;
	tenants?: {
		purchases?: {
			amount?: number;
			identifier?: string;
			purchaseTime?: {};
		}[];
		tenantId?: string;
		terminations?: {
			amount?: number;
			identifier?: string;
			onCancellationTime?: {};
		}[];
		users?: {
			activationTime?: {};
			email?: string;
			externalSourceId?: string;
			name?: string;
			userType?: string;
		}[];
	}[];
}

export interface IntegrationPartnerAppSalesTenantData {
	purchases?: {
		amount?: number;
		identifier?: string;
		purchaseTime?: {};
	}[];
	tenantId?: string;
	terminations?: {
		amount?: number;
		identifier?: string;
		onCancellationTime?: {};
	}[];
	users?: {
		activationTime?: {};
		email?: string;
		externalSourceId?: string;
		name?: string;
		userType?: string;
	}[];
}

export interface IntegrationPartnerAppSalesTermination {
	amount?: number;
	identifier?: string;
	onCancellationTime?: {};
}

export interface IntegrationPartnerAppSalesUserData {
	activationTime?: {};
	email?: string;
	externalSourceId?: string;
	name?: string;
	userType?: string;
}

export interface IntegrationPartnerWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface JsonDate {
	"time.Time"?: string;
}

export interface PartnerApiAddedIntegration {
	accessToken?: string;
	authorizationCode?: string;
	clientId?: string;
	status?: string;
}

export interface PartnerApiCompanyInformation {
	companyName?: string;
	contract?: string;
	organizationNumber?: string;
	tenantId?: number;
}

export interface PartnerApiFetchedIntegration {
	clientId?: string;
	name?: string;
}

export interface PartnerApiPartnerClientAuthorizationRequest {
	clientId?: string;
	clientTenantId?: number;
	redirectUri?: string;
	scopes?: string;
}

export interface PartnerApiWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface TimeReportingArticleRegistration {
	createdBy?: string;
	createdTime?: string;
	documentId?: number;
	documentType?: "order" | "invoice";
	id?: string;
	invoiceBasisId?: number;
	invoiceText?: string;
	item?: {
		active?: boolean;
		description?: string;
		id?: string;
		isStock?: boolean;
		purchasePrice?: number;
		salesPrices?: {
			list?: string;
			price?: number;
		}[];
		type?: "SERVICE" | "STOCK";
		unit?: string;
	};
	nonInvoiceable?: boolean;
	note?: string;
	orderIndex?: number;
	ownerId?: string;
	timeLocked?: boolean;
	totalQuantity?: number;
	unitCost?: number;
	unitPrice?: number;
}

export interface TimeReportingBaseArticleRegistration {
	articleRegistrations?: {
		createdBy?: string;
		createdTime?: string;
		documentId?: number;
		documentType?: "order" | "invoice";
		id?: string;
		invoiceBasisId?: number;
		invoiceText?: string;
		item?: {
			active?: boolean;
			description?: string;
			id?: string;
			isStock?: boolean;
			purchasePrice?: number;
			salesPrices?: {
				list?: string;
				price?: number;
			}[];
			type?: "SERVICE" | "STOCK";
			unit?: string;
		};
		nonInvoiceable?: boolean;
		note?: string;
		orderIndex?: number;
		ownerId?: string;
		timeLocked?: boolean;
		totalQuantity?: number;
		unitCost?: number;
		unitPrice?: number;
	}[];
	costCenter?: {
		active?: string;
		id?: string;
		name?: string;
	};
	createdTime?: string;
	customer: {
		accountManager?: string;
		active?: boolean;
		defaultProjectId?: string;
		deleted?: boolean;
		id?: string;
		invoiceCity?: string;
		invoiceZipCode?: string;
		isBusiness?: number;
		name?: string;
		number?: string;
		priceList?: string;
		propertyDesignation?: string;
	};
	id?: string;
	ownerId?: string;
	project?: {
		description?: string;
		endDate?: string;
		id?: string;
		invoicedAmount?: number;
		orderAmount?: number;
		orderTime?: number;
		projectLeader?: string;
		startDate?: string;
		status?: number;
		totalAmountInInvoices?: number;
	};
	purchaseDate: string;
	registeredArticle?: {
		createdBy?: string;
		createdTime?: string;
		documentId?: number;
		documentType?: "order" | "invoice";
		id?: string;
		invoiceBasisId?: number;
		invoiceText?: string;
		item?: {
			active?: boolean;
			description?: string;
			id?: string;
			isStock?: boolean;
			purchasePrice?: number;
			salesPrices?: {
				list?: string;
				price?: number;
			}[];
			type?: "SERVICE" | "STOCK";
			unit?: string;
		};
		nonInvoiceable?: boolean;
		note?: string;
		orderIndex?: number;
		ownerId?: string;
		timeLocked?: boolean;
		totalQuantity?: number;
		unitCost?: number;
		unitPrice?: number;
	};
	registrationType?: "WORK" | "ABSENCE" | "ARTICLE";
	version?: number;
}

export interface TimeReportingDetailedRegistration {
	chargeHours?: number;
	childId?: string;
	costCenter?: {
		active?: string;
		id?: string;
		name?: string;
	};
	createdBy?: string;
	createdTime?: string;
	customer?: {
		accountManager?: string;
		active?: boolean;
		defaultProjectId?: string;
		deleted?: boolean;
		id?: string;
		invoiceCity?: string;
		invoiceZipCode?: string;
		isBusiness?: number;
		name?: string;
		number?: string;
		priceList?: string;
		propertyDesignation?: string;
	};
	documentId?: number;
	documentType?: "order" | "invoice";
	id?: string;
	invoiceBasisId?: number;
	invoiceText?: string;
	nonInvoiceable?: boolean;
	note?: string;
	project?: {
		description?: string;
		endDate?: string;
		id?: string;
		invoicedAmount?: number;
		orderAmount?: number;
		orderTime?: number;
		projectLeader?: string;
		startDate?: string;
		status?: number;
		totalAmountInInvoices?: number;
	};
	registrationCode: {
		active?: boolean;
		code: string;
		costMultiplier?: number;
		id?: string;
		name?: string;
		priceMultiplier?: number;
		type: "WORK" | "ABSENCE";
	};
	service?: {
		active?: boolean;
		description?: string;
		id?: string;
		isStock?: boolean;
		purchasePrice?: number;
		salesPrices?: {
			list?: string;
			price?: number;
		}[];
		type?: "SERVICE" | "STOCK";
		unit?: string;
	};
	startTime?: string;
	stopTime?: string;
	unitCost?: number;
	unitPrice?: number;
	updatedBy?: string;
	userId?: string;
	workedDate: string;
	workedHours?: number;
}

export interface TimeReportingRegistrationCode {
	active?: boolean;
	code: string;
	costMultiplier?: number;
	id?: string;
	name?: string;
	priceMultiplier?: number;
	type: "WORK" | "ABSENCE";
}

export interface TimeReportingTRCostCenter {
	active?: string;
	id?: string;
	name?: string;
}

export interface TimeReportingTRCustomer {
	accountManager?: string;
	active?: boolean;
	defaultProjectId?: string;
	deleted?: boolean;
	id?: string;
	invoiceCity?: string;
	invoiceZipCode?: string;
	isBusiness?: number;
	name?: string;
	number?: string;
	priceList?: string;
	propertyDesignation?: string;
}

export interface TimeReportingTRItem {
	active?: boolean;
	description?: string;
	id?: string;
	isStock?: boolean;
	purchasePrice?: number;
	salesPrices?: {
		list?: string;
		price?: number;
	}[];
	type?: "SERVICE" | "STOCK";
	unit?: string;
}

export interface TimeReportingTRItemPrice {
	list?: string;
	price?: number;
}

export interface TimeReportingTRProject {
	description?: string;
	endDate?: string;
	id?: string;
	invoicedAmount?: number;
	orderAmount?: number;
	orderTime?: number;
	projectLeader?: string;
	startDate?: string;
	status?: number;
	totalAmountInInvoices?: number;
}

export interface TimeReportingWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface TodosWebException {
	error?: string;
	id?: string;
	message?: string;
}

export interface V1Balance {
	amount?: number;
	currency?: string;
}

export interface V1Date {
	"time.Time"?: string;
}

export type V1Direction = "in" | "out";

export type V1ReferenceType =
	| "end-to-end-id"
	| "message"
	| "ocr"
	| "total"
	| "amount"
	| "balance"
	| "demandFee"
	| "taxReduction"
	| "invoice-id"
	| "credit-id"
	| "creditor-account"
	| "debitor-account"
	| "iban"
	| "bankgiro"
	| "plusgiro"
	| "bban"
	| "customer-number"
	| "invoice-number"
	| "swish-number"
	| "account"
	| "name"
	| "debitor-name"
	| "creditor-name"
	| "currency-diff"
	| "your-order-number"
	| "attachment"
	| "date"
	| "account-number"
	| "city"
	| "country"
	| "mcc"
	| "card-id";

export interface WarehouseAverageCost {
	averageCostInSEK?: number;
	itemId?: string;
	stockPointId?: string;
}

export interface WarehouseCurrency {
	currency: string;
	rate: number;
	unit?: number;
}

export interface WarehouseCustomDocumentType {
	category: "INBOUND" | "OUTBOUND";
	referenceType: string;
}

export interface WarehouseCustomInboundDocument {
	currency?: {
		currency: string;
		rate: number;
		unit?: number;
	};
	date: string;
	id?: string;
	note?: string;
	rows: {
		batch?: string;
		costCenterCode?: string;
		directCost?: number;
		freightCost?: number;
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		otherCost?: number;
		projectId?: string;
		quantity: number;
		rowId?: number;
		stockLocationCode?: string;
		stockLocationId?: string;
		stockPointCode?: string;
		stockPointId?: string;
	}[];
	type?: string;
	voided?: boolean;
	warehouseReady?: boolean;
}

export interface WarehouseCustomInboundDocumentRow {
	batch?: string;
	costCenterCode?: string;
	directCost?: number;
	freightCost?: number;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	otherCost?: number;
	projectId?: string;
	quantity: number;
	rowId?: number;
	stockLocationCode?: string;
	stockLocationId?: string;
	stockPointCode?: string;
	stockPointId?: string;
}

export interface WarehouseCustomOutboundDocument {
	averageCosts?: {
		averageCostInSEK?: number;
		itemId?: string;
		stockPointId?: string;
	}[];
	date: string;
	deliveryState: "registration" | "reservation" | "delivery";
	forcedDelivery?: boolean;
	id?: string;
	note?: string;
	referenceType?: string;
	rows: {
		costCenterCode?: string;
		deliveredQuantity?: number;
		forcedQuantity?: number;
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		projectId?: string;
		quantity: number;
		reservedQuantity?: number;
		rowId?: number;
		stockLocationId?: string;
		stockPointId?: string;
	}[];
	voided?: boolean;
	warehouseReady?: boolean;
}

export interface WarehouseCustomOutboundDocumentRow {
	costCenterCode?: string;
	deliveredQuantity?: number;
	forcedQuantity?: number;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	projectId?: string;
	quantity: number;
	reservedQuantity?: number;
	rowId?: number;
	stockLocationId?: string;
	stockPointId?: string;
}

export interface WarehouseDocumentReference {
	id?: string;
	type?: string;
}

export interface WarehouseIncomingGoods {
	completed?: boolean;
	costCenterCode?: string;
	date?: string;
	deliveryNoteId: string;
	hasDeliveryNote?: boolean;
	id?: number;
	note?: string;
	projectId?: string;
	released?: boolean;
	rows?: {
		backOrderQuantity: number;
		batch?: string;
		costCenterCode?: string;
		directCost?: number;
		id?: string;
		invoicedQuantity: number;
		isStockItem?: boolean;
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		orderedQuantity: number;
		projectId?: string;
		purchaseOrderId?: number;
		purchaseOrderRowId?: string;
		receivedQuantity: number;
		remainingOrderedQuantity?: number;
		rowOrder?: number;
		stockLocationCode?: string;
		stockLocationId?: string;
		stockLocationName?: string;
		stockPointCode?: string;
		stockPointId?: string;
		stockPointName?: string;
		takenQuantity: number;
	}[];
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
	supplierName?: string;
	supplierNumber?: string;
	voided?: boolean;
}

export interface WarehouseIncomingGoodsListRow {
	completed?: boolean;
	date?: string;
	deliveryNoteId?: string;
	hasDeliveryNote?: boolean;
	id?: number;
	note?: string;
	released?: boolean;
	stockPointId?: string;
	supplierName?: string;
	supplierNumber?: string;
	unmatchedValue?: number;
	voided?: boolean;
}

export interface WarehouseIncomingGoodsRow {
	backOrderQuantity: number;
	batch?: string;
	costCenterCode?: string;
	directCost?: number;
	id?: string;
	invoicedQuantity: number;
	isStockItem?: boolean;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	orderedQuantity: number;
	projectId?: string;
	purchaseOrderId?: number;
	purchaseOrderRowId?: string;
	receivedQuantity: number;
	remainingOrderedQuantity?: number;
	rowOrder?: number;
	stockLocationCode?: string;
	stockLocationId?: string;
	stockLocationName?: string;
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
	takenQuantity: number;
}

export interface WarehouseManualDocument {
	date?: string;
	deliveryId?: number;
	entityId?: string;
	note?: string;
	released?: boolean;
	type?: "Inbound" | "Outbound" | "StockTransfer";
	voided?: boolean;
}

export interface WarehouseManualInboundDocument {
	currency: string;
	currencyRate: number;
	currencyUnit?: number;
	date: string;
	id?: number;
	note?: string;
	released?: boolean;
	/**
	 * @minItems 1
	 * @maxItems 2147483647
	 */
	rows: [
		{
			batch?: string;
			costCenterCode?: string;
			directCost?: number;
			freightCost?: number;
			itemDescription?: string;
			itemId: string;
			itemUnit?: string;
			otherCost?: number;
			projectId?: string;
			quantity: number;
			rowId?: number;
			stockLocationCode?: string;
			stockLocationId?: string;
			stockLocationName?: string;
			stockPointCode?: string;
			stockPointId?: string;
			stockPointName?: string;
		},
		...{
			batch?: string;
			costCenterCode?: string;
			directCost?: number;
			freightCost?: number;
			itemDescription?: string;
			itemId: string;
			itemUnit?: string;
			otherCost?: number;
			projectId?: string;
			quantity: number;
			rowId?: number;
			stockLocationCode?: string;
			stockLocationId?: string;
			stockLocationName?: string;
			stockPointCode?: string;
			stockPointId?: string;
			stockPointName?: string;
		}[],
	];
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
	voided?: boolean;
}

export interface WarehouseManualInboundDocumentPatch {
	note?: string;
}

export interface WarehouseManualInboundDocumentRow {
	batch?: string;
	costCenterCode?: string;
	directCost?: number;
	freightCost?: number;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	otherCost?: number;
	projectId?: string;
	quantity: number;
	rowId?: number;
	stockLocationCode?: string;
	stockLocationId?: string;
	stockLocationName?: string;
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
}

export interface WarehouseManualOutboundDocument {
	date: string;
	id?: number;
	note?: string;
	released?: boolean;
	/**
	 * @maxItems 2147483647
	 */
	rows: {
		costCenterCode?: string;
		deliveredQuantity?: number;
		forcedQuantity?: number;
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		projectId?: string;
		quantity: number;
		stockLocationCode?: string;
		stockLocationId?: string;
		stockLocationName?: string;
		stockPointCode?: string;
		stockPointId?: string;
		stockPointName?: string;
	}[];
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
	voided?: boolean;
}

export interface WarehouseManualOutboundDocumentPatch {
	note?: string;
}

export interface WarehouseManualOutboundDocumentRow {
	costCenterCode?: string;
	deliveredQuantity?: number;
	forcedQuantity?: number;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	projectId?: string;
	quantity: number;
	stockLocationCode?: string;
	stockLocationId?: string;
	stockLocationName?: string;
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
}

export interface WarehousePackageItem {
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	quantityRequired: number;
	quantityReserved?: number;
	totalQuantityRequired?: number;
}

export interface WarehousePartialPurchaseOrder {
	deliveryDate?: string;
	internalReference?: string;
	messageToSupplier?: string;
	note?: string;
	supplierName?: string;
}

export interface WarehouseProductionOrder {
	batch?: string;
	costCenterCode?: string;
	documentState?: "completed" | "voided";
	id?: number;
	inboundStockLocationId?: string;
	inboundStockPointId?: string;
	itemDescription?: string;
	itemId?: string;
	itemUnit?: string;
	note?: string;
	outboundStockPointId?: string;
	packageItems?: {
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		quantityRequired: number;
		quantityReserved?: number;
		totalQuantityRequired?: number;
	}[];
	productionDate?: string;
	productionState: "registered" | "reserved" | "ongoing";
	projectId?: string;
	quantity: number;
	startDate: string;
}

export interface WarehouseProductionOrderPatch {
	note?: string;
}

export interface WarehousePurchaseOrder {
	confirmationEmail?: string;
	costCenterCode?: string;
	currencyCode: string;
	currencyRate: number;
	currencyUnit?: number;
	customerId?: string;
	customerName?: string;
	customerNumber?: string;
	deliveryAddress: string;
	deliveryAddress2?: string;
	deliveryCity: string;
	deliveryCountryCode?: string;
	deliveryDate?: string;
	deliveryName: string;
	deliveryZipCode: string;
	dropship?: boolean;
	id?: number;
	internalReference?: string;
	languageCode?: string;
	manuallyCompleted?: boolean;
	messageToSupplier?: string;
	note?: string;
	orderDate: string;
	orderValue?: number;
	orderValueInSEK?: number;
	ourReference?: string;
	outboundDocumentReference?: {
		id?: string;
		type?: string;
	};
	paymentTermsCode: string;
	projectId?: string;
	purchaseOrderState?:
		| "NOT_SENT"
		| "SENT"
		| "SENT_NOT_REJECTED"
		| "DELAYED"
		| "RECEIVED"
		| "VOIDED"
		| "CURRENT"
		| "ALL";
	purchaseType?: "WAREHOUSE" | "DROPSHIP";
	responseState?:
		| "NOT_SENT"
		| "SENT"
		| "ACCEPTED_WITH_REQ_DLV_DATE"
		| "ACCEPTED_WITH_CHANGED_DLV_DATE"
		| "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE"
		| "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE"
		| "REJECTED";
	rows?: {
		backOrderQuantity?: number;
		costCenterCode?: string;
		currencyCode: string;
		id?: string;
		isStockItem?: boolean;
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		notes?: {
			note?: string;
			purchaseOrderId?: number;
			purchaseOrderRowId?: string;
			rowNum?: number;
		}[];
		orderedQuantity: number;
		price?: number;
		projectId?: string;
		purchaseOrderId?: number;
		receivedQuantity?: number;
		remainingOrderedQuantity: number;
		rowNum?: number;
		stockLocationCode?: string;
		stockLocationId?: string;
		stockLocationName?: string;
		stockPointCode?: string;
		stockPointId?: string;
		stockPointName?: string;
	}[];
	stockPointCode?: string;
	stockPointId?: string;
	supplier?: string;
	supplierAddress?: string;
	supplierAddress2?: string;
	supplierCity?: string;
	supplierCountryCode?: string;
	supplierEmail?: string;
	supplierName?: string;
	supplierNumber: string;
	supplierPostCode?: string;
	totalReceivedQuantity?: number;
	translatedResponseState?: string;
	voided?: boolean;
	yourReference?: string;
}

export interface WarehousePurchaseOrderMailSettings {
	body: string;
	bodyAsHtml?: string;
	receiver: string;
	receiverCopy?: string;
	receiverSecretCopy?: string;
	replyTo: string;
	senderName?: string;
	subject: string;
}

export interface WarehousePurchaseOrderRow {
	backOrderQuantity?: number;
	costCenterCode?: string;
	currencyCode: string;
	id?: string;
	isStockItem?: boolean;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	notes?: {
		note?: string;
		purchaseOrderId?: number;
		purchaseOrderRowId?: string;
		rowNum?: number;
	}[];
	orderedQuantity: number;
	price?: number;
	projectId?: string;
	purchaseOrderId?: number;
	receivedQuantity?: number;
	remainingOrderedQuantity: number;
	rowNum?: number;
	stockLocationCode?: string;
	stockLocationId?: string;
	stockLocationName?: string;
	stockPointCode?: string;
	stockPointId?: string;
	stockPointName?: string;
}

export interface WarehousePurchaseOrderRowNote {
	note?: string;
	purchaseOrderId?: number;
	purchaseOrderRowId?: string;
	rowNum?: number;
}

export interface WarehouseReleaseParentOrder {
	releasedParentOrder?: boolean;
}

export interface WarehouseResponseStateChange {
	responseState?:
		| "NOT_SENT"
		| "SENT"
		| "ACCEPTED_WITH_REQ_DLV_DATE"
		| "ACCEPTED_WITH_CHANGED_DLV_DATE"
		| "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE"
		| "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE"
		| "REJECTED";
}

export interface WarehouseStockBalance {
	availableStock?: number;
	inStock?: number;
	itemId?: string;
	stockPointCode?: string;
}

export interface WarehouseStockLocation {
	code: string;
	id?: string;
	name?: string;
	stockPointId?: string;
}

export interface WarehouseStockPoint {
	active?: boolean;
	code: string;
	deliveryAddress?: string;
	deliveryAddress2?: string;
	deliveryCity?: string;
	deliveryCountryCode?: string;
	deliveryName?: string;
	deliveryPhone?: string;
	deliveryZipCode?: string;
	id?: string;
	name: string;
	stockLocations?: {
		code: string;
		id?: string;
		name?: string;
		stockPointId?: string;
	}[];
	usingCompanyAddress?: boolean;
}

export interface WarehouseStockTaking {
	costCenterCode?: string;
	date?: string;
	id?: number;
	name: string;
	projectId?: string;
	responsible: string;
	rows?: {
		countedBy?: string;
		currentRowNo?: number;
		hasPostReleaseStockChanges?: boolean;
		id?: string;
		itemId?: string;
		stockLocationId?: string;
		stockPointId?: string;
		stockTakenQuantity?: number;
		stockTakingId?: number;
		stockTakingRowId?: string;
		totalQuantityInStock?: number;
	}[];
	sortParams?: {
		primarySort?: string;
		primarySortOrder?: string;
		secondarySort?: string;
		secondarySortOrder?: string;
	};
	sortingId?: number;
	state: string;
	usingStockPoints?: boolean;
}

export interface WarehouseStockTakingRow {
	countedBy?: string;
	currentRowNo?: number;
	hasPostReleaseStockChanges?: boolean;
	id?: string;
	itemId?: string;
	stockLocationId?: string;
	stockPointId?: string;
	stockTakenQuantity?: number;
	stockTakingId?: number;
	stockTakingRowId?: string;
	totalQuantityInStock?: number;
}

export interface WarehouseStockTakingSortParams {
	primarySort?: string;
	primarySortOrder?: string;
	secondarySort?: string;
	secondarySortOrder?: string;
}

export interface WarehouseStockTransferDocument {
	id?: number;
	note?: string;
	released?: boolean;
	rows: {
		fromStockLocationCode?: string;
		fromStockLocationId?: string;
		fromStockLocationName?: string;
		fromStockPointCode?: string;
		fromStockPointId: string;
		fromStockPointName?: string;
		itemDescription?: string;
		itemId: string;
		itemUnit?: string;
		quantity?: number;
		requestedQuantity: number;
		rowNum?: number;
		toStockLocationCode?: string;
		toStockLocationId?: string;
		toStockLocationName?: string;
		toStockPointCode?: string;
		toStockPointId: string;
		toStockPointName?: string;
	}[];
	transferDate?: string;
	version?: number;
	voided?: boolean;
}

export interface WarehouseStockTransferRow {
	fromStockLocationCode?: string;
	fromStockLocationId?: string;
	fromStockLocationName?: string;
	fromStockPointCode?: string;
	fromStockPointId: string;
	fromStockPointName?: string;
	itemDescription?: string;
	itemId: string;
	itemUnit?: string;
	quantity?: number;
	requestedQuantity: number;
	rowNum?: number;
	toStockLocationCode?: string;
	toStockLocationId?: string;
	toStockLocationName?: string;
	toStockPointCode?: string;
	toStockPointId: string;
	toStockPointName?: string;
}

export interface WarehouseTenantInfo {
	activated?: boolean;
	tenantId?: number;
}

export interface WarehouseWebException {
	error?: string;
	id?: string;
	message?: string;
}
