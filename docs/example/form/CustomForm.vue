<template>
  <f-form
    ref="formRef"
    style="max-width: 600px"
    :model="dynamicValidateForm"
    label-width="auto"
    class="demo-dynamic"
  >
    <f-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: '请输入邮件地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <f-input v-model="dynamicValidateForm.email" />
    </f-form-item>
    <f-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur'
      }"
    >
      <f-input v-model="domain.value" />
      <f-button class="mt-2" @click.prevent="removeDomain(domain)">
        删除
      </f-button>
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="submitForm(formRef)">提交</f-button>
      <f-button @click="addDomain">添加表单项</f-button>
      <f-button @click="resetForm(formRef)">重置</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: ''
    }
  ],
  email: ''
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: ''
  })
}

const submitForm = formEl => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = formEl => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
