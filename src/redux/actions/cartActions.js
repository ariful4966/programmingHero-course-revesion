export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FORM_CART = 'REMOVE_FORM_CART';

export const addToCart = (id, name) => {
    return { type: ADD_TO_CART, id, name }
}

export const removeFormCart = (id) => {
    return { type: REMOVE_FORM_CART, id }
}