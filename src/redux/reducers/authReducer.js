import { ACCOUNT_CREATE, LOGIN_ACCOUNT, SIGNIN_WITH_EMAIL_PASSWORD, SIGNIN_WITH_FACEBOOK, SIGNIN_WITH_GOOGLE, SIGN_OUT } from "../actions/authAction"


const initialState = {
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    photo: '',
    password: '',
    confirmPassword: '',
    isLogin: false,
    error: ''

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_WITH_GOOGLE:
            const user = action.res
            const googleUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                isLogin: true
            }
            return { ...state, ...googleUser };
        case SIGNIN_WITH_FACEBOOK:
            const fbUser = action.res
            const facebookUser = {
                name: fbUser.displayName,
                email: fbUser.email,
                photo: fbUser.photoURL,
                isLogin: true
            }
            return { ...state, ...facebookUser };
        case SIGNIN_WITH_EMAIL_PASSWORD:
            return state;
        case SIGN_OUT:
            const outUser = {
                firstName: '',
                lastName: '',
                name: '',
                email: '',
                photo: '',
                password: '',
                confirmPassword: '',
                isLogin: false,
                error: ''

            };
            return { ...outUser };
        case ACCOUNT_CREATE:
            const newData = action.res;
            console.log(action);
            if(action.res.message){
                return{...state, error:action.res.message}
            }
            const newAcc = {
                name: newData.displayName,
                email: newData.email,
                photo: newData.photoURL
            }
            return { ...state, ...newAcc }
        case LOGIN_ACCOUNT:
            console.log(action);
            const loginUser = action.res
            if(action.res.message){
                return{...state, error:action.res.message}
            }
            const loggedUser = {
                name: loginUser.displayName,
                email: loginUser.email,
                photo: loginUser.photoURL,
                isLogin: true
            }
            return {...state, ...loggedUser}
        default:
            return state
    }
}
export default authReducer;