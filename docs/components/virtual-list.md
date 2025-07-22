# VirtualScrollList 虚拟滚动列表

在大数据量场景下使用，之渲染可视区域的dom元素，减少渲染的dom数量，提升渲染效率。

## 定高

每一项列表高度固定的话，就可以根据当前滚动的位置计算出当前需要展示的列表项的索引范围。

<demo vue="../example/virtual-list/Basic.vue" />

## 不定高

每一项列表高度不定的话，就需要给组件传递estimate-size属性，传递每一项大概的高度

<demo vue="../example/virtual-list/estimate.vue" />

## API

### props

| 属性          | 类型      | 默认值 | 说明                    |
| ------------- | --------- | ------ | ----------------------- |
| data-sources  | Array     | []     | 列表数据                |
| data-key      | String    | -      | 列表数据的key，唯一标识 |
| keeps         | Number    | 30     | 渲染的dom元素个数       |
| estimate-size | Number    | 80     | 每一项的大概高度        |
| dataComponent | Component | -      | 列表项组件              |

### event

| 事件名       | 说明       | 回调参数 |
| ------------ | ---------- | -------- |
| handleScroll | 滚动时触发 | 滚动信息 |
