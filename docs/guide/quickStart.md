# 快速开始

## 1. 完整引入​

如果你对打包后的文件大小不是很在乎，那么使用完整引入会更方便。

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

## 2. 按需导入

Fan-ui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。
注意：按需导入也需要在main.ts中引入样式文件

```vue
<script setup lang="ts">
import { FButton } from '@mixed_matches/fanui'
</script>

<template>
  <f-button>按钮</f-button>
</template>
```
