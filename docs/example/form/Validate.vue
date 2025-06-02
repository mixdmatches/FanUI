<template>
  <f-form ref="formRef" :model="form" style="max-width: 600px" :rules="rules">
    <f-form-item label="姓名" prop="name">
      <f-input v-model="form.name" />
    </f-form-item>
    <f-form-item label="兴趣" prop="like">
      <f-checkbox-group v-model="form.like">
        <f-checkbox value="吃饭" name="type"> 吃饭 </f-checkbox>
        <f-checkbox value="睡觉" name="type"> 睡觉 </f-checkbox>
        <f-checkbox value="打游戏" name="type"> 打游戏 </f-checkbox>
        <f-checkbox value="小说" name="type"> 小说 </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <!-- <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item> -->
    <f-form-item label="电话号码" prop="telephone">
      <f-input v-model="form.telephone" />
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="onSubmit">验证</f-button>
      <f-button @click="onReset">重置验证</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormRules } from '@fan-ui/components/form/src/form'

const formRef = ref()
const form = reactive({
  name: '',
  like: [],
  telephone: ''
})

const onSubmit = () => {
  formRef.value.validate()
}

const onReset = () => {
  formRef.value.resetFields()
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-5', trigger: 'blur' }
  ],
  like: [
    {
      type: 'array',
      required: true,
      message: '至少选择一项',
      trigger: 'change'
    }
  ],
  telephone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }]
})
</script>
