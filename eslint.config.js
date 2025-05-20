import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import stylelint from 'stylelint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import babelParser from '@babel/eslint-parser'
import { defineConfig } from 'eslint/config'

// 定义一个自定义的处理器来处理 SCSS 文件
const scssProcessor = {
  preprocess: text => {
    return [text]
  },
  postprocess: messages => {
    return messages[0]
  },
  supportsAutofix: true
}

export default defineConfig([
  {
    ignores: ['node_modules', 'dist', 'public', 'build']
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    },
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { tseslint },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    extends: ['tseslint/recommended'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // 关闭 any 类型报错
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-console': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  },
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          json: true
        },
        // 允许注释
        allowComments: true
      }
    }
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended']
  },
  {
    files: ['**/*.{css}'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended']
  },
  {
    files: ['**/*.{scss}'],
    plugins: {
      stylelint: {
        processors: {
          '.scss': scssProcessor
        },
        rules: stylelint.rules
      }
    },
    languageOptions: {
      parser: stylelint.parse,
      parserOptions: {
        syntax: 'scss'
      }
    },
    rules: {
      'scss/at-rule-no-unknown': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  },
  eslintPluginPrettierRecommended
])
