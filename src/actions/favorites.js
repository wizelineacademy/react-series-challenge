const FAVORITE_TOGGLE = 'favorite_toggle';
const FAVORITE_FILTER = 'favorite_filter';
/* Toggle Favorite */
const toggleFavorite = (payload) => ({ type: FAVORITE_TOGGLE, payload });
const filterFavorite = (filter) => ({ type: FAVORITE_FILTER, filter});

export default {
  types: {
    FAVORITE_TOGGLE,
    FAVORITE_FILTER
  },
  creators: {
    toggleFavorite,
    filterFavorite
  }
};