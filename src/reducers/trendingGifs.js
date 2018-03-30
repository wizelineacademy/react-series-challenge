import actions from '../actions/trendingGifs';
const initialState = {
  data: [],
  isLoading: false,
  error: null
};

const trendingGifsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case actions.types.GET_TRENDING_GIFS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case actions.types.GET_TRENDING_GIFS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        data: [...payload],
      };

    case actions.types.GET_TRENDING_GIFS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: {...payload}
      };

    default:
      return state;
  }
};

export default trendingGifsReducer;