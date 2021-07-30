import { signOut } from "../../components/pages/Auth/authManeger";
import { ALL_APPOINMENT, ALL_CATEGORY, ALL_PATIENT, DASHBOARD_TAB, DENTAL_CATEGORY, GET_CATEGORY_DATA, NEWUSER_TRUE_FALSE, SIGN_OUT, SUBMIT_USER_INFO, UPDATE_USER_INFO } from "../action/action"





const initialState = {
    treatmentCategory: [],
    treatmentByDate: [],
    setDate: new Date().toLocaleDateString('en-US'),
    user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isLogin: false,
        error: ''
    },
    newUser: false,
    appoinments: [],
    dashBoardTab: 'dashboard',
    patients: []
}


const dentalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_CATEGORY:
            const cat = action.cat
            return { ...state, treatmentCategory: cat };
        case GET_CATEGORY_DATA:
            const getCategory = action.dentalCategory;
            return { ...state, treatmentCategory: getCategory }
        case DENTAL_CATEGORY:
            const selectDate = action.date.toLocaleDateString('en-US');
            const selectByDate = state.treatmentCategory.filter(td => td.date === selectDate)
            return { ...state, treatmentByDate: selectByDate, setDate: selectDate }
        case UPDATE_USER_INFO:
            const event = action.e.target;
            let isFieldValid = true;
            if (event.name === 'email') {
                isFieldValid = /\S+@\S+\.\S+/.test(event.value);
                if (!isFieldValid) { return { ...state, user: { ...state.user, errorEmail: 'Plese Provide Valid Email Address' } } }
            }
            if (event.name === 'password') {
                const passwordValidation = state.user.password.length < 6;
                const passwordHashNumber = /\d{1}/.test(event.value)
                isFieldValid = (passwordValidation && passwordHashNumber)
                if (!isFieldValid) { return { ...state, user: { ...state.user, passError: 'Plese Type Valid Password "Lenth 6 Charecter"' } } }
            }
            if (event.name === 'confirmPassword') {
                const confirmPasswordValidation = (event.value === state.user.password);
                isFieldValid = confirmPasswordValidation;
                if (!isFieldValid) { return { ...state, user: { ...state.user, confirmPassError: "Password Dosen't Match" } } }
            }

            if (isFieldValid) {

                return { ...state, user: { ...state.user, [event.name]: event.value } }
            }
            return state;
        case SUBMIT_USER_INFO:
            const userData = action.data;
            return { ...state, user: userData };
        case NEWUSER_TRUE_FALSE:
            return { ...state, newUser: action.bool };
        case SIGN_OUT:
            signOut();
            return { ...state, user: initialState.user };
        case DASHBOARD_TAB:
            const tabStr = action.str;
            return { ...state, dashBoardTab: tabStr };
        case ALL_APPOINMENT:
            const appoints = action.appo;
            return { ...state, appoinments: appoints }
        case ALL_PATIENT:
            const patient = action.patient;
            return { ...state, patients: patient }
        default:
            return state
    }
}
export default dentalReducer;