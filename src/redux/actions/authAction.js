export const SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
export const SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';

export const SIGNIN_WITH_EMAIL_PASSWORD = 'SIGNIN_WITH_EMAIL_PASSWORD';

export const SIGN_OUT = 'SIGN_OUT';

export const ACCOUNT_CREATE ='ACCOUNT_CREATE';

export const signinWithGoogle = (res) => {
    return { type: SIGNIN_WITH_GOOGLE, res }
}

export const signinWithFacebook = res => {
    return { type: SIGNIN_WITH_FACEBOOK, res }
}

export const singinWithEmail = res=>{
    return {type: SIGNIN_WITH_EMAIL_PASSWORD, res}
}

export const signOUt = ()=>{
    return {type: SIGN_OUT}
}