<template>
  <f-form :label-position="formAlign" style="max-width: 600px" :model="user">
    <f-form-item label="Form Align">
      <f-button @click="formAlign = 'Left'">Left</f-button>
      <f-button @click="formAlign = 'Right'">Right</f-button>
      <f-button @click="formAlign = 'Top'">Top</f-button>
    </f-form-item>
    <f-form-item label="Form Item Align">
      <f-button @click="formItemAlign = ''">Empty</f-button>
      <f-button @click="formItemAlign = 'Left'">Left</f-button>
      <f-button @click="formItemAlign = 'Right'">Right</f-button>
      <f-button @click="formItemAlign = 'Top'">Top</f-button>
    </f-form-item>
    <f-form-item label="姓名" :label-position="formItemAlign">
      <f-input
        style="width: 200px"
        v-model="user.username"
        placeholder="请输入"
      ></f-input>
    </f-form-item>
    <f-form-item label="密码" :label-position="formItemAlign">
      <f-input
        style="width: 200px"
        v-model="user.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></f-input>
    </f-form-item>
    <f-form-item label="城市" :label-position="formItemAlign">
      <f-checkbox-group v-model="user.city">
        <f-checkbox :value="item" v-for="item in checkGroup" :key="item">
          {{ item }}
        </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item label="按钮" :label-position="formItemAlign">
      <f-button type="primary">提交</f-button>
    </f-form-item>
  </f-form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const user = ref({ username: '', password: '', city: ['南京', '苏州'] })
const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
const formAlign = ref('left')
const formItemAlign = ref('left')

watch(
  [formAlign, formItemAlign],
  () => {
    console.log('formAlign', formAlign.value)
    console.log('formItemAlign', formItemAlign.value)
  },
  { immediate: true }
)
</script>
