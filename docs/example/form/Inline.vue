<template>
  <f-form :model="user" :inline="true">
    <f-form-item label="姓名">
      <f-input
        style="width: 200px"
        v-model="user.username"
        placeholder="请输入"
      ></f-input>
    </f-form-item>
    <f-form-item label="密码">
      <f-input
        style="width: 200px"
        v-model="user.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></f-input>
    </f-form-item>
    <f-form-item label="城市">
      <f-checkbox-group v-model="user.city">
        <f-checkbox :value="item" v-for="item in checkGroup" :key="item">
          {{ item }}
        </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item>
      <f-button type="primary">提交</f-button>
    </f-form-item>
  </f-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const user = ref({ username: '', password: '', city: ['南京', '苏州'] })

const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
</script>
