import { defineComponent } from 'vue'
import '@vue/runtime-dom' // 导入类型定义
export default defineComponent({
  name: 'Switcher',
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M12 8l10 8l-10 8z" />
      </svg>
    )
  }
})
