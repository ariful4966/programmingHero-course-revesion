import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import bookingReducer from "./bookingReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
    cartReducer,
    bookingReducer,
    authReducer,
})

export default reducer