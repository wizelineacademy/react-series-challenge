import trending from '../actions/trending';

const initialState = {
    gifs: [],
    fetching: false
};

const trendingReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case trending.types.TRENDING_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case trending.types.TRENDING_COMPLETED:
      return {
        ...state,
        fetching: false,
        ...action.gifs,
      };
    case trending.types.TRENDING_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default trendingReducer;