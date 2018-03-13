import {
  TOGGLE_FAVORITE
} from '../actions/favorites';

export const defaultState = {};

const favorites = (state = defaultState, { type, payload }) => {
  switch (type) {
    case TOGGLE_FAVORITE: {
      const newState = { ...state };

      if (typeof state[payload.id] !== 'undefined') {
        delete newState[payload.id];
      } else {
        newState[payload.id] = payload;
      }

      return newState;
    }

    default: {
      return state;
    }
  }
}


export default favorites;
