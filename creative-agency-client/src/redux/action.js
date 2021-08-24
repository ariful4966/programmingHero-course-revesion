export const LOGEDINUSER = 'LOGEDINUSER';

export const loginUser = (data) => {
    return { type: LOGEDINUSER, data }
}

export const SERVICEDATA = 'SERVICEDATA';
export const serviceData = (services) => {
    return { type: SERVICEDATA, services }
}