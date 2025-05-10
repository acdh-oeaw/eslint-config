import prettier from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import astroPlugin from "eslint-plugin-astro";
import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	astroPlugin.configs.recommended,
	/** Does not currently play well with other configs which also add `eslint-plugin-jsx-a11y`. */
	// ...astroPlugin.configs["jsx-a11y-recommended"],
	jsxA11yPlugin.flatConfigs.recommended,
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
		extends: ts.configs.disableTypeChecked,
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
