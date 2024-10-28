import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import-x";
import * as regexpPlugin from "eslint-plugin-regexp";
import importSortPlugin from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	js.configs.recommended,
	...ts.configs.strictTypeChecked,
	...ts.configs.stylisticTypeChecked,
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	{
		name: "acdh-oeaw/base-config",
		languageOptions: {
			ecmaVersion: 2023,
			globals: {
				...globals["es2023"],
				...globals["shared-node-browser"],
				// ...globals.browser,
				// ...globals.nodeBuiltin,
			},
			parserOptions: {
				projectService: true,
				// tsconfigRootDir: import.meta.dirname,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			eqeqeq: ["error", "always", { null: "ignore" }],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-implicit-coercion": "error",
			"no-param-reassign": "error",
			"no-restricted-globals": ["error", { name: "isNaN", message: "Use Number.isNaN instead." }],
			"no-throw-literal": "error",
			"prefer-const": "error",
			"prefer-template": "error",
			"require-atomic-updates": "error",
			"@typescript-eslint/array-type": ["error", { default: "generic" }],
			"@typescript-eslint/consistent-type-exports": [
				"error",
				{ fixMixedExportsWithInlineTypeSpecifier: true },
			],
			"@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
			// "@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unnecessary-condition": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/no-unnecessary-template-expression": "error",
			// "@typescript-eslint/require-array-sort-compare": "error",
			// "@typescript-eslint/strict-boolean-expressions": "error",
			"@typescript-eslint/switch-exhaustiveness-check": "error",
		},
	},
	{
		name: "acdh-oeaw/base-config/import",
		plugins: {
			"simple-import-sort": importSortPlugin,
		},
		settings: {
			"import-x/internal-regex": "^[@~]/",
			// "import-x/parsers:": {
			// 	'@typescript-eslint/parser': [".ts", ".tsx"]
			// },
			"import-x/resolver": {
				typescript: {
					alwaysTryTypes: true,
					// extensions: [".js", ".ts", ".tsx"],
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
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",

			/** Already handled by typescript. */
			"import-x/default": "off",
			"import-x/named": "off",
			"import-x/namespace": "off",
		},
	},
	{
		name: "acdh-oeaw/base-config/commonjs",
		files: ["**/*.cjs"],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
	regexpPlugin.configs["flat/recommended"],
	prettier,
	{
		/**
		 * These are intentionally placed after the prettier config.
		 *
		 * @see https://github.com/prettier/eslint-config-prettier#special-rules
		 */
		rules: {
			// "arrow-body-style": ["error", "always"],
			curly: "error",
			"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
		},
	},
);

export default config;
