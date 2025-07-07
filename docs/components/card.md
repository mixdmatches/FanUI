# card卡片

将信息聚合在卡片容器中展示。

## 基础用法

`title` 属性设置卡片标题，也可以用 name为 `title` 的插槽，同时使用则先展示插槽内容，shadow控制阴影出现时机，默认为 `hover`
<demo vue="../example/card/Basic.vue"/>

## API

### props

| 属性名 | 说明         | 类型                           | 默认值  |
| ------ | ------------ | ------------------------------ | ------- |
| title  | 卡片标题     | `string`                       | -       |
| shadow | 阴影出现时机 | `hover` \| `always` \| `never` | `hover` |
