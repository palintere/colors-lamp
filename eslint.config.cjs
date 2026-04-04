module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",  
      globals: { window: "readonly", document: "readonly" },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-cond-assign": "error",
      "no-constant-condition": "error",
    },
  },
];