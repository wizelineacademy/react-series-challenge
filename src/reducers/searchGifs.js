import {FETCH_SEARCH_GIFS} from "../actions/searchGifs";

const searchGifs = (state = {}, action) => {

    switch (action.type) {
        case FETCH_SEARCH_GIFS:
            const  { gifs } = action.payload;
            return {...gifs};
        default:
            return state;
    }
}

export default searchGifs;