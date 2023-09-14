/** @type {import('eslint').Linter.Config} */
const config = {
	parserOptions: {
		extraFileExtensions: [".vue"],
	},
	overrides: [
		{
			files: ["./**/*.vue"],
			extends: [
				"plugin:vue/vue3-recommended",
				"plugin:vuejs-accessibility/recommended",
				"prettier",
			],
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
			rules: {
				/**
				 * @see https://github.com/vuejs/vue-eslint-parser/issues/104
				 */
				"@typescript-eslint/no-unsafe-argument": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-declaration-merging": "off",
				"@typescript-eslint/no-unsafe-enum-comparison": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"vue/component-tags-order": [
					"error",
					{
						order: ["script", "template", "style"],
					},
				],
				"vue/multi-word-component-names": "off",
				"vue/padding-line-between-blocks": "error",
				"vue/require-default-prop": "off",
				"vuejs-accessibility/label-has-for": [
					"error",
					{
						required: {
							some: ["nesting", "id"],
						},
					},
				],
				"vuejs-accessibility/no-autofocus": ["error", { ignoreNonDOM: true }],
				"vuejs-accessibility/no-onchange": "off",
				"vuejs-accessibility/no-redundant-roles": ["error", { ul: ["list"], ol: ["list"] }],
			},
		},
	],
};

module.exports = config;
