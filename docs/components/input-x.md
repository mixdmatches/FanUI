# InputX AI对话输入框

## 基础用法

<demo vue="../example/inputx/Basic.vue" />

## simple模式

<demo vue="../example/inputx/simple.vue" />

## 自定义插槽

<demo vue="../example/inputx/extra.vue" />

## 限制字数

<demo vue="../example/inputx/maxLength.vue" />

## API

### props

| 属性                | 说明           | 类型      | 默认值  |
| ------------------- | -------------- | --------- | ------- |
| model-value/v-model | 输入框的值     | `string`  | ''      |
| simple              | 是否为简单模式 | `boolean` | `false` |
| max-length          | 最大输入长度   | `number`  | `0`     |
| placeholder         | 占位符         | `string`  | ``      |
| loading             | 是否为加载状态 | `boolean` | `false` |

### event

| 事件      | 说明       | 类型                    |
| --------- | ---------- | ----------------------- |
| on-submit | 提交时触发 | (value: string) => void |
| on-cancel | 取消时触发 | () => void              |
