# Progress 进度条​

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条​

`Progress` 组件设置 `percentage` 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 `0-100` 的范围内。 你可以通过设置 `format` 来自定义文字显示的格式。

<demo vue="../example/progress/Line.vue"/>

## 进度条内显示百分比标识​

百分比不占用额外空间，适用于文件上传等场景。

`Progress` 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来改变进度条内部的文字。

<demo vue="../example/progress/TextInside.vue"/>

## 自定义进度条的颜色​

可以通过 `color` 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组。

<demo vue="../example/progress/Color.vue"/>

## 环状进度条

`Progress` 组件设置 `type` 属性为 `circle` 即可显示环状进度条。

<demo vue="../example/progress/Circle.vue"/>

## 自定义内容

`Progress` 组件可以通过 `slot` 来自定义进度条的内容。

<demo vue="../example/progress/Slot.vue"/>

## API

### Progress Props​

| 参数         | 说明             | 类型      | 可选值                            | 默认值 |
| ------------ | ---------------- | --------- | --------------------------------- | ------ |
| percentage   | 进度条百分比     | `number`  | `0-100`                           | 0      |
| status       | 进度条状态       | `string`  | `success`, `exception`, `warning` | -      |
| type         | 进度条类型       | `string`  | `line`, `circle`                  | `line` |
| textInside   | 进度条内显示文字 | `boolean` | `true`, `false`                   | `true` |
| format       | 进度条文字格式   | `string`  | -                                 | -      |
| color        | 进度条颜色       | `string`  | -                                 | -      |
| stroke-width | 进度条高度       | `number`  | -                                 | 6      |
| showText     | 是否显示文字     | `boolean` | `true`, `false`                   | `true` |

### Progress Slots

| 名称    | 说明             | 类型     |
| ------- | ---------------- | -------- |
| default | 自定义进度条内容 | `Object` |
