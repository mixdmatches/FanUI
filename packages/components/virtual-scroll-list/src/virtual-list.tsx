import { defineComponent, onBeforeMount, ref } from 'vue'
import { virtualProps } from './props'
import { RangeOption, UpdateType } from './types'
import { initVirtual } from './virtual'

export default defineComponent({
  name: 'f-virtual-scroll-list',
  props: virtualProps,
  setup(props, { slots }) {
    const range = ref<RangeOption | null>(null)
    const update: UpdateType = (newRange: RangeOption) => {
      range.value = newRange
    }
    let virtual: ReturnType<typeof initVirtual>
    const getUniqueIdFromDataSources = (): string[] => {
      const { dataSources, dataKey } = props
      return dataSources.map(item => item[dataKey as any]) as string[]
    }
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
    function genRenderComponents() {
      const slots = []
      const { start, end } = range.value!
      const { dataSources, dataKey, dataComponent } = props
      for (let i = start!; i <= end!; i++) {
        const dataSource = dataSources[i]
        const uniqueKey = (dataSource as any)[dataKey]
        if (dataSource) {
          slots.push(
            <dataComponent key={uniqueKey} source={dataSource}></dataComponent>
          )
        }
      }
      return slots
    }
    return () => {
      const { padFront, padBehind } = range.value!
      const padStyle = { padding: `${padFront}px 0 ${padBehind}px` }
      return <div style={padStyle}>{genRenderComponents()}</div>
    }
  }
})
