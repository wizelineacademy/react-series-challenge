import * as types from '../constants/actionTypes';

export const searchGifsFavorites = (payload) => ({ type: types.GIFS_SEARCH_FAVORITES, payload });
export const addGifToFavorites = (gif) => ({ type: types.GIF_FAVORITE_ADD, gif, });
export const removeGifToFavorites = (gif) => ({ type: types.GIF_FAVORITE_REMOVE, gif, });

