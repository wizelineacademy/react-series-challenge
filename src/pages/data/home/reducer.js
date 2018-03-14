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
      };
    case FETCH_TRENDING_GIFS.SUCCESS:
      return {
        ...state,
        searching: false,
      };
    default:
      return state;
  }
};

export default reducer;
