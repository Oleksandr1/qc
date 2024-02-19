<template>
  <div class="dashboard-restore-panel">
    <div v-for="element in elements" :key="element.id">
      <button class="dashboard-restore-panel--btn" @click="restoreElement(element)">
        <icon-restore />
        <span style="margin-left:10px ">{{ element.name }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {iDashboardItem} from "@/types";
import IconRestore from "@/components/icons/IconRestore.vue";

const props = defineProps(
        { elements: Array<iDashboardItem>}
    )

const emits = defineEmits(['restore-element']);

const restoreElement = (element: iDashboardItem) => {
  emits('restore-element', element);
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
.dashboard-restore-panel--btn {
  background-color: #00CC99;
  color: white;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
</style>
