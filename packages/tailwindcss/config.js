import { defineConfig } from "eslint/config";
import tailwindcssPlugin from "eslint-plugin-better-tailwindcss";

const config = defineConfig(tailwindcssPlugin.configs.recommended, {
	name: "acdh-oeaw/tailwindcss-config",
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
		"enforce-canonical-classes": "error",
		"enforce-consistent-important-position": "off",
		"enforce-consistent-line-wrapping": "off",
		"enforce-consistent-variable-syntax": "error",
		"enforce-shorthand-classes": "warn",
	},
});

export default config;
