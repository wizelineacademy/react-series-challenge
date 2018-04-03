import trendingGifs from '../actions/trendingGifs';

const initialState = {
  fetching: false,
  data: []
};

const trendingGifsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case trendingGifs.types.GET_TRENDING_GIFS_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case trendingGifs.types.GET_TRENDING_GIFS_COMPLETED:
      return {
        ...state,
        fetching: false,
        ...action.prices,
      };
    case trendingGifs.types.GET_TRENDING_GIFS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default trendingGifsReducer;