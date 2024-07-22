import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		settings: {
			"import/resolver": {
				typescript: {
					project: "./.nuxt/tsconfig.json",
					alwaysTryTypes: true,
				},
			},
		},
	},
	...compat.extends("plugin:eslint-plugin-nuxt/recommended").map((config) => ({
		...config,
		files: ["./**/*.vue"],
	})),
	{
		files: ["./**/*.vue"],
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
		files: ["./src/layouts/**/*.vue", "./src/pages/**/*.vue"],
		rules: {
			"vue/no-multiple-template-root": "error",
		},
	},
];
