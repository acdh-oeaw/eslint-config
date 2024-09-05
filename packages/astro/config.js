import astroPlugin from "eslint-plugin-astro";
// import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	// {
	// 	languageOptions: {
	// 		globals: {
	// 			...globals.browser,
	// 			...globals.nodeBuiltin,
	// 		},
	// 	},
	// },
	...astroPlugin.configs.recommended,
	...astroPlugin.configs["jsx-a11y-recommended"],
	{
		name: "acdh-oeaw/astro-config",
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
		name: "acdh-oeaw/astro-config/disable-type-aware-rules",
		files: ["**/*.astro", "**/*.astro/*.js", "**/*.astro/*.ts"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2023,
				projectService: null,
			},
		},
		...ts.configs.disableTypeChecked,
	},
);

export default config;
