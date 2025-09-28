# WaterMark 水印组件

在页面上添加文本水印信息

## 基础用法

基础用法
<demo vue="../example/water-mark/basic.vue" />

## 多行水印文字

设置 `content` 为字符串数组来实现多行文本水印
<demo vue="../example/water-mark/text.vue"/>

## API

### props

| 参数            | 说明             | 类型                 | 默认值     |
| --------------- | ---------------- | -------------------- | ---------- |
| content         | 水印文字内容     | `string[] or string` | ''         |
| width           | 水印宽度         | `string`             | '50px'     |
| height          | 水印高度         | `string`             | '50px'     |
| textRotate      | 水印文字旋转角度 | `number`             | -22        |
| containerRotate | 水印容器旋转角度 | `number`             | 0          |
| zIndex          | 水印容器 z-index | `string`             | '9'        |
| font            | 水印字体样式     | `object`             | {}         |
| gap             | 水印间距         | `[number, number]`   | [100, 100] |

Font:

| 参数       | 说明            | 类型               | 默认值            |
| ---------- | --------------- | ------------------ | ----------------- |
| color      | 水印字体颜色    | `string`           | 'rgba(0,0,0,.15)' |
| fontSize   | 水印字体大小    | `number`           | 16                |
| fontWeight | 水印字体粗细    | `string or number` | 'normal'          |
| fontFamily | 水印字体-family | `string`           | 'sans-serif'      |
