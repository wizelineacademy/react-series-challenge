const SEARCH_INPUT = "SEARCH_INPUT";
const SEARCH_FAVORITE = "SEARCH_FAVORITE";

const setSearchInput = (query = "") => ({ type: SEARCH_INPUT, query });
const setSearchFavorite = (query = "") => ({ type: SEARCH_INPUT, query });

export default {
  types: {
    SEARCH_INPUT,
    SEARCH_FAVORITE
  },
  creators: {
    setSearchInput,
    setSearchFavorite
  }
};
