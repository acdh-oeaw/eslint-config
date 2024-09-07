import nodePlugin from "eslint-plugin-n";
import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(
	{
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	nodePlugin.configs["flat/recommended-module"],
	{
		name: "acdh-oeaw/node-config",
		rules: {
			"n/prefer-global/url": "warn",
			"n/prefer-global/url-search-params": "warn",
			"n/prefer-node-protocol": "error",
			"n/prefer-promises/fs": "warn",

			"n/no-extraneous-import": "off",
			"n/no-extraneous-require": "off",
			"n/no-missing-import": "off",
			"n/no-missing-require": "off",
			"n/no-unpublished-bin": "off",
			"n/no-unpublished-import": "off",
			"n/no-unpublished-require": "off",
		},
	},
);

export default config;
