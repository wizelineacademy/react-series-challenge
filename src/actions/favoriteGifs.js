const FAVORITE_ADD = 'FAVORITE_ADD';
const FAVORITE_REMOVE = 'FAVORITE_REMOVE';

const addFavorite = ({ payload }) => ({ type: FAVORITE_ADD, payload });
const removeFavorite = ({ payload }) => ({ type: FAVORITE_REMOVE, payload });

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
