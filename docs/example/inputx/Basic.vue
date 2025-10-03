<script setup lang="ts">
import { ref, watch } from 'vue'
const value = ref('')
watch(
  () => value.value,
  newVal => {
    console.log(newVal)
  }
)

const loading = ref(false)
const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 5000)
}
</script>

<template>
  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="value"
    :loading="loading"
    @on-submit="handleSubmit"
  ></f-input-x>
</template>
