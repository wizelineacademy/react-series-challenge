import trends from '../actions/trending';

const initialState = {
    fetching: false,
    success: false
}
const trending = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case trends.types.GET_TRENDING_START:
            newState = { ...state };
            newState.fetching = true;
            newState.success = true;
            return newState;
        case trends.types.GET_TRENDING_COMPLETE:
            newState = { ...state };
            newState.fetching = false;
            newState.list = action.payload;
            newState.success = true;
            return newState;
        case trends.types.GET_TRENDING_ERROR:
            newState = { ...initialState }
            return newState;
        default:
            return state;
    }
}

export default trending;