import ts from "typescript-eslint";

const config = ts.config(
	{
		...mdx.flat,
		/** Lint code blocks. */
		processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
	},
	{
		...mdx.flatCodeBlocks,
		rules: {
			...mdx.flatCodeBlocks.rules,
		},
	},
);

export default config;
