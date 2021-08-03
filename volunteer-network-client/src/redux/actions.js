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
