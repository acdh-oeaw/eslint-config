/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.@(ts|tsx)"],
			extends: [
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"plugin:react-hooks/recommended",
				"plugin:jsx-a11y/recommended",
			],
			plugins: ["react-compiler"],
			settings: {
				react: {
					version: "detect",
				},
				formComponents: ["Form"],
				linkComponents: [{ name: "Link" }, { name: "NavLink" }],
			},
			rules: {
				"jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
				"jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
				"jsx-a11y/no-redundant-roles": ["error", { ul: ["list"], ol: ["list"] }],
				"react/boolean-prop-naming": "error",
				"react/button-has-type": "error",
				"react/function-component-definition": "error",
				"react/jsx-no-leaked-render": "error",
				"react/jsx-no-target-blank": "off",
				"react/prop-types": "off",
				"react-compiler/react-compiler": "error",
			},
		},
	],
};

module.exports = config;
