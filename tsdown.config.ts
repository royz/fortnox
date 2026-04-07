import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"./src/index.ts",
		"./src/mini.ts",
		"./src/types/custom/index.ts",
		"./src/types/official-schemas.gen.ts",
		"./src/types/patched-schemas.gen.ts",
	],
	clean: true,
	dts: true,
	format: ["cjs", "esm"],
	outDir: "./dist",
	sourcemap: true,
	minify: false,
});
