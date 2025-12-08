import { defineConfig } from "eslint/config";
import tailwindcssPlugin from "eslint-plugin-better-tailwindcss";

const config = defineConfig({
	name: "acdh-oeaw/tailwindcss-config",
	extends: [tailwindcssPlugin.configs.recommended],
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
		"better-tailwindcss/enforce-canonical-classes": "error",
		"better-tailwindcss/enforce-consistent-important-position": "off",
		"better-tailwindcss/enforce-consistent-line-wrapping": "off",
		"better-tailwindcss/enforce-consistent-variable-syntax": "error",
	},
});

export default config;
