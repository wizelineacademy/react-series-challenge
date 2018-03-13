const FAVORITES_UPDATE = 'FAVORITES_UPDATE'
const FAVORITES_LOAD = 'FAVORITES_LOAD';
const FAVORITES_SAVE = 'FAVORITES_SAVE';
const FAVORITES_SEARCH = 'FAVORITES_SEARCH';
const FAVORITES_ADD_REQ = 'FAVORITES_ADD_REQ'
const FAVORITES_REMOVE_REQ = 'FAVORITES_REMOVE_REQ'
const FAVORITES_SEARCH_REQ = 'FAVORITES_SEARCH_REQ';

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
const addFavoritesReq = data => ({
  type: FAVORITES_ADD_REQ,
  payload: data
})

const removeFavoritesReq = data => ({
  type: FAVORITES_REMOVE_REQ,
  payload: data
})

const loadFavoritess = data => ({
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
    FAVORITES_SEARCH,
    FAVORITES_ADD_REQ,
    FAVORITES_REMOVE_REQ,
    FAVORITES_SEARCH_REQ
  },
  creators: {
    updateFavorites,
    searchFavorites,
    addFavoritesReq,
    removeFavoritesReq,
    searchFavoritesReq,
    loadFavoritess,
    saveFavoritess,

  },
};
