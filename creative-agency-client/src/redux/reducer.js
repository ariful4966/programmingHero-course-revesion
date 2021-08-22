import { LOGEDINUSER } from "./action"



const intitialState = {
    user: {},
    data: []
}

export const reducter = (state = intitialState, action) => {
    switch (action.type) {
        case LOGEDINUSER:
            return state;
        default:
            return state
    }
}