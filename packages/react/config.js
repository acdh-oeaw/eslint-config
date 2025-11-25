import { defineConfig } from "eslint/config";
import reactXPlugin from "@eslint-react/eslint-plugin";
import prettier from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const config = defineConfig(
	reactXPlugin.configs["strict-type-checked"],
	reactHooksPlugin.configs.flat.recommended,
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
			/** @see {@link https://github.com/Rel1cx/eslint-react/issues/739} */
			"react/function-component-definition": "error",

			/** Prefer `set-state-in-effect` rule from official `react-hooks` plugin. */
			"@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
			"@eslint-react/jsx-shorthand-boolean": ["error", -1],
			"@eslint-react/dom/no-unsafe-target-blank": "off",
		},
	},
	prettier,
);

export default config;
