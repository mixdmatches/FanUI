<template>
  <div>
    <f-button type="primary" :icon="Edit" />
    <f-button type="primary" plain :icon="Share" />
    <f-button type="danger" :icon="Delete" />
    <f-button type="primary" :icon="Search">Search</f-button>
    <f-button type="primary">
      Upload<f-icon class="f-icon--right"><Upload /></f-icon>
    </f-button>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@icon-park/vue-next'
</script>
