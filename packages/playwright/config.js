/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import playwrightPlugin from "eslint-plugin-playwright";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	{
		files: ["./e2e/**/*.@(spec|test).@(ts|tsx)"],
		...compat.extends(playwrightPlugin.configs.recommended),
	},
];

export default config;
