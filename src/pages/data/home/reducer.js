import {
  FETCH_TRENDING_GIFS,
} from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_GIFS.PENDING:
      return {
        ...state,
        searching: true,
        error: false,
      };
    case FETCH_TRENDING_GIFS.SUCCESS:
      return {
        ...state,
        gifs: {
          ...action.data.gifs,
        },
        searching: false,
        error: false,
      };
    case FETCH_TRENDING_GIFS.ERROR:
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
