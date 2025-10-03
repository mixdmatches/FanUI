<script setup lang="ts">
import { ref, watch } from 'vue'
import { Link, ApiApp } from '@icon-park/vue-next'
const inputValue = ref('')
watch(
  () => inputValue.value,
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

const semi = ref(false)
</script>

<template>
  <f-input-x
    style="margin-bottom: 12px"
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="inputValue"
    :loading="loading"
    simple
    :max-length="2000"
    @on-submit="handleSubmit"
  >
    <template #extra>
      <div class="work">
        <f-button circle :icon="Link"></f-button>
      </div>
    </template>
  </f-input-x>

  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="inputValue"
    :loading="loading"
    @on-submit="handleSubmit"
  >
    <template #extra>
      <div class="work">
        <f-button circle :icon="Link"></f-button>
        <span
          class="semi"
          :class="{ 'semi-active': semi }"
          @click="semi = !semi"
        >
          <f-icon size="16" :color="semi ? '#409eff' : '#abb2bd'">
            <api-app theme="outline" :strokeWidth="3" />
          </f-icon>
          深度思考
        </span>
      </div>
    </template>
  </f-input-x>
</template>

<style scoped lang="scss">
.work {
  display: flex;
  align-items: center;
  gap: 6px;
}
.semi {
  box-sizing: border-box;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
}
.semi-active {
  background-color: #e6f7ff;
  border-color: #409eff;
  color: #409eff;
}
</style>
