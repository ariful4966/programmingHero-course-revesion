export const ADD_TO_BOOK = "ADD_TO_BOOK";
export const REMOVE_FORM_BOOK = "REMOVE_FROM_BOOK";
export const DATA_FILTER = "DATA_FILTER"

export const addToBook = (data) => {
    return { type: ADD_TO_BOOK, data }
}

export const removeFormBook = (id) => {
    return { type: REMOVE_FORM_BOOK, id }
}
export const addDataFilter = (id) => {
    return { type: DATA_FILTER, id }
}

