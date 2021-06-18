
import { foodData } from "../data/foodData";
import { ADD_TO_CART, BRAKFAST_FOOD, DINNER_FOOD, LUNCH_FOOD, QUANTITY_DICREMENT, QUANTITY_INCREMENT, REMOVE_FROM_CART, SHOW_DETAIL } from "./actions";

const initialState = {
    cart: [],
    products: foodData,
    lunch: foodData.filter(ln => ln.category === 'lunch'),
    brakfast: [],
    dinner: [],
    // product:{}
}


const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.id;
            const cartItem = state.products.find(pd => pd.id === item);
            return {
                ...state,
                cart: [...state.cart, cartItem]
            }



        case REMOVE_FROM_CART:
            return state;
        case QUANTITY_INCREMENT:
            const pdId = action.id;
            const product = state.products.find(pd => pd.id === pdId)
            let pdQuan = product.quantity + 1
            product.quantity = pdQuan
            return { ...state, products: [...state.products, product] }
        case QUANTITY_DICREMENT:
            const dicPdId = action.id;
            const dicProduct = state.products.find(pd => pd.id === dicPdId)
            let dicQuan;
            if (dicProduct.quantity > 1) {
                dicQuan = dicProduct.quantity - 1
                dicProduct.quantity = dicQuan
            }
            return { ...state, products: [...state.products, dicProduct] }
        case SHOW_DETAIL:
            const fdId = action.id;

            return state
        case LUNCH_FOOD:
            const lunch = action.category;
            const lunchFood = state.products.filter(pd => pd.category === lunch);
            return {
                ...state, lunch: lunchFood, brakfast: [], dinner: []
            };
        case BRAKFAST_FOOD:
            const brakfast = action.category;
            const brakfastFood = state.products.filter(pd => pd.category === brakfast);
            return {
                ...state, brakfast: brakfastFood, lunch: [], dinner: []
            };
        case DINNER_FOOD:
            const dinner = action.category;
            const dinnerFood = state.products.filter(pd => pd.category === dinner);
            return { ...state, dinner: dinnerFood, lunch: [], brakfast: [] };
        default:
            return state;
    }
}
export default foodReducer;