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
      },
      city: { required: true, message: '至少选择一个城市', trigger: 'change' }
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
    <f-form-item label="城市" prop="city">
      <f-checkbox-group v-model="user.city">
        <f-checkbox :value="item" v-for="item in checkGroup" :key="item">
          {{ item }}
        </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item label="">
      <f-button type="primary" @click="validate">校验表单</f-button>
    </f-form-item>
  </f-form>
</template>

<script setup lang="ts">
import { FormInstance } from '@fan-ui/components/form'
import { ref } from 'vue'

const user = ref({ username: '', password: '', city: ['南京', '苏州'] })
const formRef = ref<FormInstance>()
const validate = () => {
  formRef.value?.validate((valid, error) => {
    console.log(valid, error)
  })
}

const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
</script>
