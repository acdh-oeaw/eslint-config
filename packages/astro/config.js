/** @type {import('eslint').Linter.Config} */
const config = {
	parserOptions: {
		extraFileExtensions: [".astro"],
	},
	rules: {
		/** @see https://github.com/import-js/eslint-import-resolver-typescript/issues/72 */
		"import-x/no-unresolved": [
			"error",
			{
				ignore: [
					"astro:actions",
					"astro:assets",
					"astro:components",
					"astro:content",
					"astro:i18n",
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
				/**
				 * `astro-eslint-parser` has same issue as `vue-eslint-parser`.
				 *
				 * @see https://github.com/vuejs/vue-eslint-parser/issues/104
				 */
				"@typescript-eslint/no-unsafe-argument": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-declaration-merging": "off",
				"@typescript-eslint/no-unsafe-enum-comparison": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unsafe-return": "off",
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
