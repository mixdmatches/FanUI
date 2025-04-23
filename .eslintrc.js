const { defineOptions } = require("vue");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // vue3解析 https://eslint.vuejs.org/
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
  },
  globals: {
    defineProps: "readonly",
    defineOptions: "readonly",
  },
};
