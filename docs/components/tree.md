# Tree 树形控件

多层次的结构列表。

## 基础用法

展示可勾选，可选中，默认展开等功能。
<demo vue="../example/tree/base.vue" />

## 自定义图标

提供 `icon` 插槽来自定义图标和 `switch-icon` 插槽来自定义切换图标。
<demo vue="../example/tree/icon.vue" />

## 异步加载数据

异步加载数据
<demo vue="../example/tree/async.vue" />

## 虚拟滚动

虚拟滚动，仅渲染当前可见区域的数据，添加 `height` 属性即可开启虚拟滚动。
<demo vue="../example/tree/virtual.vue" />

## 拖拽节点

<demo vue="../example/tree/drag.vue" />

## API

### props

| 参数                  | 说明                             | 类型                                          | 默认值     |
| --------------------- | -------------------------------- | --------------------------------------------- | ---------- |
| data                  | 树节点数据                       | `TreeProps['data']`                           | `[]`       |
| height                | 虚拟滚动高度，开启虚拟滚动后必填 | `number`                                      | `0`        |
| checkable             | 是否可勾选                       | `boolean`                                     | `false`    |
| v-model:expanded-keys | 要展开的结点key                  | `string[]`                                    | `[]`       |
| v-model:checked-keys  | 要勾选的结点key                  | `string[]`                                    | `[]`       |
| on-load               | 异步加载数据时调用               | `(node: TreeOption) => Promise<TreeOption[]>` | `() => []` |
| draggable             | 允许拖拽节点                     | `boolean`                                     | `false`    |

### slots

| 名称        | 说明           | 默认值 |
| ----------- | -------------- | ------ |
| icon        | 自定义图标     | -      |
| switch-icon | 自定义切换图标 | -      |
