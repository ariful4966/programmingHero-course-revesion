
export const GET_CATEGORY_DATA = 'GET_CATEGORY_DATA';

export const DENTAL_CATEGORY = 'DENTAL_CATEGORY';

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

export const NEWUSER_TRUE_FALSE = 'NEWUSER_TRUE_FALSE';



export const categoryByDate = (date) => {
    return { type: DENTAL_CATEGORY, date }
}

export const updateUserInfo = (e) => {
    return { type: UPDATE_USER_INFO, e }
}

export const submitUserInfo = (data) => {

    return { type: SUBMIT_USER_INFO, data }
}

export const handleLoginSignupForm = (bool) => {
    return { type: NEWUSER_TRUE_FALSE, bool }
}

export const SIGN_OUT = "SIGN_OUT";
export const signOutUser = () => {
    return { type: SIGN_OUT }
}

export const DASHBOARD_TAB = 'DASHBOARD_TAB';
export const dashboardTab = (str)=>{
    return {type: DASHBOARD_TAB, str}
}
