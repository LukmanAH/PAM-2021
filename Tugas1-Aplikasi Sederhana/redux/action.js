import { TAMBAH, RESET } from './tipe'

export const tambahCounter = (counter) => ({
  type: TAMBAH,
  data: counter
})

export const resetCounter = (counter) => ({
  type: RESET,
  data: counter
})