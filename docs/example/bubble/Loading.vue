<template>
  <div>
    <f-bubble
      :avatarConfig="{ imgSrc: '../../public/logo.png' }"
      loading="true"
    ></f-bubble>
    <f-bubble
      :avatarConfig="{ imgSrc: '../../public/logo.png' }"
      loading="true"
    >
      <template #loading> The model is thinking ...... </template>
    </f-bubble>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
