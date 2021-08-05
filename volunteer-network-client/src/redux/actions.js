

export const ALL_CATEGORIS = 'ALL_CATEGORIS'

export const allCategory = (data) => {
    return { type: ALL_CATEGORIS, data }
}

export const DATA_BLUR = 'DATA_BLUR';

export const handleBlur = (e) => {
    return { type: DATA_BLUR, e }
}

export const ALL_RERISTATIONS = 'ALL_RERISTATIONS'
export const allRegistations = (resData) => {
    return { type: ALL_RERISTATIONS, resData }
}

export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';

export const googleSignIn = (res) => {
    return { type: GOOGLE_SIGN_IN, res }

}

export const SIDE_BAR_NAV = 'SIDE_BAR_NAV';
export const sidebarNav = (menu) => {
    return { type: SIDE_BAR_NAV, menu }
}
