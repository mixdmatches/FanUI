# Collapse 折叠面板

Collapse 折叠面板是一种常用的内容区域折叠/展开组件，适用于以下场景：

- 需要分组显示大量内容时
- 需要节省页面空间时
- 需要按分类展示信息时

## 基本用法

可同时展开多个面板，面板之间不影响

<demo vue="../example/collapse/Basic.vue"/>

## 手风琴模式

Collapse 组件还支持手风琴模式，即每次只能展开一个内容区域，其他区域会自动折叠。

<demo vue="../example/collapse/Accordion.vue"/>

## 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

<demo vue="../example/collapse/CustomTitle.vue"/>

## 自定义图标

可以通过具名 `slot` 来自定义图标或者内容

<demo vue="../example/collapse/CustomIcon.vue"/>

## API

### Collapse Props

| 属性名             | 说明       | 类型                                    | 默认值  |
| ------------------ | ---------- | --------------------------------------- | ------- |
| modelValue/v-model | 绑定值     | `string`\| `string/number[]`\| `number` | []      |
| accordion          | 手风琴模式 | `boolean`                               | `false` |

### Collapse Event

| 事件名 | 说明                                                                    | 类型                                |
| ------ | ----------------------------------------------------------------------- | ----------------------------------- |
| change | 切换当前活动面板，在手风琴模式下其类型是`string`，在其他模式下是`array` | `(val: string \| string[]) => void` |

### CollapseItem Props

| 属性名  | 说明       | 类型     | 默认值 |
| ------- | ---------- | -------- | ------ |
| name    | 唯一标识符 | `string` | -      |
| title   | 标题       | `string` | ''     |
| content | 内容       | `string` | -      |
| icon    | 图标       | `object` | Right  |

### CollapseItem Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| icon    | 自定义图标 |
| title   | 自定义标题 |
| default | 自定义内容 |
