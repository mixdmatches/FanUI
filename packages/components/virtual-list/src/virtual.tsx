import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'
import { createNamespace } from '@fan-ui/utils'

export default defineComponent({
  name: 'f-virtual-list',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    size: {
      type: Number,
      default: 30
    },
    remain: {
      type: Number,
      default: 8
    }
  },
  setup(props, { slots }) {
    const bem = createNamespace('virtual')
    const wrapperRef = ref<HTMLDivElement>()
    const barRef = ref<HTMLDivElement>()
    // 计算显示范围
    const state = reactive({
      start: 0,
      end: props.remain
    })
    const prev = computed(() => {
      return Math.min(state.start, props.remain)
    })
    const next = computed(() => {
      return Math.min(props.remain, props.items.length - state.end)
    })
    const visibleData = computed(() =>
      props.items.slice(state.start - prev.value, state.end + next.value)
    )
    const offset = ref(0)
    const handleScroll = () => {
      const scrollTop = wrapperRef.value!.scrollTop
      // 卷去了多少个数据
      state.start = Math.floor(scrollTop / props.size)
      state.end = state.start + props.remain
      // 滚过去多少个
      offset.value = state.start * props.size
    }
    watch(
      () => props.items,
      () => {
        wrapperRef.value!.style.height = props.remain * props.size + 'px'
        barRef.value!.style.height = props.items.length * props.size + 'px'
      }
    )
    onMounted(() => {
      wrapperRef.value!.style.height = props.remain * props.size + 'px'
      barRef.value!.style.height = props.items.length * props.size + 'px'
    })
    return () => (
      <div ref={wrapperRef} class={bem.b()} onScroll={handleScroll}>
        <div ref={barRef} class={bem.e('scroll-bar')}></div>
        <div
          class={bem.e('scroll-list')}
          style={{ transform: `translate3d(0, ${offset.value}px, 0)` }}
        >
          {visibleData.value.map(node => slots.default!({ node }))}
        </div>
      </div>
    )
  }
})
