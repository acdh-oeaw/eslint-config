import { defineConfig } from "eslint/config";
import tailwindcssPlugin from "eslint-plugin-better-tailwindcss";

const config = defineConfig(tailwindcssPlugin.configs["flat/recommended"], {
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
		"tailwindcss/migration-from-tailwind-2": "off",
	},
});

export default config;
