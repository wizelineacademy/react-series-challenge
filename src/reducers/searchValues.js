import searchActions from '../actions/searchValues'

const initialState = {};

const searchReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case searchActions.types.SEARCH_FAVORITE_GIFS: {
            return;
        }

        case searchActions.types.SEARCH_SPECIFIED_GIFS: {
            return;
        }

        case searchActions.types.SEARCH_TRENDING: {
            return;
        }

        default: 
            return state;
    }
}