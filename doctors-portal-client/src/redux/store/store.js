
import { createStore } from 'redux'
import dentalReducer from '../reducer/reducer'


export const store = createStore(dentalReducer);