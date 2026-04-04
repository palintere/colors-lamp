module.exports = {
  env: {
    browser: true, // allows browser globals like window, document
    es2021: true,  // allows modern JS
  },
  extends: [
    "eslint:recommended" // basic recommended rules
  ],
  parserOptions: {
    ecmaVersion: 13, // latest ECMAScript
    sourceType: "module"
  },
  rules: {
    // customize rules here, for example:
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
  }
};
