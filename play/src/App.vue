<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from '@Fan-ui/components/form'

const user = ref({ username: '', password: '' })
const formRef = ref<FormInstance>()
const validate = () => {
  formRef.value?.validate((valid, error) => {
    console.log(valid, error)
  })
}
</script>

<template>
  <f-form
    ref="formRef"
    :model="user"
    :rules="{
      username: {
        min: 6,
        max: 10,
        message: '用户名6-10',
        trigger: ['blur', 'change']
      },
      password: {
        min: 6,
        max: 10,
        message: '密码6-10',
        trigger: ['blur', 'change']
      }
    }"
  >
    <f-form-item
      label="姓名"
      prop="username"
      :rules="[{ required: true, message: '请输入用户名', trigger: 'change' }]"
    >
      <f-input v-model="user.username" placeholder="请输入"></f-input>
    </f-form-item>
    <f-form-item
      label="密码"
      prop="password"
      :rules="[{ required: true, message: '请输入密码', trigger: 'change' }]"
    >
      <f-input
        v-model="user.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></f-input>
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="validate">校验表单</f-button>
    </f-form-item>
  </f-form>
</template>
