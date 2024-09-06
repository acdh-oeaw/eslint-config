import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
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
		name: "acdh-oeaw/vue-config",
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2023,
				parser: tsParser,
			},
		},
		rules: {
			"vue/block-order": ["error", { order: ["script", "template", "style"] }],
			"vue/component-name-in-template-casing": [
				"error",
				"PascalCase",
				{
					/**
					 * Handle namespaced components.
					 *
					 * @see https://github.com/vuejs/eslint-plugin-vue/issues/2405
					 */
					ignores: ["/\\./"],
					registeredComponentsOnly: false,
				},
			],
			"vue/component-api-style": "error",
			"vue/html-self-closing": ["error", { html: { void: "any" } }],
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
	{
		name: "acdh-oeaw/vue-config/disable-type-aware-rules",
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2023,
				projectService: null,
			},
		},
		/**
		 * @see https://github.com/vuejs/vue-eslint-parser/issues/104
		 */
		...ts.configs.disableTypeChecked,
	},
	prettier,
);

export default config;
