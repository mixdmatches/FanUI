# Bubble 气泡

## 基本使用

基本用法只需要传入 `content` 即可

<demo vue="../example/bubble/Basic.vue" />

## 显示Loading状态

当设置 `loading` 为 `true` 时，将不会显示气泡内的其他区域。我们内置了一个默认的 `loading` 状态，如果不满足你的使用需求，可以通过 `loading` 插槽来自定义 `loading`

<demo vue="../example/bubble/Loading.vue" />

## 气泡样式

默认为 `filled`，还可以设置 `bordered` 和 `none`，其中 `filled` 和 `bordered` 我们为其设置了间距和圆角，`none` 则不带任何样式

<demo vue="../example/bubble/Variant.vue" />

## 气泡对齐方式

提供了 `left` 和 `right` 两种对齐方式，区分用户提问和模型回答

<demo vue="../example/bubble/Alignment.vue" />

## 配置头像

默认的我们的头像将显示在侧边，你也可以通过 `avatarPosition` 将其显示在气泡上方

<demo vue="../example/bubble/Avatar.vue" />

## 自定义气泡操作区域

我们还为气泡提供了 `top` 和 `bottom` 两个自定义区域，方便你实现一些自定义需求

<demo vue="../example/bubble/Slot.vue" />

## API

### props

| 属性名         | 说明             | 类型                             | 默认值   |
| -------------- | ---------------- | -------------------------------- | -------- |
| content        | 气泡内容         | `string`                         | -        |
| variant        | 气泡样式         | `filled` \| `bordered` \| `none` | `filled` |
| align          | 气泡对齐方式     | `left` \| `right`                | `right`  |
| avatarConfig   | 头像配置         | AvatarConfigType                 | -        |
| avatarPosition | 头像位置         | `left` \| `top`                  | `left`   |
| loading        | 是否显示加载状态 | `boolean`                        | `false`  |
