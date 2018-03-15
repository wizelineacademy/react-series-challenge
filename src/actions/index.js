import { createAction } from 'redux-actions';
import {
  GET_TRENDING_ITEMS,
  GET_SEARCH_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './types';

const getTrendingItems = createAction(GET_TRENDING_ITEMS);
const getSearchItems = createAction(GET_SEARCH_ITEMS);

const getItemsSuccess = createAction(GET_ITEMS_SUCCESS);
const getItemsError = createAction(GET_ITEMS_ERROR);

const addFavorite = createAction(ADD_FAVORITE);
const removeFavorite = createAction(REMOVE_FAVORITE);

export {
  getTrendingItems,
  getSearchItems,
  getItemsSuccess,
  getItemsError,
  addFavorite,
  removeFavorite
}
