import storybookPlugin from "eslint-plugin-storybook";
// import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(...storybookPlugin.configs["flat/recommended"], {
	name: "acdh-oeaw/storybook-config",
	files: ["**/*.stories.@(ts|tsx)", "config/storybook/**/*.@(ts|tsx)"],
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"import-x/no-default-export": "off",
		"react/function-component-definition": ["off", { namedComponents: "function-expression" }],
	},
});

export default config;
