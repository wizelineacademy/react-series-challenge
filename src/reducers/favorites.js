import {
  GET_FAVORITE_ITEMS,
  SEARCH_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/types';

const initialState = { items: {} };

const favorites = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FAVORITE_ITEMS:
      delete state.filtered;
      return { ...state };

    case SEARCH_FAVORITES: {
      const { items } = state;
      const search = Object.getOwnPropertyNames(items).reduce((obj, id) => {
        const { title, slug } = items[id];
        if (new RegExp(payload, 'gi').test(`${title} ${slug}`)) {
          obj[id] = items[id];
        }
        return obj;
      }, {});

      return { ...state, filtered: search };
    }
    case ADD_FAVORITE: {
      const { items } = state;
      items[payload.id] = payload;

      return { ...state };
    }
    case REMOVE_FAVORITE:
      delete state.items[payload];
      return { ...state };

    default:
      return state;
  }
}

export default favorites;
