
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'Lenovo Laptop', id: 1 },
        { name: 'Asus Laptop', id: 2 },
        { name: 'Dell Laptop', id: 3 },
        { name: 'HP Laptop', id: 4 },
        { name: 'Toshiba Laptop', id: 5 }
    ]
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.id]
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const newCart = state.cart.filter(item => item !== id);
            return {
                ...state,
                cart: newCart
            };
        default:
            return state;
    }
}
export default cartReducer;