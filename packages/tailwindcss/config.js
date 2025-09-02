import { defineConfig } from "eslint/config";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const config = defineConfig(tailwindcssPlugin.configs["flat/recommended"], {
	name: "acdh-oeaw/tailwindcss-config",
	settings: {
		tailwindcss: {
			callees: ["cn", "styles"],
			ignoredKeys: ["combinations", "defaults"],
		},
	},
	rules: {
		"tailwindcss/migration-from-tailwind-2": "off",
	},
});

export default config;
