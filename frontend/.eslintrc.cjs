const config = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		quotes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: true },
		],
		'prettier/prettier': [
			'error',
			{ singleQuote: true, useTabs: true, tabWidth: 4 },
		],
		indent: ['error', 'tab', { SwitchCase: 1 }],
	},
};

export default config;
