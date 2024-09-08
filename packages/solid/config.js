import prettier from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import solidJsPlugin from "eslint-plugin-solid";
import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	solidJsPlugin.configs["flat/typescript"],
	jsxA11yPlugin.flatConfigs.recommended,
	{
		name: "acdh-oeaw/solid-config",
		rules: {
			"jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
			"jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
			"jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
		},
	},
	{
		name: "@acdh-oeaw/solid-config/node-globals",
		files: ["app.config.*", "config/env.config.*", "scripts/**"],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	{
		name: "@acdh-oeaw/solid-config/browser-globals",
		ignores: ["app.config.*", "config/env.config.*", "scripts/**"],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
	prettier,
);

export default config;
