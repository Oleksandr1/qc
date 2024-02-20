export interface iDashboardItem {
  x: number
  y: number
  width: number
  height: number
  isActive: boolean
  id: number
  zIndex: number
  visible: boolean
  name: string
}

export interface iTransactionOutput {
  spent: boolean
  tx_index: number
  type: number
  addr: string
  value: number
  n: number
  script: string
}

export interface iTransaction {
  lock_time: number
  ver: number
  size: number
  inputs: {
    sequence: number
    prev_out: iTransactionOutput
    script: string
  }[]
  time: number
  tx_index: number
  vin_sz: number
  hash: string
  vout_sz: number
  relayed_by: string
  out: iTransactionOutput[]
}

export interface iIncomingData {
  op: string
  x: iTransaction
}

export enum trackerStatusEnum {
  Started = 'Started',
  Stopped = 'Stopped'
}
