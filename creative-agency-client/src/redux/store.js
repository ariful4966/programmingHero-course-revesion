import { createStore } from 'redux'
import { reducter } from './reducer'

export const store = createStore(reducter)