import type { iTransaction, iIncomingData } from '@/types'
import { useWebSocket, watchDeep } from '@vueuse/core'
import { onBeforeUnmount, ref } from 'vue'
import { trackerStatusEnum } from '@/types'
import config from '@/config'

export function useTransactions() {
  const { status, data, send, open, close } = useWebSocket(config.transactionSocket)
  const trackerStatus = ref(trackerStatusEnum.Stopped)
  send(JSON.stringify({ op: 'ping' }))

  const transactions = ref([] as Array<iTransaction>)

  watchDeep(data, (newData) => {
    const parsedData = JSON.parse(newData) as iIncomingData
    if (parsedData.op === 'utx') {
      transactions.value.unshift(parsedData.x)
    }
  })

  const start = () => {
    if (status.value === 'OPEN') {
      send(JSON.stringify({ op: 'unconfirmed_sub' }))
      trackerStatus.value = trackerStatusEnum.Started
    } else {
      open()
      send(JSON.stringify({ op: 'unconfirmed_sub' }))
      trackerStatus.value = trackerStatusEnum.Started
    }
  }
  const stop = () => {
    send(JSON.stringify({ op: 'unconfirmed_unsub' }))
    trackerStatus.value = trackerStatusEnum.Stopped
  }

  const reset = () => {
    stop()
    transactions.value = [] as Array<iTransaction>
  }

  const satoshiToBtc = (satoshi: number) => (satoshi / 100000000).toFixed(8)

  onBeforeUnmount(() => {
    close()
  })

  return {
    status,
    transactions,
    start,
    stop,
    reset,
    satoshiToBtc,
    trackerStatus
  }
}
