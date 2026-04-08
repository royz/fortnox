export const METHODS = ["get", "post", "put", "delete", "patch"] as const;

type RequestMethod = (typeof METHODS)[number];

type RequestOptions = {
	path: string;
	method: RequestMethod;
	query?: Record<string, unknown>;
	params?: Record<string, unknown>;
	body?: unknown;
};

type FortnoxErrorResponse = {
	ErrorInformation: {
		error: number;
		message: string;
		code: number;
	};
};

export type ErrorResponse = {
	ErrorSource: "fortnox" | "unknown";
	ErrorInformation: {
		error: number;
		message: string;
		code: number;
	};
};

export type InitFortnoxOptions =
	| { accessToken: string; proxy?: never }
	| {
			proxy: { baseUrl: string; apiKey: string; tenantId: string };
			accessToken?: never;
	  };

export async function request(
	reqOptions: RequestOptions,
	initOptions: InitFortnoxOptions,
) {
	try {
		let headers: Record<string, string>;
		let baseUrl: string;

		if ("accessToken" in initOptions) {
			headers = {
				Authorization: `Bearer ${initOptions.accessToken}`,
			};
			baseUrl = "https://api.fortnox.se";
		} else {
			headers = {
				"x-api-key": initOptions.proxy.apiKey,
				"x-tenant-id": initOptions.proxy.tenantId,
			};
			baseUrl = initOptions.proxy.baseUrl;
		}

		const searchParams = new URLSearchParams();
		if (reqOptions.query) {
			Object.entries(reqOptions.query).forEach(([key, value]) => {
				searchParams.append(key, String(value));
			});
		}

		let path = reqOptions.path;
		if (reqOptions.params) {
			Object.entries(reqOptions.params).forEach(([key, value]) => {
				path = path.replace(`{${key}}`, encodeURIComponent(String(value)));
			});
		}

		const url = `${baseUrl}${path}${searchParams.size > 0 ? `?${searchParams.toString()}` : ""}`;

		const response = await fetch(url, {
			method: reqOptions.method.toUpperCase(),
			body: reqOptions.body ? JSON.stringify(reqOptions.body) : null,
			headers,
		});

		const contentTransferEncoding =
			response.headers.get("content-transfer-encoding") ?? "";

		if (response.status < 300) {
			if (contentTransferEncoding === "binary") {
				const file = await response.arrayBuffer();
				const mimetype = response.headers.get("content-type");
				const disposition = response.headers.get("content-disposition") ?? "";
				const filenameMatch = disposition.match(/filename=([^;]+)/);
				const filename = filenameMatch?.at(1)?.trim();
				return { error: null, data: { file, filename, mimetype } };
			}
			const responseData = await response.json();
			return { error: null, data: responseData };
		} else {
			const responseData = await response.json();
			return {
				error: {
					ErrorSource: "fortnox" as const,
					ErrorInformation: (responseData as FortnoxErrorResponse)
						.ErrorInformation,
				} satisfies ErrorResponse,
				data: null,
			};
		}
	} catch (e: unknown) {
		return {
			error: {
				ErrorSource: "unknown" as const,
				ErrorInformation: {
					message: e instanceof Error ? e.message : String(e),
					error: -1,
					code: -1,
				},
			} satisfies ErrorResponse,
			data: null,
		};
	}
}
