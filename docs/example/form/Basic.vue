<template>
  <f-form :model="form" style="max-width: 600px">
    <f-form-item label="姓名">
      <f-input v-model="form.name" />
    </f-form-item>
    <f-form-item label="兴趣">
      <f-checkbox-group v-model="form.like">
        <f-checkbox value="吃饭" name="type"> 吃饭 </f-checkbox>
        <f-checkbox value="睡觉" name="type"> 睡觉 </f-checkbox>
        <f-checkbox value="打游戏" name="type"> 打游戏 </f-checkbox>
        <f-checkbox value="小说" name="type"> 小说 </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item label="性别">
      <f-radio value="男" v-model="form.sex">男</f-radio>
      <f-radio value="女" v-model="form.sex">女</f-radio>
    </f-form-item>
    <f-form-item label="电话号码">
      <f-input v-model="form.telephone" />
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="onSubmit">提交</f-button>
      <f-button>取消</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  like: [],
  sex: '',
  telephone: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
