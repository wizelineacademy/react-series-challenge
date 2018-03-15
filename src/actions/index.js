import { createAction } from 'redux-actions';
import {
  GET_TRENDING_ITEMS,
  GET_FAVORITE_ITEMS,
  GET_SEARCH_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  UPDATE_QUERY
} from './types';

const getTrendingItems = createAction(GET_TRENDING_ITEMS);
const getFavoriteItems = createAction(GET_FAVORITE_ITEMS);
const getSearchItems = createAction(GET_SEARCH_ITEMS);

const getItemsSuccess = createAction(GET_ITEMS_SUCCESS);
const getItemsError = createAction(GET_ITEMS_ERROR);

const addFavorite = createAction(ADD_FAVORITE);
const removeFavorite = createAction(REMOVE_FAVORITE);

const updateQuery = createAction(UPDATE_QUERY);

export {
  getTrendingItems,
  getFavoriteItems,
  getSearchItems,
  getItemsSuccess,
  getItemsError,
  addFavorite,
  removeFavorite,
  updateQuery
}
