import { ExtractPropTypes } from 'vue'

export const uploadDraggerProps = {
  disabled: {
    type: Boolean,
    default: false
  }
}

export const uploadDraggerEmits = {
  file: (file: File[]) => Array.isArray(file)
}

export type UploadDraggerProps = ExtractPropTypes<typeof uploadDraggerProps>
export type UploadDraggerEmits = typeof uploadDraggerEmits
