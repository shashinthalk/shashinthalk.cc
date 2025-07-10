module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    plugins: ['react'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { jsx: true }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // Add custom rules or overrides here
    }
  };
  