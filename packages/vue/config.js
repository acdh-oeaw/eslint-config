import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		languageOptions: {
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				extraFileExtensions: [".vue"],
			},
		},
	},
	...compat
		.extends("plugin:vue/vue3-recommended", "plugin:vuejs-accessibility/recommended", "prettier")
		.map((config) => ({
			...config,
			files: ["./**/*.vue"],
		})),
	{
		files: ["./**/*.vue"],
		languageOptions: {
			ecmaVersion: 5,
			sourceType: "script",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
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
