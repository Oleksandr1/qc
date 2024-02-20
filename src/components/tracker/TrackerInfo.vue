<template>
  <h1 class="tracker-info__title">Bitcoin Transaction Tracker</h1>
  <p class="tracker-info__status">Connection status: {{ status }}</p>
  <p class="tracker-info__tracker-status">Tracker status: {{ trackerStatus }}</p>
  <p class="tracker-info__total-amount">Total Amount: {{ btc }} BTC</p>
</template>
<script setup lang="ts">
defineProps<{
  status: string
  trackerStatus: string
  btc: string
}>()
</script>
<style scoped>
.tracker-info__title {
  color: var(--vt-c-aqua);
  font-size: 16px;
}
</style>
