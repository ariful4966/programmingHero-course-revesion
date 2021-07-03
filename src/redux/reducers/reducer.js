import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import bookingReducer from "./bookingReducer";

const reducer = combineReducers({
    cartReducer,
    bookingReducer
})

export default reducer