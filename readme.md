# acdh-oeaw eslint configs

Shared configuration presets for [`eslint`](https://eslint.org/).

- `@acdh-oeaw/eslint-config`: recommended base config for typescript projects
- `@acdh-oeaw/eslint-config-astro`: additional recommended config for Astro projects
- `@acdh-oeaw/eslint-config-mdx`: additional recommended config for .mdx files
- `@acdh-oeaw/eslint-config-next`: additional recommended config for Next.js projects
- `@acdh-oeaw/eslint-config-node`: additional recommended config for Node.js projects
- `@acdh-oeaw/eslint-config-nuxt`: additional recommended config for Nuxt 3 projects
- `@acdh-oeaw/eslint-config-playwright`: additional recommended config for Playwright projects
- `@acdh-oeaw/eslint-config-react`: additional recommended config for React projects
- `@acdh-oeaw/eslint-config-solid`: additional recommended config for Solid projects
- `@acdh-oeaw/eslint-config-storybook`: additional recommended config for Storybook projects
- `@acdh-oeaw/eslint-config-tailwindcss`: additional recommended config for Tailwind CSS
- `@acdh-oeaw/eslint-config-vue`: additional recommended config for Vue 3 projects

## How to install

```bash
npm install -D eslint globals @acdh-oeaw/eslint-config
# additional configs
npm install -D @acdh-oeaw/eslint-config-react @acdh-oeaw/eslint-config-next
```

Add the configs to `eslint.config.ts`:

```ts
import baseConfig from "@acdh-oeaw/eslint-config";
import nextConfig from "@acdh-oeaw/eslint-config-next";
import reactConfig from "@acdh-oeaw/eslint-config-react";
import { config } from "typescript-eslint";

export default = config(baseConfig, reactConfig, nextConfig);
```

Optionally, enable additional rules:

```ts
import baseConfig from "@acdh-oeaw/eslint-config";
import nextConfig from "@acdh-oeaw/eslint-config-next";
import reactConfig from "@acdh-oeaw/eslint-config-react";
import gitignore from "eslint-config-flat-gitignore";
import { config } from "typescript-eslint";

export default config = (
	gitignore({ strict: false }),
	baseConfig,
	reactConfig,
	nextConfig,
	{
		rules: {
			"arrow-body-style": ["error", "always"],
			"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/require-array-sort-compare": "error",
			"@typescript-eslint/strict-boolean-expressions": "error",
			"react/jsx-sort-props": ["error", { reservedFirst: true }],
		},
	},
);
```

### How to install in Nuxt

For nuxt projects, you need to use the [`@nuxt/eslint`](https://eslint.nuxt.com/packages/module)
module, so `eslint` understands nuxt auto-imports.

```bash
npx nuxi module add eslint
```

In `nuxt.config.ts`, configure the module for "standalone" mode, since we provide our own config:

```ts
export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	eslint: {
		config: {
			standalone: true,
		},
	},
});
```

Pass our config to `withNuxt` in `eslint.config.ts`:

```ts
import baseConfig from "@acdh-oeaw/eslint-config";
import nuxtConfig from "@acdh-oeaw/eslint-config-nuxt";
import vueConfig from "@acdh-oeaw/eslint-config-vue";
import { config } from "typescript-eslint";

import { withNuxt } from "./.nuxt/eslint.config.mjs";

export default withNuxt(config(baseConfig, vueConfig, nuxtConfig));
```

### How to set up with Tailwind CSS

The tailwindcss config requires additional configuration:

```ts
import { resolve } from "node:path";

import baseConfig from "@acdh-oeaw/eslint-config";
import tailwindConfig from "@acdh-oeaw/eslint-config-tailwindcss";
import { config } from "typescript-eslint";

export default config(baseConfig, tailwindConfig, {
	settings: {
		tailwindcss: {
			/** Absolute path to css file with `@import "tailwindcss";` */
			config: resolve("./styles/index.css"),
		},
	},
});
```

## How to use

Add a script to `package.json`:

```json
{
	"lint:check": "eslint . --cache",
	"lint:fix": "npm run lint:check -- --fix"
}
```

You can then run `npm run lint:check` to lint, and `npm run lint:fix` to fix auto-fixable errors.

Note that `--cache` is not officially supported with `typescript-eslint`'s type-aware rules, because
eslint processes single files, but type checking requires whole-program analysis. Enabling caching
means you probably need to restart your editor's eslint plugin more often.

## How to run with Git hooks

```bash
npm install -D lint-staged npm-run-all2 simple-git-hooks
```

To run the linter on every Git commit, add the following to package.json:

```json
{
	"scripts": {
		"format:check": "prettier . --cache --check",
		"format:fix": "npm run format:check -- --write",
		"lint:check": "eslint . --cache",
		"lint:fix": "npm run lint:check -- --fix",
		"prepare": "npm run setup",
		"setup": "is-ci || simple-git-hooks",
		"validate": "run-p format:check lint:check"
	},
	"lint-staged": {
		"*.@(cjs|js|mjs|ts|tsx|vue)": ["eslint --cache --fix", "prettier --cache --write"],
		"*": "prettier --cache --ignore-unknown --write"
	},
	"simple-git-hooks": {
		"pre-commit": "npx lint-staged",
		"pre-push": "npm run validate"
	}
}
```

## Ignore `.gitignore` files

Either use
[`includeIgnoreFile` from `@eslint/compat`](https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files),
or [`eslint-config-flat-gitignore`](https://github.com/antfu/eslint-config-flat-gitignore).

## Editor integrations

### VS Code

Install the VS Code `vscode-eslint` plugin by pressing <kbd>Ctrl</kbd>+<kbd>P</kbd> and pasting the
following command:

```
ext install dbaeumer.vscode-eslint
```

Also, make sure to add `vscode-eslint` to the list of recommended plugins for your project in
`.vscode/extensions.json`:

```json
{
	"recommendations": ["dbaeumer.vscode-eslint"]
}
```

You may also want to enable "Fix auto-fixable errors on Save" in `.vscode/settings.json`:

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll": true
	}
}
```
