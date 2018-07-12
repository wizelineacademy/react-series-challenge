import { createAction } from 'redux-actions';

const FAVORITE_ID_ADD = 'FAVORITE_ID_ADD';
const FAVORITE_ID_REMOVE = 'FAVORITE_ID_REMOVE';
const FAVORITES_LOAD = 'FAVORITES_LOAD';
const FAVORITES_LOADING_SET = 'FAVORITES_LOADING_SET';
const FAVORITES_SET = 'FAVORITES_SET';
const FAVORITES_SEARCH = 'FAVORITES_SEARCH';

const addFavoriteId = createAction(FAVORITE_ID_ADD);
const removeFavoriteId = createAction(FAVORITE_ID_REMOVE);
const loadFavorites = createAction(FAVORITES_LOAD);
const setLoadingFavorites = createAction(FAVORITES_LOADING_SET);
const setFavorites = createAction(FAVORITES_SET);
const searchFavorites = createAction(FAVORITES_SEARCH);

export default {
  types: {
    FAVORITE_ID_ADD,
    FAVORITE_ID_REMOVE,
    FAVORITES_LOAD,
    FAVORITES_LOADING_SET,
    FAVORITES_SET,
    FAVORITES_SEARCH,
  },
  creators: {
    addFavoriteId,
    removeFavoriteId,
    loadFavorites,
    setLoadingFavorites,
    setFavorites,
    searchFavorites,
  },
};
