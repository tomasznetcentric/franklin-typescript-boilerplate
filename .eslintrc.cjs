module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {},
  plugins: ['@typescript-eslint'],
  rules: {},
};
