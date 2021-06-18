export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const SHOW_DETAIL="SHOW_DETAIL";

export const QUANTITY_INCREMENT = "QUANTITY_INCREMENT";
export const QUANTITY_DICREMENT = "QUANTITY_DICREMENT";

export const LUNCH_FOOD = "LUNCH_FOOD";
export const BRAKFAST_FOOD = "BRAKFAST_FOOD";
export const DINNER_FOOD = "DINNER_FOOD";

export const addToCart = id => {
    return { type: ADD_TO_CART, id }
}
export const removeFromCart = id => {
    return { type: REMOVE_FROM_CART, id }
}

export const showDetail = (id)=>{
    return {type: SHOW_DETAIL, id}
}

export const quantityIncrement = (id) => {
    return { type: QUANTITY_INCREMENT, id }
}

export const quantityDicrement = (id) => {
    return {type: QUANTITY_DICREMENT, id}
}

export const lunchFood = (category) => {
    return { type: LUNCH_FOOD, category }
}
export const brakfastFood = (category) => {
    return { type: BRAKFAST_FOOD, category }
}
export const dinnerFood = (category) => {
    return { type: DINNER_FOOD, category }
}