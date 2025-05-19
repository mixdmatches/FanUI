<template>
  <label :class="compKls">
    <span :class="spanKls">
      <input :class="bem.e('original')" type="checkbox" />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import { createNamespace } from '@fan-ui/utils/create'
import '../style/index'

defineOptions({ name: 'f-checkbox' })

const bem = createNamespace('checkbox')

defineProps(checkboxProps)
defineEmits(checkboxEmits)

const compKls = computed(() => [bem.b()])
const spanKls = computed(() => [bem.e('input')])
</script>
