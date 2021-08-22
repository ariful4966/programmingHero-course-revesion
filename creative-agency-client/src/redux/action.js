export const LOGEDINUSER = 'LOGEDINUSER';

export const loginUser = (data) => {
    return { type: LOGEDINUSER, data }
}