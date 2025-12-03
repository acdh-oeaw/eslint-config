import { defineConfig } from "eslint/config";
import tailwindcssPlugin from "eslint-plugin-better-tailwindcss";

/**
 * Need to define plugin and rules explicitly until proper flat config support.
 *
 * @see {@link https://github.com/schoero/eslint-plugin-better-tailwindcss/pull/244}
 */
const config = defineConfig({
	name: "acdh-oeaw/tailwindcss-config",
	plugins: {
		"better-tailwindcss": tailwindcssPlugin,
	},
	settings: {
		"better-tailwindcss": {
			callees: [
				"cn",
				[
					"styles",
					[
						{
							match: "strings",
						},
						{
							match: "objectValues",
							pathPattern: "^combinations\\[\\d+\\]\\[1\\]$",
						},
					],
				],
			],
		},
	},
	rules: {
		...tailwindcssPlugin.configs.recommended.rules,
		"better-tailwindcss/enforce-canonical-classes": "error",
		"better-tailwindcss/enforce-consistent-important-position": "off",
		"better-tailwindcss/enforce-consistent-line-wrapping": "off",
		"better-tailwindcss/enforce-consistent-variable-syntax": "error",
	},
});

export default config;
