<template>
  <span :class="[bem.b(), bem.m(size), bem.m(shape)]">
    <img v-if="src" :src="src" :alt="alt" />
    <f-icon v-else-if="icon">
      <component :is="icon" />
    </f-icon>
    <slot v-else />
  </span>
</template>

<script setup>
import { createNamespace } from '@fan-ui/utils'
import { avatarProps } from './avatar'
import FIcon from '@fan-ui/components/icon'
const bem = createNamespace('avatar')
defineProps(avatarProps)
</script>
