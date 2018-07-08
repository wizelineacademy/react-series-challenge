import { createAction } from 'redux-actions';

const FAVORITE_ADD = 'FAVORITE_ADD';
const FAVORITE_REMOVE = 'FAVORITE_REMOVE';

const addFavorite = createAction(FAVORITE_ADD);
const removeFavorite = createAction(FAVORITE_REMOVE);

export default {
  types: {
    FAVORITE_ADD,
    FAVORITE_REMOVE,
  },
  creators: {
    addFavorite,
    removeFavorite,
  },
};
