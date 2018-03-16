import {TOGGLE_FAVORITE, UPDATE_FILTERED_FAVORITES} from "../actions/favorite";

const findGifInFavorites = (id, favorites) => favorites.find((gif) => gif.id === id);
const addGifToFavorites = (gif, favorites) => [...favorites, gif];
const removeGifFromFavorites = (id, favorites) => favorites.filter((gif) => gif.id !== id);

const initialState = {
  filtered: [],
  original: []
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (findGifInFavorites(action.payload.id, state.original)) {
        const original = removeGifFromFavorites(action.payload.id, state.original);
        return {filtered: original, original};
      }
      const original = addGifToFavorites(action.payload, state.original);
      return {filtered: original, original};
    case UPDATE_FILTERED_FAVORITES:
      return {...state, filtered: action.payload};
    default:
      return state
  }
};

export default favorites;
