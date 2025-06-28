<template>
  <div class="item" :style="{ height: '80px' }" :data-index="source.index">
    <div class="head">
      <span>{{ source.index }}</span>
      <span>{{ source.name }}</span>
    </div>
    <div class="body">
      {{ source.desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  source: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped></style>
