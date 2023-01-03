/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.vue"],
			extends: ["plugin:eslint-plugin-nuxt/recommended"],
			rules: {
				/**
				 * Does not work with nuxt auto-imports.
				 * @see https://github.com/antfu/unplugin-auto-import/issues/3
				 */
				"no-undef": "off",
			},
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
