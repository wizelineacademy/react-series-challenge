import {
  SELECTED_GIF_CHANGE,
  SELECTED_GIF_REMOVE,
  SELECTED_GIF_REQUEST_INFO
} from '../actions/selected';

export const defaultState = null;

const selected = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SELECTED_GIF_CHANGE: {
      return payload;
    }

    case SELECTED_GIF_REMOVE: {
      return defaultState;
    }

    case SELECTED_GIF_REQUEST_INFO: {
      return { loading: true };
    }

    default: {
      return state;
    }
  }
}

export default selected;
