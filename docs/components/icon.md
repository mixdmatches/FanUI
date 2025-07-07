# Icon 图标

fan-ui 推荐使用 `@icon-park/vue-next` 作为图标库

```bash
$ pnpm install @icon-park/vue-next
```

## 基础用法

<demo vue="../example/icon/Basic.vue" />

## 更改颜色

<demo vue="../example/icon/Color.vue" />

## 更改大小

<demo vue="../example/icon/Size.vue" />

## icon属性传入

icon组件的icon属性可以传入`@icon-park/vue-next`的图标组件

<demo vue="../example/icon/Icon.vue" />

## API

### Icon Props

| 属性名 | 类型                 | 默认值    | 说明     |
| ------ | -------------------- | --------- | -------- |
| color  | `string`             | undefined | 图标颜色 |
| size   | `string` \| `number` | undefined | 图标大小 |
| icon   | `object`             | undefined | 图标组件 |
