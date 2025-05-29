<template>
  <div :class="[bem.b(), bem.m(type), bem.is(status, status)]">
    <!-- bar -->
    <div :class="bem.b('bar')">
      <!-- outer -->
      <div
        :class="bem.be('bar', 'outer')"
        :style="{ height: `${strokeWidth}px` }"
      >
        <!-- inner -->
        <div :class="bem.be('bar', 'inner')" :style="barStyle">
          <div
            :class="bem.be('bar', 'innerText')"
            v-if="(showText || $slots.default) && textInside"
          >
            <slot :percentage="percentage">
              <span>{{ content }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <!-- text -->
    <div
      :class="bem.e('text')"
      v-if="(showText || $slots.default) && !textInside"
    >
      <slot :percentage="percentage">
        <span v-if="!status">{{ content }}</span>
        <f-icon v-else>
          <component :is="statusIcon" />
        </f-icon>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils/create'
import { ProgressColor, progressProps } from './progress'
import { computed, CSSProperties } from 'vue'
import { CheckOne, CloseOne, Attention } from '@icon-park/vue-next'
import { isFunction, isString } from '@fan-ui/utils/types'

defineOptions({
  name: 'f-progress'
})

const bem = createNamespace('progress')

const props = defineProps(progressProps)

const statusIcon = computed(() => {
  if (props.status === 'success') {
    return CheckOne
  } else if (props.status === 'exception') {
    return CloseOne
  } else if (props.status === 'warning') {
    return Attention
  }
})

const barStyle = computed(() => {
  const barStyle: CSSProperties = {
    width: `${props.percentage}%`,
    animationDuration: '3s'
  }
  const color = gerCurrentColor(props.percentage)
  barStyle.backgroundColor = color
  return barStyle
})

const content = computed(() => {
  return props.format(props.percentage)
})

/**
 * @description 格式化颜色数组，格式为{color: string, percentage: number}
 * @param colorList 要格式化的颜色数组
 * @returns 格式化后的颜色数组
 */
function getFormatColor(colorList: ProgressColor[]) {
  if (colorList.length === 0) return
  const span = 100 / colorList.length
  const seriesColors = colorList.map((seriesColor, index) => {
    if (isString(seriesColor)) {
      return {
        color: seriesColor,
        percentage: (index + 1) * span
      }
    }
    return seriesColor
  })
  return seriesColors.sort((a, b) => a?.percentage - b?.percentage)
}

const gerCurrentColor = (percentage: number) => {
  const { color } = props
  if (isString(color)) {
    return color
  } else if (isFunction(color)) {
    return color(percentage)
  } else {
    const colorList = getFormatColor(color)
    // 检查 colorList 是否存在且长度大于 0，避免遍历未定义或空数组
    if (colorList && colorList.length > 0) {
      for (const color of colorList) {
        if (color.percentage > percentage) return color.color
      }
    }
    return colorList?.[colorList.length - 1]?.color || ''
  }
}
</script>
