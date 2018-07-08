import {LOAD_SEARCH_GIFS} from "../actions/searchGifs";

const searchGifs = (state = {}, action) => {
    switch (action.type) {
        case LOAD_SEARCH_GIFS:
            //todo: get gifs from Api based on input text
        default:
            return state;
    }
}

export default searchGifs;