import * as types from '../constants/actionTypes';

const initialState = {
    gifs: [],
    loading: true,
};

const transactionsReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case types.GIFS_TRENDING_FETCHED:
        case types.GIFS_SEARCH_FETCHED: {
            const newState = { ...state };
            newState.loading = true;
            return newState;
        }
        case types.GIFS_TRENDING_GET:
        case types.GIFS_SEARCH_GET: {
            const newState = { ...state };
            newState.gifs = [...action.gifs];
            newState.loading = false;
            return newState;
        }
        default:
            return state;
    }
};

export default transactionsReducer;