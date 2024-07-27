/** @typedef {import("eslint").Linter.Config} Config */

import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

/** @type {Array<Config>} */
const config = [
	...astroPlugin.configs.recommended,
	...astroPlugin.configs["jsx-a11y-recommended"],
	{
		files: ["**/*.astro"],
		rules: {
			"astro/jsx-a11y/anchor-is-valid": [
				"error",
				{
					components: ["Link"],
					aspects: ["invalidHref", "preferButton"],
				},
			],
			"astro/jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
			"astro/jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
			"import-x/no-unresolved": [
				"error",
				{
					ignore: ["^astro:\\w+$"],
				},
			],
		},
		settings: {
			"import-x/parsers": {
				"astro-eslint-parser": [".astro"],
			},
		},
	},
	/** @see https://github.com/ota-meshi/eslint-plugin-astro/issues/402#issuecomment-2195847165 */
	{
		files: ["**/*.astro/*.ts"],
		rules: {
			languageOptions: {
				parserOptions: {
					project: null,
				},
			},
			...tseslint.configs.disableTypeChecked,
		},
	},
];

export default config;
