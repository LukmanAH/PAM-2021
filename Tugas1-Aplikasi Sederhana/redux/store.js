import { createStore } from 'redux'
import { reducerCounter } from "./reducer";
const storeState = createStore(reducerCounter);
export default storeState;