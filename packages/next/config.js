import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends("plugin:@next/next/core-web-vitals").map((config) => ({
		...config,
		files: ["./**/*.@(ts|tsx)"],
	})),
	{
		files: ["./**/*.@(ts|tsx)"],
		rules: {
			"import-x/no-default-export": "error",
		},
	},
	{
		files: ["./**/*.d.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: ["./*.config.ts", "./*.config.tsx", "./*.config.js", "./*.config.mjs"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: ["./i18n.ts", "./lib/i18n.ts", "./src/i18n.ts", "./src/lib/i18n.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: ["./middleware.ts", "./src/middleware.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: [
			"./app/manifest.ts",
			"./app/robots.ts",
			"./app/sitemap.ts",
			"./src/app/manifest.ts",
			"./src/app/robots.ts",
			"./src/app/sitemap.ts",
		],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: [
			"./app/**/apple-icon.@(ts|tsx)",
			"./app/**/default.@(ts|tsx)",
			"./app/**/error.@(ts|tsx)",
			"./app/**/global-error.@(ts|tsx)",
			"./app/**/icon.@(ts|tsx)",
			"./app/**/layout.@(ts|tsx)",
			"./app/**/loading.@(ts|tsx)",
			"./app/**/not-found.@(ts|tsx)",
			"./app/**/opengraph-image.@(ts|tsx)",
			"./app/**/page.@(ts|tsx)",
			"./app/**/template.@(ts|tsx)",
			"./app/**/twitter-image.@(ts|tsx)",
			"./src/app/**/apple-icon.@(ts|tsx)",
			"./src/app/**/default.@(ts|tsx)",
			"./src/app/**/error.@(ts|tsx)",
			"./src/app/**/global-error.@(ts|tsx)",
			"./src/app/**/icon.@(ts|tsx)",
			"./src/app/**/layout.@(ts|tsx)",
			"./src/app/**/loading.@(ts|tsx)",
			"./src/app/**/not-found.@(ts|tsx)",
			"./src/app/**/opengraph-image.@(ts|tsx)",
			"./src/app/**/page.@(ts|tsx)",
			"./src/app/**/template.@(ts|tsx)",
			"./src/app/**/twitter-image.@(ts|tsx)",
		],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
];
