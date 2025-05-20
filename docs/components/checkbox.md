# checkbox多选框

## 基本用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<demo vue="../example/checkbox/Basic.vue" />

## 禁用状态

多选框不可用的状态。
设置 `disabled` 属性即可

<demo vue="../example/checkbox/Disabled.vue" />

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过`v-model`来绑定数组，用`label`来指定选项框对应的`value`。

<demo vue="../example/checkbox/CheckboxGroup.vue" />

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<demo vue="../example/checkbox/Indeterminate.vue" />

## Checkbox 组件 API

### 属性

| 属性名               | 类型                                    | 默认值      | 描述                       |
| -------------------- | --------------------------------------- | ----------- | -------------------------- |
| `v-model\modelValue` | `string \| number \| boolean`           | `undefined` | 用于双向绑定的值           |
| `label`              | `string \| number \| boolean \| object` | `undefined` | 选项框对应的 `value`       |
| `value`              | `string \| number \| boolean \| object` | `undefined` | 输入框的值                 |
| `indeterminate`      | `boolean`                               | -           | 表示 checkbox 的不确定状态 |
| `disabled`           | `boolean`                               | -           | 禁用状态                   |
| `checked`            | `boolean`                               | `false`     | 是否选中                   |
| `name`               | `string`                                | `undefined` | 原生 `name` 属性           |
| `size`               | `'large' \| 'default' \| 'small'`       | -           | 组件大小                   |

### 事件

| 事件名   | 参数                               | 描述                       |
| -------- | ---------------------------------- | -------------------------- |
| `change` | `val: string \| number \| boolean` | 当复选框状态发生变化时触发 |

## CheckboxGroup 组件 API

### 属性

| 属性名               | 类型                                    | 默认值      | 描述                             |
| -------------------- | --------------------------------------- | ----------- | -------------------------------- |
| `v-model\modelValue` | `Exclude<CheckboxValueType, boolean>[]` | `[]`        | 用于双向绑定的数组，存储选中的值 |
| `disabled`           | `boolean`                               | -           | 禁用状态                         |
| `size`               | `'large' \| 'default' \| 'small'`       | `'default'` | 组件大小                         |

### 事件

| 事件名   | 参数                                         | 描述                         |
| -------- | -------------------------------------------- | ---------------------------- |
| `change` | `val: Exclude<CheckboxValueType, boolean>[]` | 当复选框组状态发生变化时触发 |
