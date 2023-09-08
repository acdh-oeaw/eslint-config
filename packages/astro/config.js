/** @type {import('eslint').Linter.Config} */
const config = {
	parserOptions: {
		extraFileExtensions: [".astro"],
	},
	rules: {
		/** @see https://github.com/import-js/eslint-import-resolver-typescript/issues/72 */
		"import/no-unresolved": [
			"error",
			{
				ignore: [
					"astro:assets",
					"astro:components",
					"astro:content",
					"astro:middleware",
					"astro:ssr-manifest",
					"astro:transitions",
				],
			},
		],
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
