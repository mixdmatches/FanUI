import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export const useClickOutside = (
  elementRef: Ref<HTMLElement | undefined>,
  callback: () => void
) => {
  const handler = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback()
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}
