import {SEARCH_GIFS} from "../actions";

const searchGifs = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_GIFS:
            //todo: get gifs from Api based on input text
        default:
            return state
    }
}

export default searchGifs;