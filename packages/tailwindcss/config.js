import { defineConfig } from "eslint/config";
import tailwindcssPlugin from "eslint-plugin-better-tailwindcss";
import { getDefaultCallees } from "eslint-plugin-better-tailwindcss/api/defaults";
import { MatcherType } from "eslint-plugin-better-tailwindcss/api/types";

const config = defineConfig({
	name: "acdh-oeaw/tailwindcss-config",
	extends: [tailwindcssPlugin.configs.recommended],
	settings: {
		"better-tailwindcss": {
			callees: [
				...getDefaultCallees(),
				[
					"cn",
					[
						{
							match: MatcherType.String,
						},
						{
							match: MatcherType.ObjectValue,
						},
					],
				],
				[
					"styles",
					[
						{
							match: MatcherType.String,
						},
						{
							match: MatcherType.ObjectValue,
							pathPattern: "^base$",
						},
						{
							match: MatcherType.ObjectValue,
							pathPattern: "^variants.*$",
						},
						{
							match: MatcherType.ObjectValue,
							pathPattern: String.raw`^combinations\[\d+\]\[1\]$`,
						},
					],
				],
			],
		},
	},
	rules: {
		"better-tailwindcss/enforce-canonical-classes": "error",
		"better-tailwindcss/enforce-consistent-class-order": ["error", { order: "strict" }],
		"better-tailwindcss/enforce-consistent-line-wrapping": "off",
		"better-tailwindcss/enforce-consistent-variable-syntax": "error",
	},
});

export default config;
