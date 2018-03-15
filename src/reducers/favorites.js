import {
  GET_FAVORITE_ITEMS,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/types';

const initialState = { items: {} };

const favorites = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FAVORITE_ITEMS:
      return { ...state };

    case ADD_FAVORITE:
      const { items } = state;
      items[payload.id] = payload;
      return { ...state };

    case REMOVE_FAVORITE:
      delete state.items[payload];
      return { ...state };

    default:
      return state;
  }
}

export default favorites;
