import { foodData } from "../data/foodData";
import { ADD_TO_CART, BRAKFAST_FOOD, DINNER_FOOD, LUNCH_FOOD, REMOVE_FROM_CART } from "./actions";

const initialState = {
    cart: [],
    products: foodData,
    lunch: foodData.filter(ln => ln.category === 'lunch'),
    brakfast: [],
    dinner: []
}


const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return state;
        case REMOVE_FROM_CART:
            return state;
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