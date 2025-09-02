import prettier from "eslint-config-prettier";
import astroPlugin from "eslint-plugin-astro";
import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	astroPlugin.configs.recommended,
	{
		name: "acdh-oeaw/astro-config",
		files: ["**/*.astro"],
		settings: {
			/** @see https://github.com/ota-meshi/astro-eslint-parser/issues/259 */
			"import-x/ignore": ["\\.astro$"],
			"import-x/parsers": {
				"astro-eslint-parser": [".astro"],
			},
		},
	},
	astroPlugin.configs["jsx-a11y-recommended"],
	{
		name: "acdh-oeaw/astro-config/jsx-a11y",
		files: ["**/*.astro"],
		rules: {
			"astro/jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
			"astro/jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
			"astro/jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
		},
	},
	{
		name: "acdh-oeaw/astro-config/global-imports",
		rules: {
			"import-x/no-unresolved": [
				"error",
				{
					ignore: ["^astro:\\w+$"],
				},
			],
		},
	},
	/** @see https://github.com/ota-meshi/eslint-plugin-astro/issues/402#issuecomment-2195847165 */
	{
		name: "acdh-oeaw/astro-config/disable-type-aware-rules",
		files: ["**/*.astro", "**/*.astro/*.js", "**/*.astro/*.ts"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2023,
				projectService: null,
			},
		},
		extends: [ts.configs.disableTypeChecked],
	},
	{
		name: "@acdh-oeaw/astro-config/node-globals",
		files: ["astro.config.*", "config/env.config.*", "scripts/**", "src/actions/**"],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	{
		name: "@acdh-oeaw/astro-config/browser-globals",
		ignores: ["astro.config.*", "config/env.config.*", "scripts/**", "src/actions/**"],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
	prettier,
);

export default config;
