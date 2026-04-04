import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js"],
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
    },
    languageOptions: {
      env: { browser: true, es2021: true },
    },
  },
];
