import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import globals from "globals";

const config = defineConfig(
	nextPlugin.configs["core-web-vitals"],
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
		},
	},
	{
		name: "acdh-oeaw/next-config/allow-default-export",
		files: [
			"**/*.d.ts",
			"**/*.d.json.ts",

			"**/*.config.@(js|ts|tsx)",

			"instrumentation.ts",
			"middleware.ts",

			"app/manifest.ts",
			"app/robots.ts",
			"app/sitemap.ts",

			"app/**/apple-icon.@(ts|tsx)",
			"app/**/default.@(ts|tsx)",
			"app/**/error.@(ts|tsx)",
			"app/**/forbidden.@(ts|tsx)",
			"app/**/global-error.@(ts|tsx)",
			"app/**/global-not-found.@(ts|tsx)",
			"app/**/icon.@(ts|tsx)",
			"app/**/layout.@(ts|tsx)",
			"app/**/loading.@(ts|tsx)",
			"app/**/not-found.@(ts|tsx)",
			"app/**/opengraph-image.@(ts|tsx)",
			"app/**/page.@(ts|tsx)",
			"app/**/template.@(ts|tsx)",
			"app/**/twitter-image.@(ts|tsx)",
			"app/**/unauthorized.@(ts|tsx)",

			"lib/i18n/request.ts",
		],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		name: "@acdh-oeaw/next-config/node-globals",
		files: [
			"next.config.*",
			"config/env.config.*",
			"lib/server/**",
			"scripts/**",
			"**/_actions/**",
			"**/actions/**",
		],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	{
		name: "@acdh-oeaw/next-config/browser-globals",
		ignores: [
			"next.config.*",
			"config/env.config.*",
			"scripts/**",
			"lib/server/**",
			"**/_actions/**",
			"**/actions/**",
		],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
);

export default config;
