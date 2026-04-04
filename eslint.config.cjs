// eslint.config.cjs
const { FlatCompat } = require("@eslint/eslintrc");

// Initialize FlatCompat to use old-style configs
const compat = new FlatCompat({ baseDirectory: process.cwd() });

module.exports = [
  // Load recommended ESLint rules
  ...compat.extends("eslint:recommended"),

  // Apply language options to all JS files
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  },
];