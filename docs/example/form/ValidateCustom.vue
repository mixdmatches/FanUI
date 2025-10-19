<template>
  <f-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    class="demo-ruleForm"
  >
    <f-form-item label="Password" prop="pass">
      <f-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </f-form-item>
    <f-form-item label="Confirm" prop="checkPass">
      <f-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </f-form-item>
    <f-form-item label="Age" prop="age">
      <f-input v-model.number="ruleForm.age" />
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </f-button>
      <f-button @click="resetForm(ruleFormRef)">Reset</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from '@fan-ui/components/form/index'
import type { FormRules } from '@fan-ui/components/form/src/form'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: ''
})

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
