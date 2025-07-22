# Loading 加载

等待数据加载时，使用加载动画

## 指令式调用加载

在需要加载的区域添加 `v-loading` 指令，可以自定义加载文本，给元素添加 `fan-loading` 前缀 + `text` 属性

<demo vue="../example/loading/Basic.vue" />

## 服务式调用加载

通过 `FLoading.service()` 方法以编程方式控制加载状态，支持指定目标元素。
<demo vue="../example/loading/Service.vue" />

## 全屏loading

支持全屏显示加载状态，可锁定背景防止交互。
<demo vue="../example/loading/Full.vue"/>

## API

### 配置项

| 参数       | 说明                         | 类型       | 默认值     |
| ---------- | ---------------------------- | ---------- | ---------- |
| text       | 加载文本内容                 | `string`   | -          |
| background | 背景遮罩颜色                 | `string`   | -          |
| fullscreen | 是否全屏显示                 | `boolean`  | `false`    |
| lock       | 是否锁定背景滚动             | `boolean`  | `false`    |
| closed     | Loading 完全关闭后触发的函数 | `Function` | `()=>void` |

### 指令

| 名称                   | 说明                   | 类型                          |
| ---------------------- | ---------------------- | ----------------------------- |
| v-loading              | 是否显示动画           | `boolean` \| `LoadingOptions` |
| fan-loading-text       | 加载图标下方的加载文案 | `string`                      |
| fan-loading-background | 背景遮罩颜色           | `string`                      |
