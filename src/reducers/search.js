import {
  SEARCH_FAVORITE
} from '../actions/types';

const initialState = {};

const search = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_FAVORITE:
      return { ...state }
    default:
      return state;
  }
}

export default search;
