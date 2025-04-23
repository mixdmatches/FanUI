# Icon 图标

Fan-ui 推荐使用 xicon 作为图标库

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，需要全局注册组件，才能够直接在项目里使用

<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
</script>

  <div>
    <f-icon color="red" size="20">
      <add-circle></add-circle>
    </f-icon>
  </div>

<details>
<summary>查看组件源代码</summary>

```vue
<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
</script>

<template>
  <div>
    <f-icon color="red" size="20">
      <add-circle></add-circle>
    </f-icon>
  </div>
</template>
```

</details>

## API

### Icon Props

| 属性名 | 类型           | 默认值    | 说明     |
| ------ | -------------- | --------- | -------- |
| color  | string         | undefined | 图标颜色 |
| size   | string\|number | undefined | 图标大小 |
