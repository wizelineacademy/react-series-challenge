const FAVORITE_TOGGLE = 'favorite_toggle';

const toggleFavorite = (payload = '') => ({ type: FAVORITE_TOGGLE, payload });


export default {
  types: {
    FAVORITE_TOGGLE
  },
  creators: {
    toggleFavorite
  },
};