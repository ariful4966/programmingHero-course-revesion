import placeData from "../../placeData/data";
import { ADD_TO_BOOK, DATA_FILTER, REMOVE_FORM_BOOK } from "../actions/bookingActions";

const initialState = {
    data: placeData,
    dataFilter: placeData[0],
    book: {}
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BOOK:
            return state;
        case REMOVE_FORM_BOOK:
            return state;
        case DATA_FILTER:
            const id = action.id;
            const item = state.data.find(pl => pl.id === id);
            return { ...state, dataFilter: item };
        default:
            return state
    }
}

export default bookingReducer;