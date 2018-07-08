import trendGifsActions from '../actions/trendGifs';

const initialState = [];

const trendGifsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case trendGifsActions.types.TREND_GIFS_FETCHED:
            const { gifs } = payload;
            return [...state, ...gifs];

        default:
            return state;
    }
};

export default trendGifsReducer;
