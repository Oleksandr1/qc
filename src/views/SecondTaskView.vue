<template>
  <div class="second-task-view">
    <h1 class="second-task-view__title">Bitcoin Transaction Tracker</h1>
    <p class="second-task-view__status">Connection status: {{ status }}</p>
    <p class="second-task-view__tracker-status">Tracker status: {{ trackerStatus }}</p>
    <p class="second-task-view__total-amount">Total Amount: {{ satoshiToBtc(totalAmount) }} BTC</p>
    <div class="second-task-view__table-container" v-if="transactions.length">
      <div class="second-task-view__flex-table second-task-view__header">
        <div class="second-task-view__flex-col second-task-view__address">From</div>
        <div class="second-task-view__flex-col second-task-view__address">To</div>
        <div class="second-task-view__flex-col second-task-view__amount">Amount</div>
      </div>
      <div
        class="second-task-view__flex-table second-task-view__row"
        v-for="transaction in transactions"
        :key="transaction.hash"
      >
        <div
          class="second-task-view__flex-col second-task-view__address"
          :title="transaction.inputs[transaction.inputs.length - 1].prev_out.addr"
        >
          {{ transaction.inputs[transaction.inputs.length - 1].prev_out.addr }}
        </div>
        <div
          class="second-task-view__flex-col second-task-view__address"
          :title="transaction.out[transaction.out.length - 1].addr"
        >
          {{ transaction.out[transaction.out.length - 1].addr }}
        </div>
        <div
          class="second-task-view__flex-col second-task-view__amount"
          :title="satoshiToBtc(transaction.out[transaction.out.length - 1].value)"
        >
          {{ satoshiToBtc(transaction.out[transaction.out.length - 1].value) }}
        </div>
      </div>
    </div>

    <div class="second-task-view__btn-container">
      <button class="second-task-view__btn second-task-view__btn-start" @click="start">
        Start
      </button>
      <button class="second-task-view__btn second-task-view__btn-stop" @click="stop">Stop</button>
      <button class="second-task-view__btn second-task-view__btn-reset" @click="reset">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTransactions } from '@/composables/useTransactions'
import { computed } from 'vue'

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
.second-task-view__title {
  color: var(--vt-c-aqua);
  font-size: 16px;
}

.second-task-view__flex-col {
  text-align: left;
  padding: 0.5em 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.second-task-view__address {
  width: 40%;
}
.second-task-view__amount {
  width: 20%;
}

.second-task-view__btn-container {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.second-task-view__btn {
  padding: 1em 4em;
  margin: 0 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bolder;
  font-size: 16px;
}
.second-task-view__btn:active {
  box-shadow: 0 2px var(--vt-c-divider-dark-2);
  transform: translateY(2px);
}

.second-task-view__btn-start {
  background-color: var(--vt-c-aqua);
  color: var(--vt-c-white);
}
.second-task-view__btn-stop {
  background-color: var(--vt-c-red);
  color: var(--vt-c-white);
}
.second-task-view__btn-reset {
  background-color: var(--vt-c-yellow);
  color: var(--vt-c-white);
}
.second-task-view__table-container {
  display: block;
}

.second-task-view__flex-table {
  display: flex;
  flex-flow: row wrap;
}

.second-task-view__header {
  color: var(--vt-c-aqua);
  font-size: 16px;
}

.second-task-view__flex-col {
  text-align: left;
  padding: 0.5em 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.second-task-view__address {
  width: 40%;
}

.second-task-view__amount {
  width: 20%;
}
</style>
