<template>
  <div class="track-table__table-container">
    <div class="track-table__flex-table track-table__header">
      <div class="track-table__flex-col track-table__address">From</div>
      <div class="track-table__flex-col track-table__address">To</div>
      <div class="track-table__flex-col track-table__amount">Amount</div>
    </div>
    <div
      class="track-table__flex-table track-table__row"
      v-for="transaction in transactions"
      :key="transaction.hash"
    >
      <div
        class="track-table__flex-col track-table__address"
        :title="transaction.inputs[transaction.inputs.length - 1].prev_out.addr"
      >
        {{ transaction.inputs[transaction.inputs.length - 1].prev_out.addr }}
      </div>
      <div
        class="track-table__flex-col track-table__address"
        :title="transaction.out[transaction.out.length - 1].addr"
      >
        {{ transaction.out[transaction.out.length - 1].addr }}
      </div>
      <div
        class="track-table__flex-col track-table__amount"
        :title="satoshiToBtc(transaction.out[transaction.out.length - 1].value)"
      >
        {{ satoshiToBtc(transaction.out[transaction.out.length - 1].value) }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTransactions } from '@/composables/useTransactions'
import type { iTransaction } from '@/types'

defineProps<{
  transactions: Array<iTransaction>
}>()
const { satoshiToBtc } = useTransactions()
</script>
<style scoped>
.track-table__flex-col {
  text-align: left;
  padding: 0.5em 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.track-table__address {
  width: 40%;
}
.track-table__amount {
  width: 20%;
}
.track-table__table-container {
  display: block;
}

.track-table__flex-table {
  display: flex;
  flex-flow: row wrap;
}

.track-table__header {
  color: var(--vt-c-aqua);
  font-size: 16px;
}

.track-table__flex-col {
  text-align: left;
  padding: 0.5em 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-table__address {
  width: 40%;
}

.track-table__amount {
  width: 20%;
}
</style>
