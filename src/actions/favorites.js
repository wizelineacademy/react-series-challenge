const FAVORITES_UPDATE = 'FAVORITES_UPDATE'
const FAVORITES_LOAD = 'FAVORITES_LOAD';
const FAVORITES_SAVE = 'FAVORITES_SAVE';
const FAVORITES_SEARCH = 'FAVORITES_SEARCH';
const IS_FAV_UPDATE =  'IS_FAV_UPDATE';
const FAVORITES_TOGGLE_REQ = 'FAVORITES_TOGGLE_REQ'
const FAVORITES_SEARCH_REQ = 'FAVORITES_SEARCH_REQ';

const updateIsFav = () => ({
  type: IS_FAV_UPDATE,
});

const searchFavorites = data => ({
  type: FAVORITES_SEARCH,
  payload: data
})

const updateFavorites = data => ({
  type: FAVORITES_UPDATE,
  payload: data
})

const searchFavoritesReq = data => ({
  type: FAVORITES_SEARCH_REQ,
  payload: data
})
const toggleFavoritesReq = data => ({
  type: FAVORITES_TOGGLE_REQ,
  payload: data
})

const loadFavorites = data => ({
  type: FAVORITES_LOAD,
  payload: data
});
const saveFavoritess = data => ({
  type: FAVORITES_SAVE,
  payload: data
});


export default {
  types: {
    FAVORITES_UPDATE,
    FAVORITES_LOAD,
    FAVORITES_SAVE,
    FAVORITES_TOGGLE_REQ,
    FAVORITES_SEARCH,
    FAVORITES_SEARCH_REQ,
    IS_FAV_UPDATE
  },
  creators: {
    updateFavorites,
    searchFavorites,
    toggleFavoritesReq,
    searchFavoritesReq,
    loadFavorites,
    saveFavoritess,
    updateIsFav
  },
};
