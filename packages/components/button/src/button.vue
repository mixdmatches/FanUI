<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled || (loading && !allowDisabledClick)"
    :class="classCustom"
    @click="handleClick"
  >
    <template v-if="loading && iconPlasement == 'left'">
      <slot v-if="$slots.loading" name="loading" />
      <f-icon v-else :class="bem.is('loading', loading)">
        <component :is="iconLoading" />
      </f-icon>
    </template>

    <f-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </f-icon>

    <span v-if="$slots.default">
      <slot />
    </span>
    <template v-if="loading && iconPlasement == 'right'">
      <slot v-if="$slots.loading" name="loading" />
      <f-icon v-else :class="bem.is('loading', loading)">
        <component :is="loading" />
      </f-icon>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { createNamespace } from '@fan-ui/utils/create'
import { buttonProps, buttonEmits } from './button'
import iconLoading from './icon/loading.vue'
defineOptions({ name: 'f-button' })

const bem = createNamespace('button')

const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)

const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}

const classCustom = computed(() => {
  const {
    type,
    size,
    plain,
    round,
    circle,
    disabled,
    link,
    text,
    bg,
    loading,
    allowDisabledClick
  } = props
  return [
    bem.b(),
    bem.m(type),
    bem.m(size),
    bem.is('plain', plain),
    bem.is('round', round),
    bem.is('circle', circle),
    bem.is('disabled', disabled || (loading && !allowDisabledClick)),
    bem.is('link', link),
    bem.is('text', text),
    bem.is('has-bg', bg)
  ]
})
</script>
