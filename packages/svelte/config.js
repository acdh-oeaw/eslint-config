import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import sveltePlugin from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

const config = defineConfig(
	sveltePlugin.configs["flat/recommended"],
	sveltePlugin.configs.prettier,
	{
		name: "acdh-oeaw/svelte-config",
		files: ["**/*.svelte", "**/*.svelte.ts"],
		languageOptions: {
			ecmaVersion: 2023,
			globals: {
				...globals.es2023,
				...globals["shared-node-browser"],
			},
			parserOptions: {
				projectService: true,
				extraFileExtensions: [".svelte"],
				parser: ts.parser,
			},
		},
	},
	{
		name: "@acdh-oeaw/svelte-config/node-globals",
		files: ["svelte.config.*", "config/env.config.*", "scripts/**"],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	{
		name: "@acdh-oeaw/svelte-config/browser-globals",
		ignores: ["svelte.config.*", "config/env.config.*", "scripts/**"],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
	prettier,
);

export default config;
