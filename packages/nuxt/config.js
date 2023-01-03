/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.vue"],
			extends: ["plugin:eslint-plugin-nuxt/recommended"],
		},
		{
			files: ["./src/layouts/**/*.vue", "./src/pages/**/*.vue"],
			rules: {
				"vue/no-multiple-template-root": "error",
			},
		},
	],
};

module.exports = config;
