import { createAction } from 'redux-actions';

const FAVORITE_GET = 'FAVORITE_GET';
const FAVORITE_ADD = 'FAVORITE_ADD';
const FAVORITE_REMOVE = 'FAVORITE_REMOVE';

const getFavoriteGifs = (payload = {}) => ({ type: FAVORITE_GET, payload });
const addFavorite = (payload = {}) => ({ type: FAVORITE_ADD, payload });
const removeFavorite = createAction(FAVORITE_REMOVE);

export default {
  types: {
    FAVORITE_GET,
    FAVORITE_ADD,
    FAVORITE_REMOVE
  },
  creators: {
    getFavoriteGifs,
    addFavorite,
    removeFavorite
  }
};
