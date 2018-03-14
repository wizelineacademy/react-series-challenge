import {
  FETCH_TRENDING_GIFS,
} from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_GIFS:
      return {
        ...state,
        searching: true,
      };
    default:
      return state;
  }
};

export default reducer;
