import gifsActions from '../actions/trendingGifsApi';

const initialState = {};

const gifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case gifsActions.types.TRENDING_GIFS_FETCHED:
      const { gifs } = payload;

      const newState = {
        gifs,
        ...state
      };

      return newState;

    // case gifsActions.types.TRANSACTION_REMOVE:
    //   return state;

    default:
      return state;
  }
};

export default gifsReducer;
