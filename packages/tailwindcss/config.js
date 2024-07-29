import tailwindcssPlugin from "eslint-plugin-tailwindcss";
// import globals from "globals";
import ts from "typescript-eslint";

const config = ts.config(...tailwindcssPlugin.configs["flat/recommended"], {
	settings: {
		tailwindcss: {
			callees: ["cn", "variants"],
		},
	},
});

export default config;
