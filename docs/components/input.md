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
