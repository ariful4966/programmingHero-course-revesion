import dentalCategory from "../../data/dentalCategory";
import { DENTAL_CATEGORY, GET_CATEGORY_DATA, NEWUSER_TRUE_FALSE, SUBMIT_USER_INFO,  UPDATE_USER_INFO } from "../action/action"



const initialState = {
    treatmentCategory: dentalCategory,
    treatmentByDate: dentalCategory.filter(df => df.date === new Date().toLocaleDateString('en-US')),
    setDate: new Date().toLocaleDateString('en-US'),
    user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isLogin: false,
        error: ''
    },
    newUser: false
}
const dentalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_DATA:
            const getCategory = action.dentalCategory;
            return { ...state, treatmentCategory: getCategory }
        case DENTAL_CATEGORY:
            const selectDate = action.date.toLocaleDateString('en-US');
            const selectByDate = state.treatmentCategory.filter(td => td.date === selectDate)
            return { ...state, treatmentByDate: selectByDate, setDate: selectDate }
        case UPDATE_USER_INFO:
            const event = action.e.target;
            return { ...state, user: { ...state.user, [event.name]: event.value } }
        case SUBMIT_USER_INFO:
            const userData = action.data;
             return {...state, user: userData};
        case NEWUSER_TRUE_FALSE:
            return { ...state, newUser: action.bool }
        default:
            return state
    }
}
export default dentalReducer;