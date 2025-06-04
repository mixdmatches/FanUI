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

## 表单验证

<demo vue="../example/form/Validate.vue" />

## 自定义表单验证

<demo vue="../example/form/ValidateCustom.vue" />

## API

### Form Props

| 属性名        | 类型                   | 默认值  | 描述             |
| ------------- | ---------------------- | ------- | ---------------- |
| model         | `Object`               | 必需    | 表单数据对象     |
| rules         | `FormRules`            | -       | 表单验证规则     |
| inline        | `Boolean`              | `false` | 是否为行内表单   |
| labelPosition | `left \| right \| top` | `right` | 表单域标签的位置 |

### Form Expose

| 方法名        | 参数                                                    | 描述                                                                                                                   |
| ------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| validate      | `(callback?: (valid: boolean, fields?: Value) => void)` | 对整个表单进行校验。校验完成后执行回调，返回校验结果和错误字段。如果未提供回调，校验失败时会返回一个被拒绝的 Promise。 |
| resetFields   | `(props?: Arrayable<FormItemProp>)`                     | 重置指定的表单项（或全部表单项）为初始值。                                                                             |
| clearValidate | `(props?: Arrayable<FormItemProp>)`                     | 清除指定表单项（或全部表单项）的校验结果。                                                                             |
| addField      | `(context: FormItemContext)`                            | 向表单中注册表单项上下文（一般由内部自动调用，开发者无需手动调用）。                                                   |

### FormItem Props

| 属性名        | 类型                      | 默认值 | 描述                                                                                                 |
| ------------- | ------------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| prop          | `String`                  | -      | 表单域的字段名，用于和 `form` 的 `rules` 对应                                                        |
| label         | `String`                  | -      | 表单域标签                                                                                           |
| rules         | `Arrayable<FormItemRule>` | -      | 表单项的验证规则，`FormItemRule` 继承自 `async-validator` 的 `RuleItem`，并可额外指定 `trigger` 属性 |
| showMessage   | `Boolean`                 | `true` | 是否显示验证错误信息                                                                                 |
| labelPosition | `left \| right \| top`    | `''`   | 表单域标签的位置，若为空则使用 `f-form` 的 `labelPosition`                                           |

### FormItem Event

| 方法名   | 参数                                                     | 描述                                                             |
| -------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| validate | `trigger: string, callback?: (isValid: boolean) => void` | 对当前表单项进行校验，根据触发时机执行校验规则，返回一个 Promise |

### 类型定义

```typescript
import { RuleItem } from 'async-validator'
import { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type Arrayable<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

export const formItemValidateState = ['success', 'error', '']
export type FormItemValidateState = (typeof formItemValidateState)[number]

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<Arrayable<FormItemRule>>,
  showMessage: {
    type: Boolean,
    default: true
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: ''
  }
} as const

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>

export interface FormItemContext extends FormItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
  ) => Promise<unknown>
}

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
```
