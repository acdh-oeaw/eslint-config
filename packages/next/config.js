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
			files: ["./*.config.ts", "./*.config.mjs"],
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
				"./app/**/default.tsx",
				"./app/**/error.tsx",
				"./app/**/global-error.tsx",
				"./app/**/layout.tsx",
				"./app/**/loading.tsx",
				"./app/**/not-found.tsx",
				"./app/**/page.tsx",
				"./app/**/template.tsx",
				"./src/app/**/default.tsx",
				"./src/app/**/error.tsx",
				"./src/app/**/global-error.tsx",
				"./src/app/**/layout.tsx",
				"./src/app/**/loading.tsx",
				"./src/app/**/not-found.tsx",
				"./src/app/**/page.tsx",
				"./src/app/**/template.tsx",
			],
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
};

module.exports = config;
