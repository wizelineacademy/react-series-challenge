import gifListActions from '../actions/gifList';

const initialState = {
    data: [],
};

const gifListReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case gifListActions.types.FETCHED_TRENDING_GIFS: {
            return payload;
        }

        default:
            return state;
    }
};

export default gifListReducer;