/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	...compat.config(nextPlugin.configs["core-web-vitals"]),
	{
		rules: {
			"import-x/no-default-export": "error",
		},
	},
	{
		files: [
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
];

export default config;
