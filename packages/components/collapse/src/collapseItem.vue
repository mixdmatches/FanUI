<template>
  <div :class="rootKls">
    <!-- 头部 -->
    <div :class="[bem.e('header')]" @click="handleHeadClick">
      <slot name="title">{{ title }}</slot>
      <slot name="icon" :is-active="isActive">
        <f-icon color="#abb2bd" :class="arrowKls">
          <component :is="isActive ? Down : Right"></component>
        </f-icon>
      </slot>
    </div>

    <div :class="[bem.e('wrap')]">
      <div :class="[bem.e('content')]" v-show="isActive">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { collapseItemProps } from './collapse-item'
import { Right, Down } from '@icon-park/vue-next'
import FIcon from '@fan-ui/components/icon'
import { useCollapseItem, useCollapseItemDom } from './use-collapse-item'

defineOptions({
  name: 'f-collapse-item'
})
const props = defineProps(collapseItemProps)

const bem = createNamespace('collapse-item')

const { isActive, handleHeadClick } = useCollapseItem(props)

const { rootKls, arrowKls } = useCollapseItemDom(props, { isActive })
</script>
