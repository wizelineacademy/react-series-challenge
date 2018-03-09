import trendingActions from '../actions/trending';

const initialState = {};

const trendingGifs = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case trendingActions.types.REQUEST_TRENDING_GIFS_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default trendingGifs;
