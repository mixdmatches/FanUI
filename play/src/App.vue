<template>
  <div>
    <f-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
    >
      <f-form-item label="Activity type" prop="type">
        <f-checkbox-group v-model="ruleForm.type">
          <f-checkbox value="Online activities" name="type">
            Online activities
          </f-checkbox>
          <f-checkbox value="Promotion activities" name="type">
            Promotion activities
          </f-checkbox>
          <f-checkbox value="Offline activities" name="type">
            Offline activities
          </f-checkbox>
          <f-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </f-checkbox>
        </f-checkbox-group>
      </f-form-item>
      <f-form-item>
        <f-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </f-button>
        <f-button>Reset</f-button>
      </f-form-item>
    </f-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from '@fan-ui/components/form'
import { reactive, ref } from 'vue'
interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  location: string
  type: string[]
  resource: string
  desc: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: []
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  date1: [
    {
      required: true,
      message: 'Please pick a date',
      trigger: 'change'
    }
  ],
  date2: [
    {
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change'
    }
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      console.log(ruleForm.type)
    } else {
      console.log('error submit!', fields)
      console.log(ruleForm.type)
    }
  })
}
</script>
