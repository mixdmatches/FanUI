import { defineComponent, onBeforeMount, ref } from 'vue'
import { virtualProps } from './props'
import { RangeOption, UpdateType } from './types'
import { initVirtual } from './virtual'
import VirtualItem from './virtual-item'
export default defineComponent({
  name: 'f-virtual-scroll-list',
  props: virtualProps,
  setup(props, { slots }) {
    const range = ref<RangeOption | null>(null)
    const update: UpdateType = (newRange: RangeOption) => {
      range.value = newRange
    }
    let virtual: ReturnType<typeof initVirtual>
    // 从数据源中获取唯一的id
    const getUniqueIdFromDataSources = (): string[] => {
      const { dataSources, dataKey } = props
      return dataSources.map((item: any) => item[dataKey as any]) as string[]
    }
    // 初始化虚拟列表
    const installVirtual = () => {
      // 初始化逻辑
      virtual = initVirtual(
        {
          keeps: props.keeps,
          // 缓冲区
          buffer: Math.round(props.keeps / 3),
          uniqueIds: getUniqueIdFromDataSources(),
          estimateSize: props.estimateSize
        },
        update
      )
    }
    onBeforeMount(() => {
      installVirtual()
    })
    function onItemResize(id: string | number, size: number) {
      console.log(id, size)
      virtual.saveSize(id, size)
    }
    // 生成需要渲染的组件
    function genRenderComponents() {
      const slots: any = []
      const { start, end } = range.value!
      const { dataSources, dataComponent, dataKey } = props
      for (let i = start!; i <= end!; i++) {
        const dataSource = dataSources[i]
        const uniqueKey = (dataSource as any)[dataKey]
        if (dataSource) {
          slots.push(
            <VirtualItem
              uniqueKey={uniqueKey}
              dataSource={dataSource}
              component={dataComponent}
              onItemResize={onItemResize}
            ></VirtualItem>
          )
        }
      }
      return slots
    }
    const root = ref<HTMLElement | null>()
    // 监听滚动事件，滚动的时候，更新range
    function onScroll() {
      if (root.value) {
        const offset = root.value.scrollTop
        virtual.handleScroll(offset)
      }
    }
    return () => {
      const { padFront, padBehind } = range.value!
      const padStyle = { padding: `${padFront}px 0 ${padBehind}px` }
      return (
        <div onScroll={onScroll} ref={root}>
          <div style={padStyle}>{genRenderComponents()}</div>
        </div>
      )
    }
  }
})
