import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts", "./src/mini.ts", "./src/types/custom/index.ts"],
	clean: true,
	dts: true,
	format: ["cjs", "esm"],
	outDir: "./dist",
	sourcemap: true,
	minify: false,
	exports: {
		packageJson: false,
	},
});
