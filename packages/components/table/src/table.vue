<template>
  <div :class="bem.b()">
    <div :class="bem.e('inner-wrapper')">
      <div :class="bem.e('thead-wrapper')">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>name</th>
              <th>name</th>
              <th>name</th>
            </tr>
          </thead>
        </table>
      </div>
      <div :class="bem.e('tbody-wrapper')">
        <table>
          <tbody>
            <tr>
              <td>陈秋苹</td>
              <td>陈秋苹</td>
              <td>陈秋苹</td>
              <td>陈秋苹</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { tableProps } from './table'

defineOptions({
  name: 'f-table'
})

const bem = createNamespace('table')

defineProps(tableProps)
</script>
