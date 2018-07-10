import trendingActions from '../actions/trending';
import initialState from '../store/state';

const trendingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case trendingActions.types.TRENDING_GIFS_FETCHED: {
      const { gifs } = payload;

      let newState = {};
      gifs.map(gif => newState[gif.id] = { ...gif });
      return newState;
    }
    default:
      return state;
  }
};

export default trendingReducer;
