import { defineConfig } from "eslint/config";
import playwrightPlugin from "eslint-plugin-playwright";

const config = defineConfig({
	name: "acdh-oeaw/playwright-config",
	files: ["e2e/**/*.@(spec|test).@(ts|tsx)"],
	extends: [playwrightPlugin.configs["flat/recommended"]],
});

export default config;
