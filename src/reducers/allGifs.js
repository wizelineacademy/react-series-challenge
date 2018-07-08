import {ALL_GIFS} from "../actions";

const allGifs = (state = {}, action) => {
    switch (action.type) {
        case ALL_GIFS:
        //todo: get all trendy gifs from Api
        default:
            return state
    }
}

export default allGifs;