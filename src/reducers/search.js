import {
  SEARCH_GIFS_REQUEST,
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_CHANGE_QUERY
} from '../actions/search';

export const defaultState = {
  query: '',
  searching: false,
  gifs: []
};

const search = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEARCH_GIFS_REQUEST: {
      return {
        ...state,
        searching: true
      };
    }

    case SEARCH_GIFS_SUCCESS: {
      return {
        ...state,
        searching: false,
        gifs: payload.data
      };
    }

    case SEARCH_GIFS_CHANGE_QUERY: {
      return {
        ...state,
        query: payload
      };
    }

    default: {
      return state;
    }
  }
}

export default search;
