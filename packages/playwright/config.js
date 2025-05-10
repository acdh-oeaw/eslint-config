import playwrightPlugin from "eslint-plugin-playwright";
import ts from "typescript-eslint";

const config = ts.config({
	name: "acdh-oeaw/playwright-config",
	files: ["e2e/**/*.@(spec|test).@(ts|tsx)"],
	extends: playwrightPlugin.configs["flat/recommended"],
});

export default config;
