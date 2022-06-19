module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    commonjs: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],

  overrides: [
    {
      files: ["**/*.func.test.js"],
      plugins: ["eslint-plugin-jest"],
      extends: ["plugin:jest/recommended"],
      rules: { "jest/prefer-expect-assertions": "off" },
    },
  ],

  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    jest: true,
    DDS: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    semi: ["error", "always"],
    eqeqeq: ["warn", "always"],
    "max-depth": ["error", 4],
    "capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
    "no-else-return": ["error", { allowElseIf: false }],
    "prefer-const": ["error", { ignoreReadBeforeAssign: false }],
  },
};
