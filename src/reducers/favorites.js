import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/types';

const initialState = {};

const favorites = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return { ...state }
    case REMOVE_FAVORITE:
      return { ...state }
    default:
      return state;
  }
}

export default favorites;
