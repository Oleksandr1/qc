<template>
  <div class="dashboard-item">
    <div class="dashboard-item__title">
      {{ element.name }}
      <button class="dashboard-item__remove-btn" @click="hideDashboard()"><icon-remove /></button>
    </div>
    <div class="dashboard-item__body" :class="{ 'drag-cancel': !isBodyDraggable }">
      x: {{ element.x }}<br />
      y: {{ element.y }}<br />
      height: {{ element.height }}<br />
      width: {{ element.width }}<br />
      zIndex={{ element.zIndex }}<br />
      isBodyDraggable={{ isBodyDraggable }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { iDashboardItem } from '@/types'
import IconRemove from '@/components/icons/IconRemove.vue'

const props = withDefaults(
  defineProps<{
    element: iDashboardItem
    isBodyDraggable: boolean
  }>(),
  {
    isBodyDraggable: false
  }
)

const emits = defineEmits(['hide-element'])

const hideDashboard = () => {
  emits('hide-element', props.element)
}
</script>
<style scoped>
.dashboard-item {
  width: 100%;
  height: 100%;
  background-color: dimgray;
}
.dashboard-item__title {
  display: flex;
  justify-content: space-between;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  text-align: center;
}
.dashboard-item__body {
  padding: 10px;
  color: white;
}
.dashboard-item__remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
