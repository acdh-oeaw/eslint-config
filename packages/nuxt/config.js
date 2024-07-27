/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import nuxtPlugin from "eslint-plugin-nuxt";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	...compat.config(nuxtPlugin.configs.recommended),
	{
		files: ["**/*.vue"],
		rules: {
			"no-undef": "off",
			"@typescript-eslint/prefer-function-type": "off",
			"vuejs-accessibility/anchor-has-content": [
				"error",
				{
					components: ["NuxtLink"],
				},
			],
		},
	},
	{
		files: ["./layouts/**/*.vue", "./pages/**/*.vue"],
		rules: {
			"vue/no-multiple-template-root": "error",
		},
	},
];

export default config;
