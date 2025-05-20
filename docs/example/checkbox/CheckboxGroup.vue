<template>
  <f-checkbox-group v-model="checkList">
    <f-checkbox label="Option A" value="Value A" />
    <f-checkbox label="Option B" value="Value B" />
    <f-checkbox label="Option C" value="Value C" />
    <f-checkbox label="disabled" value="Value disabled" disabled />
    <f-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
  </f-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
</script>
