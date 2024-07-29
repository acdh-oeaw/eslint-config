import { FlatCompat } from "@eslint/eslintrc";
import nuxtPlugin from "@nuxt/eslint-plugin";
// import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config(
	// @ts-expect-error Type incompatibility between `eslint` and `typescript-eslint`.
	...compat.extends("plugin:eslint-plugin-nuxt/recommended"),
	{
		files: ["**/*.vue"],
		/** @see https://github.com/nuxt/nuxt/issues/22994 */
		// settings: {
		// 	"import/resolver": {
		// 		typescript: {
		// 			project: "./.nuxt/tsconfig.json",
		// 			alwaysTryTypes: true,
		// 		},
		// 	},
		// },
		rules: {
			/**
			 * Does not work with nuxt auto-imports.
			 *
			 * @see https://github.com/antfu/unplugin-auto-import/issues/3
			 */
			"no-undef": "off",
			/**
			 * Allow single emit function as `defineEmits` interface.
			 */
			"@typescript-eslint/prefer-function-type": "off",
			"vuejs-accessibility/anchor-has-content": [
				"error",
				{ components: ["NuxtLink", "NuxtLocaleLink"] },
			],
		},
	},
	{
		files: ["./layouts/**/*.vue", "./pages/**/*.vue"],
		rules: {
			"vue/no-multiple-template-root": "error",
		},
	},
);

export default config;
