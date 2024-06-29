/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.@(cjs|js|mjs|ts)"],
			extends: ["plugin:n/recommended"],
			rules: {
				"n/prefer-global/url": ["warn"],
				"n/prefer-global/url-search-params": ["warn"],
				"n/prefer-node-protocol": "error",
				"n/prefer-promises/fs": ["warn"],
				/** These should be handled by `typescript` and `eslint-plugin-import-x` already. */
				"n/no-extraneous-import": "off",
				"n/no-extraneous-require": "off",
				"n/no-missing-import": "off",
				"n/no-missing-require": "off",
				"n/no-unpublished-bin": "off",
				"n/no-unpublished-import": "off",
				"n/no-unpublished-require": "off",
			},
		},
	],
};

module.exports = config;
