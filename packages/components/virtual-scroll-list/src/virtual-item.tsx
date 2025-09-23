import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { virtualItemProps } from './props'
import { debounce } from 'lodash-unified'

export default defineComponent({
  name: 'virtual-item',
  props: virtualItemProps,
  emits: ['itemResize'],
  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null)
    const { component: Comp, uniqueKey, dataSource } = props
    const dispatchEvent = debounce(() => {
      emit('itemResize', props.uniqueKey, root.value?.offsetHeight)
    }, 50)
    onMounted(dispatchEvent)
    onUpdated(dispatchEvent)
    return () => {
      if (
        typeof Comp === 'function' ||
        (Comp && typeof Comp === 'object' && 'render' in Comp)
      ) {
        return (
          <div key={uniqueKey} ref={root}>
            <Comp source={dataSource}></Comp>
          </div>
        )
      } else {
        return (
          <div key={uniqueKey} ref={root}>
            {Comp}
          </div>
        )
      }
    }
  }
})
