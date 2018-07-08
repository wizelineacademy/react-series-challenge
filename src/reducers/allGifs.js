import {LOAD_All_GIFS} from "../actions/allGifs";

const allGifs = (state = {}, action) => {
    switch (action.type) {
        case LOAD_All_GIFS:
        //todo: get all trendy gifs from Api
        default:
            return state
    }
}

export default allGifs;