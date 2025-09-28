# 分页组件

采用分页的形式分隔长列表，每次只加载一个页面。

## 基本用法

这是一个基本分页

<demo vue="../example/pagination/Basic.vue"></demo>

## 更多

更多分页，设置 `showTotal` 属性 ，但仅当 `total` 大于 50 时显示

<demo vue="../example/pagination/More.vue"></demo>

## 自定义分页大小

可自定义分页大小，默认是 `[10, 20, 30, 40]`

<demo vue="../example/pagination/Size.vue"></demo>

## 跳转分页

可设置属性 `showJumper` 为 `true` 显示跳转分页
<demo vue="../example/pagination/Jumper.vue"></demo>

## 自定义上下页

可自定义上下页的内容，通过 `#prev` 和 `#next` 插槽自定义

<demo vue="../example/pagination/PrevNext.vue"></demo>

## API

### props

| 参数             | 说明               | 类型     | 默认值             |
| ---------------- | ------------------ | -------- | ------------------ |
| v-model:current  | 当前页码           | number   | `1`                |
| v-model:pageSize | 每页条数           | number   | `10`               |
| total            | 总数据条数         | number   | `0`                |
| showTotal        | 是否显示总数据条数 | boolean  | `false`            |
| showJumper       | 是否显示跳转分页   | boolean  | `false`            |
| pageSizeOptions  | 分页大小选项       | number[] | `[10, 20, 30, 40]` |

### event

| 事件名 | 说明                     | 类型                                        |
| ------ | ------------------------ | ------------------------------------------- |
| change | 页码或每页条数改变时触发 | (current: number, pageSize: number) => void |
