import trendingGifsActions from "../actions/trendingGifs";

const initialState = {};

const gifReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case trendingGifsActions.types.FETCH_TRENDING_GIFS: {
      const newState = payload;
      return newState;
    }
    default:
      return state;
  }
};

export default gifReducer;
