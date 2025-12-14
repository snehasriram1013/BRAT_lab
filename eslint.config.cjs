const tsParser = require('@typescript-eslint/parser');
const svelte = require('eslint-plugin-svelte');
const prettier = require('eslint-config-prettier');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		ignores: ['.svelte-kit/**', 'build/**', 'dist/**', 'node_modules/**']
	},
	{
		files: ['**/*.{js,ts}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module'
			}
		}
	},
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.svelte']
			}
		}
	},
	prettier
];
