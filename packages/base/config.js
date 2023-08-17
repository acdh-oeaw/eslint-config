const project = ["./tsconfig.json", "./tsconfig.*.json"];

/** @type {import('eslint').Linter.Config} */
const config = {
	root: true,
	reportUnusedDisableDirectives: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"prettier",
	],
	plugins: ["simple-import-sort"],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		project,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				project,
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		/** @see https://github.com/typescript-eslint/typescript-eslint/issues/1277 */
		// "consistent-return": "error",
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
		"@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
		],
		"@typescript-eslint/sort-type-constituents": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"import/consistent-type-specifier-style": ["error", "prefer-inline"],
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-anonymous-default-export": "error",
		"import/no-duplicates": ["error", { "prefer-inline": true }],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
	overrides: [
		{
			files: ["./**/*.cjs"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
			},
		},
	],
};

module.exports = config;
