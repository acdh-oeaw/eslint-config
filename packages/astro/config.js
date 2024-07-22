import parser from "astro-eslint-parser";
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
	{
		languageOptions: {
			ecmaVersion: 5,
			sourceType: "script",
			parserOptions: {
				extraFileExtensions: [".astro"],
			},
		},
		rules: {
			"import-x/no-unresolved": [
				"error",
				{
					ignore: [
						"astro:actions",
						"astro:assets",
						"astro:components",
						"astro:content",
						"astro:i18n",
						"astro:middleware",
						"astro:ssr-manifest",
						"astro:transitions",
					],
				},
			],
		},
	},
	...compat
		.extends("plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended", "prettier")
		.map((config) => ({
			...config,
			files: ["./**/*.astro"],
		})),
	{
		files: ["./**/*.astro"],
		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: "script",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
		rules: {
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-declaration-merging": "off",
			"@typescript-eslint/no-unsafe-enum-comparison": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"astro/jsx-a11y/anchor-is-valid": [
				"error",
				{
					components: ["Link"],
					aspects: ["invalidHref", "preferButton"],
				},
			],
			"astro/jsx-a11y/no-autofocus": [
				"error",
				{
					ignoreNonDOM: true,
				},
			],
			"astro/jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
		},
	},
];
