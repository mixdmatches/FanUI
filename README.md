# FanUI组件库

## 介绍

FanUI是一款基于Vue3的UI组件库，提供了丰富的组件和工具，帮助开发者快速构建用户界面。

## 安装

`pnpm install @mixed_matches/fan-ui`

## 使用

1. 全部导入

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 引入样式文件
import '@mixed_matches/fanui/es/style.css'
import FanUI from '@mixed_matches/fanui'

const app = createApp(App)
app.use(FanUI)
app.mount('#app')
```

2. 按需导入

注意：按需导入也需要在main.ts中引入样式文件

```vue
<script setup lang="ts">
import { FButton } from '@mixed_matches/fanui'
</script>

<template>
  <f-button>按钮</f-button>
</template>
```
