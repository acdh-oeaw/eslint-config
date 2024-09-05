import { FlatCompat } from "@eslint/eslintrc";
import storybookPlugin from "eslint-plugin-storybook";
// import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config({
	name: "acdh-oeaw/storybook-config",
	...compat.config(storybookPlugin.configs.recommended),
	files: ["**/*.stories.@(ts|tsx)"],
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"import-x/no-default-export": "off",
		"react/function-component-definition": ["off", { namedComponents: "function-expression" }],
	},
});

export default config;
