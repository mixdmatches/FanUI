# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<demo vue="../example/button/basic.vue" />

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值

<demo vue="../example/button/disabled.vue" />

## 链接按钮

<demo vue="../example/button/link.vue" />

## 文字按钮

没有背景和边框的按钮

<demo vue="../example/button/text.vue" />

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

<demo vue="../example/button/Icon.vue" />

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<demo vue="../example/button/Loading.vue" />

## API

### Props

| 属性名        | 类型                                | 默认值    | 说明                                                                              |
| ------------- | ----------------------------------- | --------- | --------------------------------------------------------------------------------- |
| size          | `ButtonSizeType`                    | `default` | 按钮大小，可选值为 `large`, `default`, `small`                                    |
| type          | `ButtonType`                        | `default` | 按钮类型，可选值为 `default`, `primary`, `success`, `info`, `danger`, `'warning'` |
| plain         | `boolean`                           | `false`   | 是否为朴素按钮                                                                    |
| round         | `boolean`                           | `false`   | 是否为圆角按钮                                                                    |
| circle        | `boolean`                           | `false`   | 是否为圆形按钮                                                                    |
| icon          | `string \| Record<string, unknown>` | -         | 按钮图标，可以是字符串或组件对象                                                  |
| disabled      | `boolean`                           | `false`   | 是否禁用按钮                                                                      |
| link          | `boolean`                           | `false`   | 是否为链接按钮                                                                    |
| text          | `boolean`                           | `false`   | 是否为文字按钮                                                                    |
| bg            | `boolean`                           | `false`   | 是否有背景                                                                        |
| loading       | `boolean`                           | `false`   | 是否为加载状态                                                                    |
| tag           | `string`                            | `button`  | 按钮渲染的标签                                                                    |
| nativeType    | `ButtonNativeType`                  | `button`  | 原生按钮类型                                                                      |
| iconPlasement | `left \| right`                     | `left`    | 图标位置                                                                          |

### Events

| 事件名 | 说明           | 参数                  |
| ------ | -------------- | --------------------- |
| click  | 点击按钮时触发 | `MouseEvent` 事件对象 |
