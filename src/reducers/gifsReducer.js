import gifsActions from '../actions/trendingGifsApi';

const initialState = [];

const gifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case gifsActions.types.TRENDING_GIFS_RECEIVED:
      return payload.gifs;

    default:
      return state;
  }
};

export default gifsReducer;
