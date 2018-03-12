import trendingActions from '../actions/trending';
const initialState = {
  isLoading: false,
  giphyArray:[],
  errorMessage: ''
};

const trendingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case trendingActions.types.TRENDING_START:{
      return {
        ...state,
        isLoading: true,
        giphyArray:[],
        errorMessage: ''
      }
    }

    case trendingActions.types.TRENDING_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        giphyArray: payload,
        errorMessage: ''
      }
    }
    case trendingActions.types.TRENDING_FAIL:{
      return {
        ...state,
        isLoading: false,
        giphyArray: [],
        errorMessage: payload
      }
    }
    default:
      return state;
  }
};

export default trendingReducer;