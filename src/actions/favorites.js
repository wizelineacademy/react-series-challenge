const FAVORITE_TOGGLE = "FAVORITE_TOGGLE";
const FAVORITE_FILTER = "FAVORITE_FILTER";

const toggleFavorite = (payload = {}) => ({ type: FAVORITE_TOGGLE, payload });
const filterFavorite = (payload = "") => ({ type: FAVORITE_FILTER, payload });

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
