# acdh-oeaw eslint configs

Shared configuration presets for [`eslint`](https://eslint.org/).

- `@acdh-oeaw/eslint-config`: recommended base config for typescript projects
- `@acdh-oeaw/eslint-config/strict`: enable additional strict rules for typescript projects
- `@acdh-oeaw/eslint-config-node`: additional recommended config for Node.js projects
- `@acdh-oeaw/eslint-config-vue2`: additional recommended config for Vue 2 projects
- `@acdh-oeaw/eslint-config-vue`: additional recommended config for Vue 3 projects
- `@acdh-oeaw/eslint-config-nuxt`: additional recommended config for Nuxt 3 projects
- `@acdh-oeaw/eslint-config-react`: additional recommended config for React projects
- `@acdh-oeaw/eslint-config-next`: additional recommended config for Next.js projects
- `@acdh-oeaw/eslint-config-astro`: additional recommended config for Astro projects
- `@acdh-oeaw/eslint-config-storybook`: additional recommended config for Storybook projects
- `@acdh-oeaw/eslint-config-playwright`: additional recommended config for Playwright projects

## How to install

```bash
npm install -D eslint @acdh-oeaw/eslint-config
# additional configs
npm install -D @acdh-oeaw/eslint-config-vue @acdh-oeaw/eslint-config-nuxt
```

Add the configs to `package.json`:

```json
{
	"eslintConfig": {
		"extends": [
			"@acdh-oeaw/eslint-config",
			"@acdh-oeaw/eslint-config-vue",
			"@acdh-oeaw/eslint-config-nuxt"
		]
	}
}
```

Optionally, enable additional rules, or enable strict preset:

```json
{
	"eslintConfig": {
		"extends": [
			"@acdh-oeaw/eslint-config",
			"@acdh-oeaw/eslint-config/strict",
			"@acdh-oeaw/eslint-config-vue",
			"@acdh-oeaw/eslint-config-nuxt"
		]
	},
	"rules": {
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error"
	}
}
```

## How to use

Add a script to `package.json`:

```json
{
	"lint:check": "eslint . --cache --ignore-path .gitignore",
	"lint:fix": "npm run lint:check -- --fix"
}
```

You can then run `npm run lint:check` to lint, and `npm run lint:fix` to fix auto-fixable errors.

## How to run with Git hooks

```bash
npm install -D lint-staged npm-run-all simple-git-hooks
```

To run the linter on every Git commit, add the following to package.json:

```json
{
	"scripts": {
		"format:check": "prettier . --cache --check --ignore-path .gitignore",
		"format:fix": "npm run format:check -- --write",
		"lint:check": "eslint . --cache --ignore-path .gitignore",
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
