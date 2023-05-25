module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],

  ignorePatterns: ["tailwind.config.js"],

  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
};
