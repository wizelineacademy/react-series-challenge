import giphyActions from '../actions/giphy';

const initialState = {
    list: null,
    query: null,
    fetching: false,
    success: false
}
const giphy = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case giphyActions.types.GET_TRENDING_START:
        case giphyActions.types.GET_SEARCH_START:
            newState = { ...initialState };
            newState.fetching = true;
            newState.success = true;
            return newState;
        case giphyActions.types.GET_TRENDING_COMPLETE:
        case giphyActions.types.GET_BY_ID_COMPLETE:
            newState = { ...state };
            newState.fetching = false;
            newState.list = action.payload;
            newState.success = true;
            return newState;
        case giphyActions.types.GET_TRENDING_ERROR:
        case giphyActions.types.GET_SEARCH_ERROR:
        case giphyActions.types.GET_BY_ID_ERROR:
            newState = { ...initialState }
            return newState;
        case giphyActions.types.GET_BY_ID_START:
            newState = { ...state };
            newState.fetching = true;
            newState.success = true;
            return newState;
        case giphyActions.types.GET_SEARCH_COMPLETE:
            newState = { ...state };
            newState.fetching = false;
            newState.list = action.payload.list;
            newState.query = action.payload.query
            newState.success = true;
            return newState;
        default:
            return state;
    }
}

export default giphy;