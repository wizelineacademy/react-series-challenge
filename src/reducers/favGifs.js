import {ADD_ITEM, DELETE_ITEM} from "../actions/favGifs";

const favGifs = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:{
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            console.log(newState);
            return newState;
        }
        case DELETE_ITEM:{
            const newState = {...state};
            delete(newState[action.id]);
            return newState;
        }
        default:
            return state;
    }
}

export default favGifs;