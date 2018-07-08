import { createAction } from 'redux-actions';
import {
  SET_FAVORITES,
  GET_FAVORITES,
  ADD_REMOVE_FAVORITE,
  ADD_REMOVE_FAVORITE_HOME,
  ADD_REMOVE_FAVORITE_VIEW,
  LOAD_FAVORITESR,
  ADD_REMOVE_FAVORITE_DETAILS_R,
  FILTER_CHANGE,
  FILTER_CLICK,
} from './types';

export const loadFavoritesR = createAction(LOAD_FAVORITESR);
export const setFavorites = createAction(SET_FAVORITES);
export const getFavoritesR = createAction(GET_FAVORITES);
export const addRemoveFavorite = createAction(ADD_REMOVE_FAVORITE);
export const addRemoveFavoriteHome = createAction(ADD_REMOVE_FAVORITE_HOME);
export const addRemoveFavoriteView = createAction(ADD_REMOVE_FAVORITE_VIEW);
export const addRemoveFavoriteDetails = createAction(
  ADD_REMOVE_FAVORITE_DETAILS_R
);
export const filterChange = createAction(FILTER_CHANGE);
export const filterClick = createAction(FILTER_CLICK);

export default {
  loadFavoritesR,
  setFavorites,
  getFavoritesR,
  addRemoveFavorite,
  addRemoveFavoriteHome,
  addRemoveFavoriteView,
  addRemoveFavoriteDetails,
  filterChange,
  filterClick,
};
