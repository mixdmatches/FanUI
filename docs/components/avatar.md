# Avatar头像

## 基本使用

有三种尺寸，两种形状可选

<demo vue="../example/avatar/Basic.vue" />

## 类型

可以是图片，文字或者icon图标

<demo vue="../example/avatar/Type.vue" />

## API

### Props

| 属性名 | 说明            | 类型                           | 默认值   |
| ------ | --------------- | ------------------------------ | -------- |
| src    | 图片地址        | `string`                       | -        |
| alt    | 图片原生属性alt | `string`                       | -        |
| size   | 尺寸            | `small` \| `medium` \| `large` | `medium` |
| shape  | 形状            | `circle` \| `square`           | `square` |
| icon   | 图标形式的头像  | `[String, Object]`             | -        |
