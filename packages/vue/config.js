import tsParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vueAccessibilityPlugin from "eslint-plugin-vuejs-accessibility";
// import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	// {
	// 	languageOptions: {
	// 		globals: {
	// 			...globals.browser,
	// 			...globals.nodeBuiltin,
	// 		},
	// 	},
	// },
	...vuePlugin.configs["flat/recommended"],
	...vueAccessibilityPlugin.configs["flat/recommended"],
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2023,
				parser: tsParser,
			},
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

			"vue/block-order": ["error", { order: ["script", "template", "style"] }],
			"vue/component-name-in-template-casing": [
				"error",
				"PascalCase",
				{ registeredComponentsOnly: false },
			],
			"vue/multi-word-component-names": "off",
			"vue/padding-line-between-blocks": "error",
			"vue/require-default-prop": "off",

			"vuejs-accessibility/anchor-has-content": ["error", { components: ["RouterLink"] }],
			"vuejs-accessibility/label-has-for": ["error", { required: { some: ["nesting", "id"] } }],
			"vuejs-accessibility/no-autofocus": ["error", { ignoreNonDOM: true }],
			"vuejs-accessibility/no-onchange": "off",
			"vuejs-accessibility/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
		},
	},
);

export default config;
