# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

<demo vue="../example/message/Basic.vue" />

## 不同状态​

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，`Message` 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。 同时，我们也为 `Message` 的各种 `type` 注册了方法，可以在不传入 `type` 字段的情况下像 `open4` 那样直接调用。

<demo vue="../example/message/Status.vue" />

## 纯色背景

通过 `plain` 字段可以设置纯色背景。

<demo vue="../example/message/Plain.vue" />

## 可关闭的消息提示​

可以添加关闭按钮。

默认的 `Message` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 `true` 此外`Message` 拥有可控的 `duration`， 默认的关闭时间为 `3000` 毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。
<demo vue="../example/message/Close.vue" />

## 单独引用​

```ts
import { FMessage } from '@mixdmatches/fan-ui'
```

此时调用方法为 `FMessage(options)`。 我们也为每个 `type` 定义了各自的方法，如 `FMessage.success(options)`。

## API

### Message Props

| 参数      | 说明                                  | 类型    | 可选值                     | 默认值 |
| --------- | ------------------------------------- | ------- | -------------------------- | ------ |
| type      | 消息类型                              | string  | success/warning/info/error | info   |
| message   | 消息文字                              | string  | -                          | -      |
| showClose | 是否显示关闭按钮                      | boolean | -                          | false  |
| duration  | 显示时间, 毫秒。设为 0 则不会自动关闭 | number  | -                          | 3000   |
| plain     | 是否为简洁的消息提示                  | boolean | -                          | false  |
