import { createAction } from 'redux-actions';
const LOAD_DATA_START = 'LOAD_DATA_START';
const LOAD_DATA_FINISHED = 'LOAD_DATA_FINISHED';
const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const SEARCH_FAVORITES = 'SEARCH_FAVORITES';
const SEARCH = 'SEARCH';
const SEARCH_FINISHED = 'SEARCH_FINISHED';
const SEARCH_FAILED = 'SEARCH_FAILED';
const DONT_SEARCH = 'DONT_SEARCH';
const CLEAR_QUERY = 'CLEAR_QUERY';
const LOAD_FAVORITES = 'LOAD_FAVORITES';
const LOAD_FAVORITES_FINISHED = 'LOAD_FAVORITES_FINISHED';
const SAVE_FAVORITES = 'SAVE_FAVORITES';

const loadDataStart = createAction(LOAD_DATA_START);
const loadDataFinished = createAction(LOAD_DATA_FINISHED);
const loadDataFailed = createAction(LOAD_DATA_FAILED);
const toggleFavorite = createAction(TOGGLE_FAVORITE);
const searchFavorites = createAction(SEARCH_FAVORITES);
const search = createAction(SEARCH);
const searchFinished = createAction(SEARCH_FINISHED);
const searchFailed = createAction(SEARCH_FAILED);
const dontSearch = createAction(DONT_SEARCH);
const clearQuery = createAction(CLEAR_QUERY);
const loadFavorites = createAction(LOAD_FAVORITES);
const saveFavorites = createAction(SAVE_FAVORITES);
const loadFavoritesFinished = createAction(LOAD_FAVORITES_FINISHED);

export default {
  types: {
    LOAD_DATA_START,
    LOAD_DATA_FINISHED,
    LOAD_DATA_FAILED,
    TOGGLE_FAVORITE,
    SEARCH,
    SEARCH_FINISHED,
    SEARCH_FAILED,
    SEARCH_FAVORITES,
    CLEAR_QUERY,
    DONT_SEARCH,
    LOAD_FAVORITES,
    LOAD_FAVORITES_FINISHED,
    SAVE_FAVORITES
  },
  creators: {
    loadDataStart,
    loadDataFinished,
    loadDataFailed,
    toggleFavorite,
    search,
    searchFinished,
    searchFailed,
    searchFavorites,
    clearQuery,
    dontSearch,
    loadFavorites,
    loadFavoritesFinished,
    saveFavorites
  }
};
