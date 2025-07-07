<template>
  <div>
    <f-bubble content="hello" :avatarConfig="{ imgSrc: '/FanUI/logo.png' }">
      <template #top>
        <div class="bubble-top-area">
          <span>FanUIChat</span>
        </div>
      </template>
      <template #bottom>
        <div class="bubble-bottom-area">
          <f-icon>
            <thumbs-up theme="outline" size="24" fill="#abb2bd" />
          </f-icon>
          <f-icon>
            <thumbs-down theme="outline" size="24" fill="#abb2bd" />
          </f-icon>
          <f-icon>
            <copy theme="outline" size="24" fill="#abb2bd" />
          </f-icon>
        </div>
      </template>
    </f-bubble>
  </div>
</template>

<script setup lang="ts">
import { ThumbsUp, ThumbsDown, Copy } from '@icon-park/vue-next'
</script>

<style scoped>
.bubble-bottom-area {
  display: flex;
  gap: 4px;
}
</style>
