import {
  FETCH_TRENDING_GIFS,
  SEARCH_GIFS,
} from './actions';

const initialState = {
  searching: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_GIFS.PENDING:
    case SEARCH_GIFS.PENDING:
      return {
        ...state,
        searching: true,
        error: false,
      };
    case FETCH_TRENDING_GIFS.SUCCESS:
    case SEARCH_GIFS.SUCCESS:
      return {
        ...state,
        gifs: {
          ...action.data.gifs,
        },
        searching: false,
        error: false,
      };
    case FETCH_TRENDING_GIFS.ERROR:
    case SEARCH_GIFS.ERROR:
      return {
        ...state,
        searching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
