import dentalCategory from "../../data/dentalCategory";
import { DENTAL_CATEGORY, GET_CATEGORY_DATA } from "../action/action"


// const defaultDate = new Date().toLocaleDateString('en.US');
const initialState = {
    treatmentCategory: dentalCategory,
    treatmentByDate: dentalCategory.filter(df=>df.date === new Date().toLocaleDateString('en-US')),
    setDate: new Date().toLocaleDateString('en-US')
}
const dentalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_DATA:
            const getCategory = action.dentalCategory;
            return { ...state, treatmentCategory: getCategory }
        case DENTAL_CATEGORY:
            const selectDate = action.date.toLocaleDateString('en-US');
            console.log(selectDate);
            const selectByDate = state.treatmentCategory.filter(td => td.date === selectDate)
            return { ...state, treatmentByDate: selectByDate, setDate: selectDate }
        case 'counter/decremented':
            return state
        default:
            return state
    }
}
export default dentalReducer;