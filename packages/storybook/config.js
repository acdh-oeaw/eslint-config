/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import storybookPlugin from "eslint-plugin-storybook";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	{
		...compat.config(storybookPlugin.configs.recommended),
		files: ["./**/*.stories.@(ts|tsx)"],
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"import-x/no-default-export": "off",
			"react/function-component-definition": [
				"off",
				{
					namedComponents: "function-expression",
				},
			],
		},
	},
];

export default config;
