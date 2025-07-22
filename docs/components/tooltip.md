# Tooltip 文字提示

常用于鼠标Hover时的提示信息

## 基础用法

Tooltip 组件提供 9 种定位组合，支持灵活的提示框展示位置。通过下方示例可直观了解各种定位效果，选择符合您需求的方案。

提示内容通过 `content` 属性定义，弹出位置由 `placement` 属性控制。`placement` 属性格式为：`[方向]-[对齐位置]`，其中：

- 方向：`top、left、right、bottom`
- 对齐位置：`start, end`，默认为空。

<demo vue="../example/tooltip/basic.vue" />

## 触发方式

Tooltip 组件提供 2 种触发方式，分别为：`hover、click`。通过 `trigger` 属性设置触发方式。

<demo vue="../example/tooltip/trigger.vue" />

## API

### props

| 属性          | 类型      | 默认值   | 说明        |
| ------------- | --------- | -------- | ----------- |
| content       | `string`  | -        | 提示内容    |
| placement     | `string`  | `bottom` | 弹出位置    |
| trigger       | `string`  | `hover`  | 触发方式    |
| manual        | `boolean` | `false`  | 手动模式    |
| transition    | `string`  | `fade`   | 过渡动画    |
| popperOptions | `object`  | `{}`     | popper 配置 |

### event

| 事件名         | 说明         | 类型                         |
| -------------- | ------------ | ---------------------------- |
| visible-change | 可见状态改变 | `(visible: boolean) => void` |
