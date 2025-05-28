# Radio 单选框​

在一组备选项中进行单选

## 基础用法​

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 `Radio` 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 `Radio value`属性的值， `value`可以是`String`、`Number` 或 `Boolean`。

<demo vue="../example/radio/Basic.vue"/>

## 禁用状态​

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态

<demo vue="../example/radio/Disabled.vue"/>

## 单选框组​

适用于在多个互斥的选项中选择的场景

结合`f-radio-group`元素和子元素`f-radio`可以实现单选组， 为 `f-radio-group` 绑定 `v-model`，再为 每一个 `f-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

<demo vue="../example/radio/Group.vue"/>

## API

### `f-radio` 组件属性

| 属性名     | 类型                          | 默认值  | 说明                              |
| ---------- | ----------------------------- | ------- | --------------------------------- |
| modelValue | `string \| number \| boolean` | -       | 选中绑定的值                      |
| value      | `string \| number \| boolean` | -       | 单选框的值                        |
| label      | `string \| number \| boolean` | -       | 当 `value` 没有值时使用 `label`   |
| name       | `string`                      | -       | 原生 `name` 值                    |
| size       | `string`                      | -       | 大小，取值范围为 `componentSizes` |
| disabled   | `boolean`                     | `false` | 是否禁用                          |

### `f-radio` 组件事件

| 事件名              | 回调参数                                          | 说明             |
| ------------------- | ------------------------------------------------- | ---------------- |
| `update:modelValue` | `(val: string \| number \| boolean \| undefined)` | 绑定值变化时触发 |
| `change`            | `(val: string \| number \| boolean \| undefined)` | 选中时触发       |

### `f-radio-group` 组件属性

| 属性名     | 类型                          | 默认值      | 说明                              |
| ---------- | ----------------------------- | ----------- | --------------------------------- |
| id         | `string`                      | -           | 原生 `id` 属性                    |
| modelValue | `string \| number \| boolean` | `undefined` | 绑定的值                          |
| name       | `string`                      | -           | 原生 `name` 属性                  |
| size       | `string`                      | -           | 大小，取值范围为 `componentSizes` |
| disabled   | `boolean`                     | `false`     | 是否禁用                          |

### `f-radio-group` 组件事件

| 事件名   | 回调参数                                          | 说明       |
| -------- | ------------------------------------------------- | ---------- |
| `change` | `(val: string \| number \| boolean \| undefined)` | 选中时触发 |
