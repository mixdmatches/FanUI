<script setup>
import Basic from '../example/button/basic.vue'
import Disabled from '../example/button/disabled.vue'
import Link from '../example/button/link.vue'
import Text from '../example/button/text.vue'
</script>
<style>
    details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
  .example {
  margin: 10px 0;
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.mb-10{
  margin-bottom: 1rem;
}
</style>

# Button 按钮

## 基础用法

<div class="example">
<Basic />
</div>

<details>
<summary>查看组件源代码</summary>

```vue
<template>
  <div class="mb-10">
    <f-button>default</f-button>
    <f-button type="primary">primary</f-button>
    <f-button type="success">success</f-button>
    <f-button type="info">info</f-button>
    <f-button type="warning">warning</f-button>
    <f-button type="danger">danger</f-button>
  </div>
  <div class="mb-10">
    <f-button plain>plain</f-button>
    <f-button type="primary" plain>primary</f-button>
    <f-button type="success" plain>success</f-button>
    <f-button type="info" plain>info</f-button>
    <f-button type="warning" plain>warning</f-button>
    <f-button type="danger" plain>danger</f-button>
  </div>
  <div class="mb-10">
    <f-button round>round</f-button>
    <f-button type="primary" round>primary</f-button>
    <f-button type="success" round>success</f-button>
    <f-button type="info" round>info</f-button>
    <f-button type="warning" round>warning</f-button>
    <f-button type="danger" round>danger</f-button>
  </div>
  <div class="mb-10">
    <f-button circle :icon="Search"></f-button>
    <f-button type="primary" circle :icon="AddOne"></f-button>
    <f-button type="success" circle :icon="Editor"></f-button>
    <f-button type="info" circle :icon="Mail"></f-button>
    <f-button type="warning" circle :icon="Delete"></f-button>
    <f-button type="danger" circle :icon="Like"></f-button>
  </div>
</template>

<script lang="ts" setup>
import { Search, AddOne, Editor, Mail, Delete, Like } from '@icon-park/vue-next'
</script>
```

</details>

## 禁用状态

<div class="example">
<Disabled />
</div>

<details>
<summary>查看组件源代码</summary>

```vue
<template>
  <div class="mb-10">
    <f-button disabled>default</f-button>
    <f-button disabled type="primary">primary</f-button>
    <f-button disabled type="success">success</f-button>
    <f-button disabled type="info">info</f-button>
    <f-button disabled type="warning">warning</f-button>
    <f-button disabled type="danger">danger</f-button>
  </div>
  <div class="mb-10">
    <f-button disabled plain>default</f-button>
    <f-button disabled plain type="primary">primary</f-button>
    <f-button disabled plain type="success">success</f-button>
    <f-button disabled plain type="info">info</f-button>
    <f-button disabled plain type="warning">warning</f-button>
    <f-button disabled plain type="danger">danger</f-button>
  </div>
</template>
```

</details>

## 链接按钮

<div class="example">
<Link />
</div>

<details>
<summary>查看组件源代码</summary>

```vue
<template>
  <div class="mb-10">
    <f-button link>default</f-button>
    <f-button link type="primary">primary</f-button>
    <f-button link type="success">success</f-button>
    <f-button link type="info">info</f-button>
    <f-button link type="warning">warning</f-button>
    <f-button link type="danger">danger</f-button>
  </div>
  <div class="mb-10">
    <f-button disabled link plain>plain</f-button>
    <f-button disabled link type="primary" plain>primary</f-button>
    <f-button disabled link type="success" plain>success</f-button>
    <f-button disabled link type="info" plain>info</f-button>
    <f-button disabled link type="warning" plain>warning</f-button>
    <f-button disabled link type="danger" plain>danger</f-button>
  </div>
</template>
```

</details>

## 文字按钮
没有背景和边框的按钮

<div class="example">
<Text />
</div>

<details>
<summary>查看组件源代码</summary>

```vue
<template>
  <div class="mb-10">
    <f-button text bg>default</f-button>
    <f-button text bg type="primary">primary</f-button>
    <f-button text bg type="success">success</f-button>
    <f-button text bg type="info">info</f-button>
    <f-button text bg type="warning">warning</f-button>
    <f-button text bg type="danger">danger</f-button>
  </div>
  <div class="mb-10">
    <f-button text>default</f-button>
    <f-button text type="primary">primary</f-button>
    <f-button text type="success">success</f-button>
    <f-button text type="info">info</f-button>
    <f-button text type="warning">warning</f-button>
    <f-button text type="danger">danger</f-button>
  </div>
  <div class="mb-10">
    <f-button disabled text plain>plain</f-button>
    <f-button disabled text type="primary" plain>primary</f-button>
    <f-button disabled text type="success" plain>success</f-button>
    <f-button disabled text type="info" plain>info</f-button>
    <f-button disabled text type="warning" plain>warning</f-button>
    <f-button disabled text type="danger" plain>danger</f-button>
  </div>
</template>
```

</details>
