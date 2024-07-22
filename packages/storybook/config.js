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
	...compat.extends("plugin:storybook/recommended").map((config) => ({
		...config,
		files: ["./**/*.stories.ts", "./**/*.stories.tsx"],
	})),
	{
		files: ["./**/*.stories.ts", "./**/*.stories.tsx"],
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"import-x/no-default-export": "off",

			"react/function-component-definition": [
				"off",
				{
					namedComponents: "function-expression",
				},
			],
		},
	},
];
