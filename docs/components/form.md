# Form组件

表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 基础用法

最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。
<demo vue="../example/form/Basic.vue" />

## 行内表单

`inline`属性设置为 `true` ，表单会变成行内表单。

<demo vue="../example/form/Inline.vue" />

## 对齐情况

您可以分别设置 `f-form-item` 的`label-position`，如果值为空， 则会使用 `f-form`的`label-position`。

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`, 当设为 `top` 时标签会置于表单域的顶部

<demo vue="../example/form/LabelPosition.vue" />
