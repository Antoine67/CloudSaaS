module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["service-worker.js"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    //'no-console': 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-this-alias": ["off"],
      },
    },
  ],
};
