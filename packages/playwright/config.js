/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./e2e/**/*.@(spec|test).@(ts|tsx)"],
			extends: "plugin:playwright/recommended",
		},
	],
};

module.exports = config;
