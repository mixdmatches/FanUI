<!-- <script setup>
// import Basic from '../example/icon/basic.vue'
</script> -->

# Icon 图标

Fan-ui 推荐使用 `@icon-park/vue-next` 作为图标库

```
$ pnpm install @icon-park/vue-next
```

## 基础用法

<div class="example">
<IconBasic/>
</div>

<details>
<summary>查看组件源代码</summary>

```vue
<template>
  <f-icon>
    <Search></Search>
  </f-icon>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
</script>
```

</details>

## API

### Icon Props

| 属性名 | 类型           | 默认值    | 说明     |
| ------ | -------------- | --------- | -------- |
| color  | string         | undefined | 图标颜色 |
| size   | string\|number | undefined | 图标大小 |
