<template>
  <div class="item">
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
