<template>
  <f-form
    :label-position="formAlign"
    label-width="auto"
    style="max-width: 600px"
    :model="user"
  >
    <f-form-item label="Form Align">
      <f-radio-group v-model="formAlign">
        <f-radio value="left">Left</f-radio>
        <f-radio value="right">Right</f-radio>
        <f-radio value="top">Top</f-radio>
      </f-radio-group>
    </f-form-item>
    <f-form-item label="Form Item Align">
      <f-radio-group v-model="formItemAlign">
        <f-radio value="">Empty</f-radio>
        <f-radio value="left">Left</f-radio>
        <f-radio value="right">Right</f-radio>
        <f-radio value="top">Top</f-radio>
      </f-radio-group>
    </f-form-item>
    <f-form-item label="姓名姓名姓名姓名" :label-position="formItemAlign">
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
import { FormItemProps, FormProps } from '@fan-ui/components/form'
import { ref } from 'vue'
const user = ref({ username: '', password: '', city: ['南京', '苏州'] })
const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
const formAlign = ref<FormProps['labelPosition']>('left')
const formItemAlign = ref<FormItemProps['labelPosition']>('left')
</script>
