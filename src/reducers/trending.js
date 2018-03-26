import trending from '../actions/trending';

const initialState = {
  fetching: false,
};

const trendingReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case trending.types.GET_TRENDING_REQUESTED:
        return {
        ...state,
        fetching: true,
      };
    case trending.types.GET_TRENDING_COMPLETED:
      return {
        ...state,
        fetching: false,
        ...action.trending,
      };
    case trending.types.GET_TRENDING_FAILED:
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
