
import { ADD_TO_CART, REMOVE_FORM_CART } from "../actions/cartActions";

const initialData = {
    cart: []
}

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return state;
        case REMOVE_FORM_CART:
            return state;
        default:
            return state
    }
}

export default cartReducer;