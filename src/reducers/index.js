
import {
    UPDATE_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from '../actions/index'

const initialState = {
    allGifs    : [],
    searchGifs : [],
    favGifs    : {}
}

function setApp(state = initialState,action) {
    switch (action.type) {
        case ADD_ITEM:{
            const newState = { ...state };
            newState.favGifs[action.payload.id] = action.payload;
            return newState
        }
        case DELETE_ITEM:{
            const newState = {...state};
            delete(newState.favGifs[action.id]);
            return newState
        }

        case UPDATE_ITEMS:
            return
    }
    return state;
}