const GET_TRENDING = 'GET_TRENDING';
const TRENDING_FETCHED = 'TRENDING_FETCHED';

const GET_SEARCH = 'GET_SEARCH';
const SEARCH_FETCHED = 'SEARCH_FETCHED';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const LOAD_SAVED_FAVORITES = 'LOAD_SAVED_FAVORITES';

const getTrendingGifs = () => ({type: GET_TRENDING, payload: null});
const trendingGifsFetched = (payload = {}) => ({type: TRENDING_FETCHED, payload});

const searchGifs = (q = '') => ({type: GET_SEARCH, payload: { q } });
const searchGifsFetched = (data, query) => ({type: SEARCH_FETCHED, payload:{data, query}});

const toggleFavorite = (id, gif) => ({type: TOGGLE_FAVORITE, payload: { id, gif } })
const loadSavedFavorites = () => ({type: LOAD_SAVED_FAVORITES, payload: null})

export default {
  types: {
    GET_TRENDING,
    TRENDING_FETCHED,
    GET_SEARCH,
    SEARCH_FETCHED,
    TOGGLE_FAVORITE,
    LOAD_SAVED_FAVORITES
  },
  creators: {
    getTrendingGifs,
    trendingGifsFetched,
    searchGifs,
    searchGifsFetched,
    toggleFavorite,
    loadSavedFavorites
  }
}