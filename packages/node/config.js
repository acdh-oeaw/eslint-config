import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends("plugin:n/recommended").map((config) => ({
		...config,
		files: ["./**/*.@(cjs|js|mjs|ts)"],
	})),
	{
		files: ["./**/*.@(cjs|js|mjs|ts)"],
		rules: {
			"n/prefer-global/url": ["warn"],
			"n/prefer-global/url-search-params": ["warn"],
			"n/prefer-node-protocol": "error",
			"n/prefer-promises/fs": ["warn"],
			"n/no-extraneous-import": "off",
			"n/no-extraneous-require": "off",
			"n/no-missing-import": "off",
			"n/no-missing-require": "off",
			"n/no-unpublished-bin": "off",
			"n/no-unpublished-import": "off",
			"n/no-unpublished-require": "off",
		},
	},
];
