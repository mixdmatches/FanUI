# Bubble 气泡

## 基本使用

基本用法只需要传入content即可

<demo vue="../example/bubble/Basic.vue" />

## 显示Loading状态

当设置 loading 为 true 时，将不会显示气泡内的其他区域。我们内置了一个默认的 loading 状态，如果不满足你的使用需求，可以通过 loading 插槽来自定义 loading

<demo vue="../example/bubble/Loading.vue" />

## 支持不同的气泡样式

默认为 filled，还可以设置 bordered 和 none，其中 filled 和 bordered 我们为其设置了间距和圆角，none 则不带任何样式

<demo vue="../example/bubble/Variant.vue" />
