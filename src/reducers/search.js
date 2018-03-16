import {
  UPDATE_QUERY,
  CLEAR_QUERY
} from '../actions/types';

const initialState = { query: '' };

const search = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_QUERY:
      return { ...state, query: payload };

    case CLEAR_QUERY:
      return { ...state, query: '' };

    default:
      return state;
  }
}

export default search;
