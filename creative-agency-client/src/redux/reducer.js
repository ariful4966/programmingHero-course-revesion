import { LOGEDINUSER, SERVICEDATA } from "./action"



const intitialState = {
    user: {
        name: '',
        email: '',
        photo: '',
        isLogin: false
    },
    services: []
}

export const reducter = (state = intitialState, action) => {
    switch (action.type) {
        case LOGEDINUSER:
            const user = action.data;
            const newUser = {
                name: user.name,
                email: user.email,
                photo: user.picture,
                isLogin: true
            }
            return { ...state, user: { ...state.user, ...newUser } };
        case SERVICEDATA:
            const services = action.services;
            return { ...state, services:  services }
        default:
            return state
    }
}