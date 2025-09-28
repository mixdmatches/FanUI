<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { watermarkProps } from './water-mark'
import useWatermarkBg from './useWaterMark'

const watermarkRef = ref<HTMLDivElement>()
const props = defineProps(watermarkProps)

const bg = useWatermarkBg(props)

let watermarkContainer: HTMLDivElement | null

// 获取子组件的实际大小
function getChildSize() {
  if (!watermarkRef.value) return null

  // 获取第一个子元素（即被包裹的组件）
  const childElement = watermarkRef.value.firstElementChild as HTMLElement
  if (!childElement) return null

  const { width, height } = childElement.getBoundingClientRect()
  return { width, height }
}

function createWatermark() {
  if (!watermarkRef.value || !bg.value) return

  const { base64, styleWidth, styleHeight } = bg.value

  // 获取子组件的实际大小
  const childSize = getChildSize()
  if (!childSize) return

  const containerStyle = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: `${childSize.width}px`, // 设置为子组件的实际宽度
    height: `${childSize.height}px`, // 设置为子组件的实际高度
    backgroundImage: `url(${base64})`,
    backgroundSize: `${styleWidth}px ${styleHeight}px`,
    backgroundRepeat: 'repeat',
    zIndex: props.zIndex,
    transform: `rotate(${props.containerRotate}deg)`,
    pointerEvents: 'none'
  }

  // 如果水印容器已存在，先移除
  if (watermarkContainer) {
    watermarkContainer.remove()
  }
  watermarkContainer = document.createElement('div')

  Object.entries(containerStyle).forEach(([key, value]) => {
    watermarkContainer!.style[key as never] = value
  })

  watermarkRef.value.appendChild(watermarkContainer)
}

// 定义刷新触发器，用于水印被修改或删除改变它的值，watchEffect监听到变化后随即触发createWatermark
const refreshTrigger = ref(0)

watchEffect(() => {
  refreshTrigger.value++
  // 延迟创建水印，确保子组件已经渲染完成
  setTimeout(() => {
    createWatermark()
  }, 0)
})

// 防篡改处理
const ob = ref<MutationObserver>()
onMounted(() => {
  // 设置父容器的position为relative，使absolute定位的水印容器相对于它定位
  if (watermarkRef.value) {
    watermarkRef.value.style.position = 'relative'
  }

  // 监听子组件大小变化
  const resizeObserver = new ResizeObserver(() => {
    refreshTrigger.value++
  })

  if (watermarkRef.value) {
    resizeObserver.observe(watermarkRef.value)
  }
  ob.value = new MutationObserver(records => {
    if (!watermarkContainer) return
    const isTampered = records.some(
      record =>
        Array.from(record.removedNodes).includes(watermarkContainer!) ||
        record.target === watermarkContainer
    )
    if (isTampered) {
      refreshTrigger.value++
    }
  })
  // 开始监听
  ob.value.observe(watermarkRef.value!, {
    childList: true,
    attributes: true,
    subtree: true
  })
})

onUnmounted(() => {
  ob.value?.disconnect() // 停止监听
  watermarkContainer?.remove() // 移除水印元素
  watermarkContainer = null
})
</script>

<template>
  <div ref="watermarkRef">
    <slot></slot>
  </div>
</template>
