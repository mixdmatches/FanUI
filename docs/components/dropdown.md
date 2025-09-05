# dropdown 下拉菜单

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 基本用法

悬停在下拉菜单上以展开更多操作。

通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

<demo vue="../example/dropdown/Basic.vue" />

## 菜单隐藏

可以是设置触发方式为 `click` 点击触发, 如果不想点击后隐藏菜单，可以设置 `hide-after-click` 为 `false`

<demo vue="../example/dropdown/hide.vue" />

## 位置

设置 `placement` 可以改变下拉菜单的位置,可选值参考 [f-tooltip](http://mixdmatches.github.io/FanUI/components/tooltip.html)

<demo vue="../example/dropdown/location.vue" />

## 隐藏箭头

设置 `no-arrow` 来隐藏箭头，隐藏箭头时可通过设置 `show-shadow` 来显示阴影

<demo vue="../example/dropdown/noArrow.vue" />

## API

### props

| 属性名         | 类型      | 默认值  | 说明               |
| -------------- | --------- | ------- | ------------------ |
| hideAfterClick | `boolean` | `true`  | 是否点击后隐藏菜单 |
| showShadow     | `boolean` | `false` | 是否显示阴影       |

其他属性参考 [f-tooltip](http://mixdmatches.github.io/FanUI/components/tooltip.html) 组件

### event

事件参考 [f-tooltip](http://mixdmatches.github.io/FanUI/components/tooltip.html) 组件
