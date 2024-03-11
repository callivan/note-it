module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: 'current', 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'sonarjs', 'simple-import-sort', 'jest'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'jest/expect-expect': 'off',
  },
};
