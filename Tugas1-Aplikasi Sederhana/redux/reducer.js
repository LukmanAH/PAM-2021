import { TAMBAH, RESET } from './tipe'

const initData = {
  counter: 0
}

export const reducerCounter = (state = initData, action) => {
  switch (action.type) {
    case TAMBAH:
      return { ...state, counter: action.data + 1 }
    case RESET:
      return { ...state, counter: action.data - action.data }
    default: return state;
  }
}