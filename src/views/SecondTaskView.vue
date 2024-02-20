<template>
  <div class="second-task-view">
    <tracker-info
      :btc="satoshiToBtc(totalAmount)"
      :tracker-status="trackerStatus"
      :status="status"
    />
    <tracker-table v-if="transactions.length" :transactions="transactions" />
    <tracker-control @start="start" @stop="stop" @reset="reset" />
  </div>
</template>

<script setup lang="ts">
import { useTransactions } from '@/composables/useTransactions'
import { computed } from 'vue'
import TrackerInfo from '@/components/tracker/TrackerInfo.vue'
import TrackerTable from '@/components/tracker/TrackerTable.vue'
import TrackerControl from '@/components/tracker/TrackerControl.vue'

const { start, stop, reset, transactions, status, satoshiToBtc, trackerStatus } = useTransactions()

const totalAmount = computed(() =>
  transactions.value.reduce(
    (acc, transaction) => acc + transaction.out[transaction.out.length - 1].value,
    0
  )
)
</script>
<style scoped>
.second-task-view {
  display: block;
  margin: 2em auto;
  width: 90%;
  background-color: var(--vt-c-indigo);
  padding: 2em;
}
</style>
