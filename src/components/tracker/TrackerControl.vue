<template>
  <div class="second-task-view__btn-container">
    <general-btn text="Start" :bg-color="startColorBg" @click="emits('start')" />
    <general-btn text="Stop" :bg-color="stopColorBg" @click="emits('stop')" />
    <general-btn text="Reset" :bg-color="resetColorBg" @click="emits('reset')" />
  </div>
</template>
<script setup lang="ts">
import GeneralBtn from '@/components/general/GeneralBtn.vue'
import { useCssVar } from '@vueuse/core'

const emits = defineEmits(['start', 'stop', 'reset'])

const startColorBg = useCssVar('--vt-c-red')
const stopColorBg = useCssVar('--vt-c-aqua')
const resetColorBg = useCssVar('--vt-c-yellow')
</script>
<style scoped></style>
