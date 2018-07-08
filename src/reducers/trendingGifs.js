import gifsActions from '../actions/gifs';

const initialState = {};

const trendingGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case gifsActions.types.TRENDING_GIFS_FETCHED: {
      const { data } = payload;

      const newState = { ...data };

      Object.keys(newState).forEach(gif => newState[gif].liked = false);

      return newState;
    }
    default:
      return state;
  }
};

export default trendingGifsReducer;
