<template>
  <div class="dashboard-restore-panel">
    <div v-for="element in elements" :key="element.id" class="dashboard-restore-panel__item">
      <button class="dashboard-restore-panel__btn" @click="restoreElement(element)">
        <icon-restore />
        <span class="dashboard-restore-panel__btn-text">{{ element.name }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { iDashboardItem } from '@/types'
import IconRestore from '@/components/icons/IconRestore.vue'

defineProps({ elements: Array<iDashboardItem> })

const emits = defineEmits(['restore-element'])

const restoreElement = (element: iDashboardItem) => {
  emits('restore-element', element)
}
</script>
<style scoped>
.dashboard-restore-panel {
  display: flex;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  text-align: center;
  min-height: 60px;
}
.dashboard-restore-panel__item {
  margin: 5px;
}
.dashboard-restore-panel__btn {
  background-color: var(--vt-c-aqua);
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.dashboard-restore-panel__btn-text {
  margin-left: 10px;
}
</style>
