import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { virtualItemProps } from './props'

export default defineComponent({
  name: 'virtual-item',
  props: virtualItemProps,
  emits: ['itemResize'],
  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null)
    const { component: Comp, uniqueKey, dataSource } = props
    function dispatchEvent() {
      emit('itemResize', props.uniqueKey, root.value?.offsetHeight)
    }
    onMounted(dispatchEvent)
    onUpdated(dispatchEvent)
    return () => {
      return (
        Comp && (
          <div key={uniqueKey} ref={root}>
            <Comp source={dataSource}></Comp>
          </div>
        )
      )
    }
  }
})
