// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      env: {
        browser: true,   // allows document, window, XMLHttpRequest
        es2021: true     // modern JS globals
      }
    },
    rules: {
      "no-unused-vars": "warn",   // optionally make some warnings instead of errors
      "no-undef": "error"
    }
  }
];