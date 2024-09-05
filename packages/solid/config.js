import { FlatCompat } from "@eslint/eslintrc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import solidJsPlugin from "eslint-plugin-solid";
// import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config(
	// {
	// 	languageOptions: {
	// 		globals: {
	// 			...globals.browser,
	// 			...globals.nodeBuiltin,
	// 		},
	// 	},
	// },
	// @ts-expect-error Type incompatibility between `eslint` and `typescript-eslint`.
	...solidJsPlugin.configs["flat/typescript"],
	jsxA11yPlugin.flatConfigs.recommended,
	{
		name: "acdh-oeaw/solid-config",
		rules: {
			"jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
			"jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
			"jsx-a11y/no-onchange": "off",
			"jsx-a11y/no-redundant-roles": [
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
