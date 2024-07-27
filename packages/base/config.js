import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import-x";
import * as regexpPlugin from "eslint-plugin-regexp";
import importSortPlugin from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config(
	{
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
	},
	js.configs.recommended,
	...ts.configs.strictTypeChecked,
	...ts.configs.stylisticTypeChecked,
	{
		languageOptions: {
			globals: {
				...globals["shared-node-browser"],
				// ...globals.browser,
				// ...globals.nodeBuiltin,
			},
			parserOptions: {
				projectService: true,
				// tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"consistent-return": "error",
			eqeqeq: ["error", "always", { null: "ignore" }],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-implicit-coercion": "error",
			"no-param-reassign": "error",
			"no-restricted-globals": ["error", { name: "isNaN", message: "Use Number.isNaN instead." }],
			"no-throw-literal": "error",
			"require-atomic-updates": "error",
			"@typescript-eslint/array-type": ["error", { default: "generic" }],
			"@typescript-eslint/consistent-type-exports": [
				"error",
				{ fixMixedExportsWithInlineTypeSpecifier: true },
			],
			"@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
			"@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-misused-promises": [
				"error",
				{ checksVoidReturn: { arguments: false, attributes: false } },
			],
			"@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
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
		},
	},
	...compat.config(importPlugin.configs.recommended),
	...compat.config(importPlugin.configs.typescript),
	{
		settings: {
			"import-x/internal-regex": "^[@~]/",
			"import-x/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: true,
				},
				// node: true,
			},
		},
		rules: {
			"import-x/first": "error",
			"import-x/newline-after-import": "error",
			"import-x/no-anonymous-default-export": "error",
			"import-x/no-duplicates": ["error", { "prefer-inline": true }],
		},
	},
	{
		plugins: {
			"simple-import-sort": importSortPlugin,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
	regexpPlugin.configs["flat/recommended"],
	prettier,
);

export default config;
