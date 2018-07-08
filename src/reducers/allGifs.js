import {FETCH_ALL_GIFS} from "../actions/allGifs";

const allGifs = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_ALL_GIFS:
            const  { gifs } = action.payload;
            return { ...state,...gifs};
        default:
            return state;
    }
}

export default allGifs;