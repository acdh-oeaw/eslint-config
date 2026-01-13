import * as mdx from "eslint-plugin-mdx";
import { defineConfig } from "eslint/config";

const config = defineConfig(
	{
		name: "acdh-oeaw/mdx-config",
		extends: [mdx.flat],
		/** Lint code blocks. */
		processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
	},
	{
		name: "acdh-oeaw/mdx-config/code-blocks",
		extends: [mdx.flatCodeBlocks],
	},
);

export default config;
