
import { createStore } from 'redux'
import dentalReducer from '../reducer/reducer'


const dentalStore = createStore(dentalReducer);
export default dentalStore;