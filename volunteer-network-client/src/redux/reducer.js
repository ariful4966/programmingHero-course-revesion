import { ALL_CATEGORIS, ALL_RERISTATIONS, DATA_BLUR } from "./actions";

const initialState = {
    count: 0,
    categoris: [],
    colors: ["#ff8c00", "#e9c206", "#0ec0ee", "blue"],
    registation: {
        name: '',
        email: '',
        date: '',
        description: '',
        organization: ''
    },
    user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    registations: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case ALL_CATEGORIS:
            const categoris = action.data;
            return { ...state, categoris: categoris };
        case DATA_BLUR:
            const event = action.e
            return { ...state, registation: { ...state.registation, [event.target.name]: event.target.value } };
        case ALL_RERISTATIONS:
            const resData = action.resData
            return { ...state, registations: resData }
        default:
            return state;
    }
}