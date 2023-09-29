/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.@(ts|tsx)"],
			extends: ["plugin:@next/next/core-web-vitals"],
			rules: {
				"import/no-default-export": "error",
			},
		},
		{
			files: ["./**/*.d.ts"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["./*.config.ts", "./*.config.js", "./*.config.mjs"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["./i18n.ts", "./lib/i18n.ts", "./src/i18n.ts", "./src/lib/i18n.ts"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["./middleware.ts", "./src/middleware.ts"],
			rules: {
				"import/no-default-export": "off",
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
				"import/no-default-export": "off",
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
				"import/no-default-export": "off",
			},
		},
	],
};

module.exports = config;
