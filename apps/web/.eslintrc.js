/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@budgit/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
