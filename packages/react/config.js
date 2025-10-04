import { defineConfig } from "eslint/config";
import reactXPlugin from "@eslint-react/eslint-plugin";
import prettier from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const config = defineConfig(
	reactHooksPlugin.configs["recommended-latest"],
	reactXPlugin.configs["recommended-type-checked"],
	jsxA11yPlugin.flatConfigs.recommended,
	{
		name: "acdh-oeaw/react-config",
		plugins: {
			react: reactPlugin,
		},
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

			/** Not availble in `@eslint-react/eslint-plugin`. */
			"react/boolean-prop-naming": "error",
			/** @see {@link https://github.com/Rel1cx/eslint-react/issues/900} */
			"react/function-component-definition": "error",

			/** Prefer `set-state-in-effect` rule from official `react-hooks` plugin. */
			"@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
			"@eslint-react/jsx-shorthand-boolean": ["error", -1],
			"@eslint-react/no-unnecessary-key": "error",
			"@eslint-react/no-useless-fragment": ["error"],
		},
	},
	prettier,
);

export default config;
