import searchGifsActions from '../actions/searchGifs';

const initialState = {};

const searchGifsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case searchGifsActions.types.SEARCH_GIFS_FETCHED:
            const { gifs } = payload;
            let newState = { ...state };
            newState = {};
            return { ...newState, ...gifs };

        default:
            return state;
    }
};

export default searchGifsReducer;
