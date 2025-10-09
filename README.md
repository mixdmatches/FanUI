# 🎉 FanUI组件库 🎉

## 📋 特性

- 🌈 支持按需引入，减小打包体积
- 🛠 支持Vue3
- 📦 支持TypeScript
- 📖 文档查看
- 📦 开箱即用

## 🔗 地址链接

[文档地址](https://mixdmatches.github.io/FanUI/)

[github地址](https://github.com/mixdmatches/FanUI)

[npm地址](https://www.npmjs.com/package/@mixed_matches/fanui)

## 🌟 介绍

FanUI是一款基于Vue3的UI组件库，提供了丰富的组件和工具，帮助开发者快速构建用户界面。

## 🔧 安装

```bash
npm install @mixed_matches/fanui
```

```bash
pnpm install @mixed_matches/fanui
```

```bash
yarn add @mixed_matches/fanui
```

## 🛠 使用

1. 📦 全部导入

```typescript
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式文件
import '@mixed_matches/fanui/es/style.css'
import FanUI from '@mixed_matches/fanui'

const app = createApp(App)
app.use(FanUI)
app.mount('#app')
```

2. 📥 按需导入

注意：按需导入也需要在main.ts中引入样式文件

```vue
<script setup lang="ts">
import { FButton } from '@mixed_matches/fanui'
</script>

<template>
  <f-button>按钮</f-button>
</template>
```

## 🔗 联系我

- 邮箱：[1919600547@qq.com](mailto:1919600547@qq.com)
- QQ：1919600547
