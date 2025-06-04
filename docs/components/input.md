# Input 输入框组件

## 基础用法

<demo vue="../example/input/Basic.vue" />

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<demo vue="../example/input/Disabled.vue" />

## 一键清空​

使用 `clearable` 属性即可得到一个可一键清空的输入框

<demo vue="../example/input/Clearable.vue" />

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<demo vue="../example/input/Password.vue" />

## 带图标的输入框

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

<demo vue="../example/input/Icon.vue" />

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

<demo vue="../example/input/Compose.vue" />

## 尺寸

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

<demo vue="../example/input/Size.vue" />

## API

### Props

| 属性名       | 类型                              | 默认值  | 说明                                 |
| ------------ | --------------------------------- | ------- | ------------------------------------ |
| type         | `string`                          | `text`  | 输入框类型，如 `text`, `password` 等 |
| size         | `'' \| default \| small \| large` | -       | 输入框尺寸                           |
| modelValue   | `string \| number`                | `''`    | 输入框绑定的值                       |
| placeholder  | `string`                          | `''`    | 输入框占位文本                       |
| clearable    | `boolean`                         | `false` | 是否可清空                           |
| showPassword | `boolean`                         | `false` | 是否显示密码切换按钮                 |
| disabled     | `boolean`                         | `false` | 是否禁用输入框                       |
| autofocus    | `boolean`                         | `false` | 是否自动聚焦                         |
| readonly     | `boolean`                         | `false` | 是否为只读状态                       |
| label        | `string`                          | -       | 输入框标签                           |
| prefixIcon   | `string \| Component`             | -       | 输入框头部图标                       |
| suffixIcon   | `string \| Component`             | -       | 输入框尾部图标                       |
| inputStyle   | `CSSStyleDeclaration`             | `{}`    | 输入框的样式                         |

### Events

| 事件名 | 说明                             | 参数                            |
| ------ | -------------------------------- | ------------------------------- |
| blur   | 输入框失去焦点时触发             | `FocusEvent` 事件对象           |
| focus  | 输入框获得焦点时触发             | `FocusEvent` 事件对象           |
| change | 输入框值发生变化且失去焦点时触发 | 输入框当前的值，类型为 `string` |
| input  | 输入框输入时触发                 | 输入框当前的值，类型为 `string` |
| clear  | 点击清空按钮时触发               | -                               |

### Slots

| 插槽名  | 说明                                        |
| ------- | ------------------------------------------- |
| default | 输入框默认内容                              |
| prepend | 输入框前置内容，通常用于复合型输入框        |
| append  | 输入框后置内容，通常用于复合型输入框        |
| prefix  | 输入框头部内容，可与 `prefix-icon` 配合使用 |
| suffix  | 输入框尾部内容，可与 `suffix-icon` 配合使用 |
