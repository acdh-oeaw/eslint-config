/** @type {import('eslint').Linter.Config} */
const config = {
	parserOptions: {
		extraFileExtensions: [".astro"],
	},
	overrides: [
		{
			files: ["./**/*.astro"],
			extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended", "prettier"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
			rules: {
				"astro/jsx-a11y/anchor-is-valid": [
					"error",
					{ components: ["Link"], aspects: ["invalidHref", "preferButton"] },
				],
				"astro/jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
				"astro/jsx-a11y/no-redundant-roles": ["error", { ul: ["list"], ol: ["list"] }],
			},
		},
	],
};

module.exports = config;
