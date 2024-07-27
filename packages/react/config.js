/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	compat.config(
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
	),
	{
		plugins: {
			"react-compiler": reactCompilerPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
			formComponents: ["Form"],
			linkComponents: [
				{
					name: "Link",
				},
				{
					name: "NavLink",
				},
			],
		},
		rules: {
			"jsx-a11y/anchor-is-valid": [
				"error",
				{
					components: ["Link"],
				},
			],
			"jsx-a11y/no-autofocus": [
				"error",
				{
					ignoreNonDOM: true,
				},
			],
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
			"react/jsx-no-leaked-render": "error",
			"react/jsx-no-target-blank": "off",
			"react/prop-types": "off",
			"react-compiler/react-compiler": "error",
		},
	},
];

export default config;
