// eslint.config.cjs
const { FlatCompat, getRecommendedConfig } = require("@eslint/eslintrc");

// Load the built-in recommended ESLint config
const recommendedConfig = getRecommendedConfig();

// Initialize FlatCompat with the required parameter
const compat = new FlatCompat({ baseDirectory: process.cwd(), recommendedConfig });

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