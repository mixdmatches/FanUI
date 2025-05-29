<template>
  <div
    :class="[
      bem.b(),
      bem.m(type),
      bem.is(status, status),
      {
        [bem.m('without-text')]: !showText,
        [bem.m('text-inside')]: textInside
      }
    ]"
  >
    <!-- 线性 -->
    <div
      v-if="type === 'line'"
      :class="[
        bem.b('bar'),
        { [bem.bem('bar', 'inner', 'striped')]: striped },
        { [bem.bem('bar', 'inner', 'striped-flow')]: stripedFlow },
        { [bem.bem('bar', 'inner', 'indeterminate')]: indeterminate }
      ]"
    >
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
    <!-- 环状 -->
    <div
      v-else
      :class="bem.b('circle')"
      :style="{ width: `${width}px`, height: `${width}px` }"
    >
      <svg viewBox="0 0 100 100">
        <path
          :class="bem.be('circle', 'track')"
          :d="trackPath"
          fill="none"
          :stroke="`var(--f-fill-color-light, #e5e9f2)`"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="trailPathStyle"
        ></path>
        <path
          :class="bem.be('circle', 'path')"
          :d="trackPath"
          fill="none"
          :stroke="strokeColor"
          :opacity="percentage ? 1 : 0"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        ></path>
      </svg>
    </div>
    <!-- text -->
    <div
      :class="bem.e('text')"
      v-if="(showText || $slots.default) && !textInside"
      :style="{ fontSize: `${progressTextSize}px` }"
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
    animationDuration: `${props.duration}s`
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

// 计算 strokeWidth 相对于 width 的百分比
const relativeStrokeWidth = computed(() =>
  ((props.strokeWidth / props.width) * 100).toFixed(1)
)

// 计算半径
const radius = computed(() => {
  if (['circle', 'dashboard'].includes(props.type)) {
    return Number.parseInt(
      `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
      10
    )
  }
  return 0
})

const progressTextSize = computed(() => {
  return props.type === 'line'
    ? 12 + props.strokeWidth * 0.4
    : props.width * 0.111111 + 2
})

// 圆形轨道路径
const trackPath = computed(() => {
  const r = radius.value
  const isDashboard = props.type === 'dashboard'
  return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
          `
})

const STATUS_COLOR_MAP = {
  success: '#52c41a',
  exception: '#ff4d4f',
  warning: '#faad14',
  default: '#20a0ff'
}

const strokeColor = computed(() => {
  let color
  if (props.color) {
    color = gerCurrentColor(props.percentage)
  } else {
    color = props.status
      ? STATUS_COLOR_MAP[props.status]
      : STATUS_COLOR_MAP.default
  }
  return color
})

const perimeter = computed(() => 2 * Math.PI * radius.value)

const rate = computed(() => (props.type === 'dashboard' ? 0.75 : 1))

const strokeDashoffset = computed(() => {
  const offset = (-1 * perimeter.value * (1 - rate.value)) / 2
  return `${offset}px`
})

const trailPathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value
}))

const circlePathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${
    perimeter.value * rate.value * (props.percentage / 100)
  }px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
  transition:
    'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s'
}))
</script>
