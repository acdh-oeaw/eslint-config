import { defineConfig } from "eslint/config";
import reactXPlugin from "@eslint-react/eslint-plugin";
import prettier from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const config = defineConfig(
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	reactHooksPlugin.configs.recommended,
	// TODO: enable preset and de-duplicate rules from eslint-plugin-react
	// reactXPlugin.configs["recommended-type-checked"],
	jsxA11yPlugin.flatConfigs.recommended,
	{
		name: "acdh-oeaw/react-config",
		settings: {
			react: {
				version: "detect",
			},
			formComponents: ["Form"],
			linkComponents: [{ name: "Link" }, { name: "NavLink" }],
		},
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

			"react/boolean-prop-naming": "error",
			"react/button-has-type": "error",
			"react/function-component-definition": "error",
			"react/jsx-boolean-value": ["error", "always"],
			"react/jsx-no-leaked-render": "error",
			"react/jsx-no-target-blank": "off",
			"react/jsx-no-useless-fragment": "error",
			// "react/jsx-sort-props": ["error", { reservedFirst: true }],
			"react/no-unstable-nested-components": "error",
			"react/prop-types": "off",
		},
	},
	{
		name: "acdh-oeaw/react-x-config",
		plugins: {
			"react-x": reactXPlugin,
		},
		rules: {
			"react-x/no-missing-key": "error",
		},
	},
	prettier,
);

export default config;
