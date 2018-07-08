
import {
    UPDATE_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from '../actions/index'

const initialState = {
    allGifs : [],
    favGifs : []
}

function setApp(state = initialState,action) {
    switch (action.type) {
        case ADD_ITEM:
            return
        case DELETE_ITEM:
            return
        case UPDATE_ITEMS:
            return
    }
    return state;
}