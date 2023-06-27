/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.@(cjs|js|mjs|ts)"],
			extends: ["plugin:n/recommended"],
			rules: {
				"n/prefer-global/url": ["warn"],
				"n/prefer-global/url-search-params": ["warn"],
				"n/prefer-promises/fs": ["warn"],
			},
		},
	],
};

module.exports = config;
