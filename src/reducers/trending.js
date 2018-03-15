import {
  LOAD_TRENDING_REQUEST,
  LOAD_TRENDING_SUCCESS
} from '../actions/trending';

export const defaultState = { loading: false, gifs: [] };

const trending = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOAD_TRENDING_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case LOAD_TRENDING_SUCCESS: {
      return {
        ...state,
        loading: false,
        gifs: payload.data
      };
    }

    default: {
      return state;
    }
  }
}


export default trending;
