export const ALL_CATEGORIS = 'ALL_CATEGORIS'

export const allCategory = (data) => {
    return { type: ALL_CATEGORIS, data }
}

export const DATA_BLUR = 'DATA_BLUR';

export const handleBlur = (e) => {
    return { type: DATA_BLUR, e}
}