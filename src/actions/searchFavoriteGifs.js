const GET_FAVORITE_SEARCH_GIFS = "GET_FAVORITE_SEARCH_GIFS";

const getSearchFavoriteGifs = (payload = {}) => ({ type: GET_FAVORITE_SEARCH_GIFS, payload });

export default {
  types: {
    GET_FAVORITE_SEARCH_GIFS
  },
  creators: {
    getSearchFavoriteGifs
  }
};
