import {ADD_ITEM, DELETE_ITEM} from "../actions";

const favGifs = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:{
            const newState = { ...state };
            newState.favGifs[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_ITEM:{
            const newState = {...state};
            delete(newState.favGifs[action.id]);
            return newState;
        }
        default:
            return state;
    }
}

export default favGifs;