import * as types from '../constants/actionTypes';

export const addGifToFavorites = (gif) => ({ type: types.GIF_FAVORITE_ADD, gif, });
export const removeGifToFavorites = (gif) => ({ type: types.GIF_FAVORITE_REMOVE, gif, });
export const updateTextFilter = (searchQuery) => ({ type: types.GIF_UPDATE_TEXT_FILTER, searchQuery, });
