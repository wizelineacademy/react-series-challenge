import {
  UPDATE_QUERY,
  SEARCH_FAVORITE
} from '../actions/types';

const initialState = { query: '' };

const search = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_QUERY:
      return { ...state, query: payload };

    case SEARCH_FAVORITE:
      return { ...state };

    default:
      return state;
  }
}

export default search;
