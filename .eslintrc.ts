/** @format */

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
