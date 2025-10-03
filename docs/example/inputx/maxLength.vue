<script setup lang="ts">
import { ref, watch } from 'vue'
import { Link } from '@icon-park/vue-next'
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
  console.log('发送成功')
}
const handleCancel = () => {
  loading.value = false
  console.log('取消发送')
}
</script>

<template>
  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="value"
    :loading="loading"
    :max-length="2000"
    @on-submit="handleSubmit"
    @on-cancel="handleCancel"
  >
    <template #extra>
      <div class="work">
        <f-button circle :icon="Link"></f-button>
      </div>
    </template>
  </f-input-x>
</template>
