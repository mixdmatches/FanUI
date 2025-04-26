<template>
  <div class="mb-10">
    <f-button>default</f-button>
    <f-button type="primary">primary</f-button>
    <f-button type="success">success</f-button>
    <f-button type="info">info</f-button>
    <f-button type="warning">warning</f-button>
    <f-button type="danger">danger</f-button>
  </div>
  <div class="mb-10">
    <f-button plain>plain</f-button>
    <f-button type="primary" plain>primary</f-button>
    <f-button type="success" plain>success</f-button>
    <f-button type="info" plain>info</f-button>
    <f-button type="warning" plain>warning</f-button>
    <f-button type="danger" plain>danger</f-button>
  </div>
  <div class="mb-10">
    <f-button round>round</f-button>
    <f-button type="primary" round>primary</f-button>
    <f-button type="success" round>success</f-button>
    <f-button type="info" round>info</f-button>
    <f-button type="warning" round>warning</f-button>
    <f-button type="danger" round>danger</f-button>
  </div>
  <div class="mb-10">
    <f-button circle :icon="Search"></f-button>
    <f-button type="primary" circle :icon="AddOne"></f-button>
    <f-button type="success" circle :icon="Editor"></f-button>
    <f-button type="info" circle :icon="Mail"></f-button>
    <f-button type="warning" circle :icon="Delete"></f-button>
    <f-button type="danger" circle :icon="Like"></f-button>
  </div>
</template>

<script lang="ts" setup>
import { Search, AddOne, Editor, Mail, Delete, Like } from '@icon-park/vue-next'
</script>
