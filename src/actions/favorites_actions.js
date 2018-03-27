import { createAction } from 'redux-actions';
import {
  GET_FAVORITES_REQUEST,
  LOAD_FAVORITES,
  GET_FAVORITES_COMPLETE,
  GET_FAVORITES_ERROR,
  ADD_REMOVE_FAVORITES,
  GET_NEXT_FAVORITES_PAGE,
  GET_PREV_FAVORITES_PAGE,
  // FILTER_FAVORITES
} from './types'

const getFavorites = createAction(GET_FAVORITES_REQUEST);
const loadFavorites = createAction(LOAD_FAVORITES);
const completeFavorites = createAction(GET_FAVORITES_COMPLETE);
const errorFavorites = createAction(GET_FAVORITES_ERROR);
const addRemoveFavorites = createAction(ADD_REMOVE_FAVORITES);
const getNextFavoritesPage = createAction(GET_NEXT_FAVORITES_PAGE);
const getPrevFavoritesPage = createAction(GET_PREV_FAVORITES_PAGE);
// const filterFavorites = createAction(FILTER_FAVORITES);

export default {
  getFavorites,
  loadFavorites,
  completeFavorites,
  errorFavorites,
  addRemoveFavorites,
  getNextFavoritesPage,
  getPrevFavoritesPage
  // filterFavorites
}