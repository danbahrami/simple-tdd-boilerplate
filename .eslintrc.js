module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: "eslint:recommended",
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {},
};
