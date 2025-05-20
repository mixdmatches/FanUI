# FanUI组件库

## 文档

[文档地址](https://mixdmatches.github.io/FanUI/)

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

## 提交规范

在 Git 提交信息里，不同类型的改动可以搭配不同的 emoji 来更清晰地传达改动意图。以下是常见代码提交类型及其对应的 emoji：

### 新增功能 (`feat`)

- `✨` (`:sparkles:`)：表示引入新功能，这是新增功能时最常用的 emoji。
  示例：`✨ feat: 新增用户登录功能`

### 修复 bug (`fix`)

- `🐛` (`:bug:`)：用于标记修复代码中的 bug。
  示例：`🐛 fix: 修复用户登录时的密码验证问题`

### 文档更新 (`docs`)

- `📝` (`:memo:`)：表示对文档进行了更新，如 README 文件、注释等。
  示例：`📝 docs: 更新 API 文档`

### 代码重构 (`refactor`)

- `♻️` (`:recycle:`)：表示对代码进行了重构，优化代码结构但不改变功能。
  示例：`♻️ refactor: 重构用户模块代码结构`

### 性能优化 (`perf`)

- `🚀` (`:rocket:`)：表示对代码进行了性能优化，提升了程序的运行速度或资源使用效率。
  示例：`🚀 perf: 优化数据库查询性能`

### 样式修改 (`style`)

- `💄` (`:lipstick:`)：用于标记对代码样式的修改，如代码格式、缩进等，不影响代码逻辑。
  示例：`💄 style: 统一代码缩进格式`

### 测试相关 (`test`)

- `✅` (`:white_check_mark:`)：表示添加或修改了测试代码。
  示例：`✅ test: 新增用户登录功能的单元测试`

### 构建过程或工具链修改 (`build`)

- `🛠️` (`:hammer_and_wrench:`)：表示对构建过程、工具链或依赖项进行了修改。
  示例：`🛠️ build: 更新 Webpack 配置`

### 持续集成相关 (`ci`)

- `⚙️` (`:gear:`)：表示对持续集成（CI）配置或脚本进行了修改。
  示例：`⚙️ ci: 更新 GitHub Actions 配置`

### 回滚更改 (`revert`)

- `⏪` (`:rewind:`)：表示回滚了之前的提交。
  示例：`⏪ revert: 回滚上一次的用户模块更新`

### 配置文件修改 (`chore`)

- `🔧` (`:wrench:`)：表示对配置文件进行了修改，如 `.gitignore`、`.eslintrc` 等。
  示例：`🔧 chore: 更新 .eslintrc 配置`
