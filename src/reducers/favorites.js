import {TOGGLE_FAVORITE} from "../actions/favorite";

const findGifInFavorites = (id, favorites) => favorites.find((gif) => gif.id === id);
const addGifToFavorites = (gif, favorites) => [...favorites, gif];
const removeGifFromFavorites = (id, favorites) => favorites.filter((gif) => gif.id !== id);

const favorites = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (findGifInFavorites(action.payload.id, state)) {
        return removeGifFromFavorites(action.payload.id, state);
      }
      return addGifToFavorites(action.payload, state);
    default:
      return state
  }
};

export default favorites;
