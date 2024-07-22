import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:import-x/recommended",
		"plugin:import-x/typescript",
		"plugin:regexp/recommended",
		"prettier",
	),
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			ecmaVersion: 2023,
			sourceType: "commonjs",
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
		settings: {
			"import-x/internal-regex": "^@/",
			"import-x/parsers": {
				"@typescript-eslint/parser": [".ts", ".tsx", ".js", ".mjs", ".cjs", ".mts", ".cts"],
			},
			"import-x/resolver": {
				typescript: {
					project: ["./tsconfig.json"],
					alwaysTryTypes: true,
				},
			},
		},
		rules: {
			"consistent-return": "error",
			eqeqeq: [
				"error",
				"always",
				{
					null: "ignore",
				},
			],
			"no-console": [
				"warn",
				{
					allow: ["warn", "error"],
				},
			],
			"no-implicit-coercion": "error",
			"no-param-reassign": "error",
			"no-restricted-globals": [
				"error",
				{
					name: "isNaN",
					message: "Use Number.isNaN instead.",
				},
			],
			"no-throw-literal": "error",
			"require-atomic-updates": "error",
			"@typescript-eslint/array-type": [
				"error",
				{
					default: "generic",
				},
			],
			"@typescript-eslint/consistent-type-exports": [
				"error",
				{
					fixMixedExportsWithInlineTypeSpecifier: true,
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					fixStyle: "inline-type-imports",
				},
			],
			"@typescript-eslint/no-empty-interface": [
				"error",
				{
					allowSingleExtends: true,
				},
			],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						arguments: false,
						attributes: false,
					},
				},
			],
			"@typescript-eslint/no-namespace": [
				"error",
				{
					allowDeclarations: true,
				},
			],
			"@typescript-eslint/no-unnecessary-condition": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/no-unnecessary-template-expression": "error",
			"@typescript-eslint/sort-type-constituents": "error",
			"@typescript-eslint/switch-exhaustiveness-check": "error",
			"import-x/first": "error",
			"import-x/newline-after-import": "error",
			"import-x/no-anonymous-default-export": "error",
			"import-x/no-duplicates": [
				"error",
				{
					"prefer-inline": true,
				},
			],
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
	{
		files: ["./**/*.cjs"],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
];
