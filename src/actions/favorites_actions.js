import { createAction } from 'redux-actions';
import {
  // GET_FAVORITES_REQUEST,
  // LOAD_FAVORITES,
  // GET_FAVORITES_COMPLETE,
  // GET_FAVORITES_ERROR,
  // ADD_REMOVE_FAVORITES,
  // GET_NEXT_FAVORITES_PAGE,
  // GET_PREV_FAVORITES_PAGE,
  // CHANGE_FAVORITES_FILTER,
  // FILTER_FAVORITES,
  SET_FAVORITES,
  GET_FAVORITES,
  ADD_REMOVE_FAVORITE,
  ADD_REMOVE_FAVORITE_HOME,
  ADD_REMOVE_FAVORITE_VIEW,
  LOAD_FAVORITESR,
  ADD_REMOVE_FAVORITE_DETAILS_R,
  FILTER_CHANGE,
  FILTER_CLICK
} from './types'

// const getFavorites = createAction(GET_FAVORITES_REQUEST);
// const loadFavorites = createAction(LOAD_FAVORITES);
// const completeFavorites = createAction(GET_FAVORITES_COMPLETE);
// const errorFavorites = createAction(GET_FAVORITES_ERROR);
// const addRemoveFavorites = createAction(ADD_REMOVE_FAVORITES);
// const getNextFavoritesPage = createAction(GET_NEXT_FAVORITES_PAGE);
// const getPrevFavoritesPage = createAction(GET_PREV_FAVORITES_PAGE);
// const changeFavoritesFilter = createAction(CHANGE_FAVORITES_FILTER);
// const filterFavorites = createAction(FILTER_FAVORITES);


// BEGINS: Refactor.

export const loadFavoritesR = createAction(LOAD_FAVORITESR);
export const setFavorites = createAction(SET_FAVORITES);
export const getFavoritesR = createAction(GET_FAVORITES);
export const addRemoveFavorite = createAction(ADD_REMOVE_FAVORITE);
export const addRemoveFavoriteHome = createAction(ADD_REMOVE_FAVORITE_HOME);
export const addRemoveFavoriteView = createAction(ADD_REMOVE_FAVORITE_VIEW);
export const addRemoveFavoriteDetails = createAction(ADD_REMOVE_FAVORITE_DETAILS_R);
export const filterChange = createAction(FILTER_CHANGE);
export const filterClick = createAction(FILTER_CLICK);


export default {
  // getFavorites,
  // loadFavorites,
  // completeFavorites,
  // errorFavorites,
  // addRemoveFavorites,
  // getNextFavoritesPage,
  // getPrevFavoritesPage,
  // changeFavoritesFilter,
  // filterFavorites,
  loadFavoritesR,
  setFavorites,
  getFavoritesR,
  addRemoveFavorite,
  addRemoveFavoriteHome,
  addRemoveFavoriteView,
  addRemoveFavoriteDetails,
  filterChange,
  filterClick
}