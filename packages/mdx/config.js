import ts from "typescript-eslint";

const config = ts.config(
	{
		name: "acdh-oeaw/mdx-config",
		...mdx.flat,
		/** Lint code blocks. */
		processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
	},
	{
		name: "acdh-oeaw/mdx-config/code-blocks",
		...mdx.flatCodeBlocks,
		rules: {
			...mdx.flatCodeBlocks.rules,
		},
	},
);

export default config;
