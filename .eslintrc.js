module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['preact', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    complexity: ['warn', 5],
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
};
