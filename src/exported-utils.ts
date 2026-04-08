import type { BinaryResponse } from "./types/custom";

export function isBinaryResponse(data: unknown): data is BinaryResponse {
	if (!data) return false;
	return (
		typeof data === "object" &&
		"file" in data &&
		data.file instanceof ArrayBuffer
	);
}
