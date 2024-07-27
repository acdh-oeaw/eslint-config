/** @typedef {import("eslint").Linter.Config} Config */

import { FlatCompat } from "@eslint/eslintrc";
import nodePlugin from "eslint-plugin-n";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {Array<Config>} */
const config = [
	...compat.config(nodePlugin.configs.recommended),
	{
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

export default config;
