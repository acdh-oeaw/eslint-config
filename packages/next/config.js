import { FlatCompat } from "@eslint/eslintrc";
// import nextPlugin from "@next/eslint-plugin-next";
// import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config(
	// @ts-expect-error Type incompatibility between `eslint` and `typescript-eslint`.
	...compat.extends("plugin:@next/eslint-plugin-next/core-web-vitals"),
	{
		name: "acdh-oeaw/next-config",
		rules: {
			/** These rules are not relevent for app router and `next/font`. */
			"@next/next/google-font-display": "off",
			"@next/next/google-font-preconnect": "off",
			"@next/next/no-assign-module-variable": "off",
			"@next/next/no-before-interactive-script-outside-document": "off",
			"@next/next/no-document-import-in-page": "off",
			"@next/next/no-duplicate-head": "off",
			"@next/next/no-head-import-in-document": "off",
			"@next/next/no-script-component-in-head": "off",
			"@next/next/no-styled-jsx-in-document": "off",
			"@next/next/no-title-in-document-head": "off",
			"@next/next/no-typos": "off",

			"import-x/no-default-export": "error",
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		name: "acdh-oeaw/next-config/allow-default-export",
		files: [
			// "**/*.d.ts",

			"./*.config.@(js|ts|tsx)",

			"./middleware.ts",

			"./app/manifest.ts",
			"./app/robots.ts",
			"./app/sitemap.ts",

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

			"./i18n.ts",
			"./lib/i18n.ts",
		],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
);

export default config;
