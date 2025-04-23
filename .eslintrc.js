module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // vue3解析 https://eslint.vuejs.org/
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    'plugin:react/recommended', // 添加对 React 和 JSX 的支持
    'stylelint-config-standard',
    'stylelint-config-standard-scss'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // 启用 JSX 支持
    }
  },
  plugins: [
    'react', // 添加 react 插件
    'stylelint-scss'
  ],
  settings: {
    react: {
      version: 'detect' // 自动检测 React 版本
    }
  },
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    defineProps: 'readonly',
    defineOptions: 'readonly'
  }
}
