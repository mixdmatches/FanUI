import { defineComponent } from 'vue'
import { virtualProps } from './props'

export default defineComponent({
  name: 'f-virtual-scroll-list',
  props: virtualProps,
  setup(props, { slots }) {
    return () => {
      return <div>虚拟滚动</div>
    }
  }
})
