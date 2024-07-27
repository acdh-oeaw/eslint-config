/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import vuePlugin from "eslint-plugin-vue";
import vueAccessibilityPlugin from "eslint-plugin-vuejs-accessibility";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	{
		...compat.extends(
			"plugin:vue/vue3-recommended",
			"plugin:vuejs-accessibility/recommended",
			"prettier",
		),
		files: ["**/*.vue"],
		// languageOptions: {
		// 	parserOptions: {
		// 		parser: "@typescript-eslint/parser",
		// 	},
		// },
		rules: {
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-declaration-merging": "off",
			"@typescript-eslint/no-unsafe-enum-comparison": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"vue/component-name-in-template-casing": [
				"error",
				"PascalCase",
				{
					registeredComponentsOnly: false,
				},
			],
			"vue/component-tags-order": [
				"error",
				{
					order: ["script", "template", "style"],
				},
			],
			"vue/multi-word-component-names": "off",
			"vue/padding-line-between-blocks": "error",
			"vue/require-default-prop": "off",
			"vuejs-accessibility/anchor-has-content": [
				"error",
				{
					components: ["RouterLink"],
				},
			],
			"vuejs-accessibility/label-has-for": [
				"error",
				{
					required: {
						some: ["nesting", "id"],
					},
				},
			],
			"vuejs-accessibility/no-autofocus": [
				"error",
				{
					ignoreNonDOM: true,
				},
			],
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
];

export default config;
