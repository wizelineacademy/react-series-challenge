import { createAction } from 'redux-actions';

const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const SEARCH_FAVORITE = 'SEARCH_FAVORITE';
const IS_SEARCHING_FAVORITE = 'IS_SEARCHING';

const addFavorite = createAction(ADD_FAVORITE);
const deleteFavorite = createAction(DELETE_FAVORITE);
const searchFavorite = createAction(SEARCH_FAVORITE);
const isSearchingFavorite = createAction(IS_SEARCHING_FAVORITE);

export default {
  types: {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    SEARCH_FAVORITE,
    IS_SEARCHING_FAVORITE,
  },
  creators: {
    addFavorite,
    deleteFavorite,
    searchFavorite,
    isSearchingFavorite
  },
};
