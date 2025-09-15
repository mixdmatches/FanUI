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
