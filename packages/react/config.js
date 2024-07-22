import { fixupConfigRules } from "@eslint/compat";
import reactCompiler from "eslint-plugin-react-compiler";
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
	...fixupConfigRules(
		compat.extends(
			"plugin:react/recommended",
			"plugin:react/jsx-runtime",
			"plugin:react-hooks/recommended",
			"plugin:jsx-a11y/recommended",
		),
	).map((config) => ({
		...config,
		files: ["./**/*.@(ts|tsx)"],
	})),
	{
		files: ["./**/*.@(ts|tsx)"],
		plugins: {
			"react-compiler": reactCompiler,
		},
		settings: {
			react: {
				version: "detect",
			},
			formComponents: ["Form"],
			linkComponents: [
				{
					name: "Link",
				},
				{
					name: "NavLink",
				},
			],
		},
		rules: {
			"jsx-a11y/anchor-is-valid": [
				"error",
				{
					components: ["Link"],
				},
			],
			"jsx-a11y/no-autofocus": [
				"error",
				{
					ignoreNonDOM: true,
				},
			],
			"jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
			"react/boolean-prop-naming": "error",
			"react/button-has-type": "error",
			"react/function-component-definition": "error",
			"react/jsx-no-leaked-render": "error",
			"react/jsx-no-target-blank": "off",
			"react/prop-types": "off",
			"react-compiler/react-compiler": "error",
		},
	},
];
