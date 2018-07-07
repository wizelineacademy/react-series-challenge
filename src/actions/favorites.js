const FAVORITE_TOGGLE = "FAVORITE_TOGGLE";

const toggleFavorite = (payload = {}) => ({ type: FAVORITE_TOGGLE, payload });

export default {
  types: {
    FAVORITE_TOGGLE
  },
  creators: {
    toggleFavorite
  }
};
