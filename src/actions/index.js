export const GET_TRENDING_GIF = 'GET_TRENDING_GIF';
export const SEARCH_GIF = 'SEARCH_GIF';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const GET_TRENDING_GIF_FAILED = 'GET_TRENDING_GIF_FAILED';
export const SEARCH_GIF_FAILED = 'SEARCH_GIF_FAILED';
export const SEARCH_EVENT = 'SEARCH_EVENT';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const GET_FAVORITES = 'GET_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';
export const FILTER_FAVORITES = 'FILTER_FAVORITES';

function action(type, payload = {}) {
  return { type, ...payload }
}

export const receiveTrendingGifs = products => action(GET_TRENDING_GIF, { products });
export const searchGif = result => action(SEARCH_GIF, { result });
export const searchResult = result => action(SEARCH_RESULT, { result });
export const add = add => action(ADD, { add });
export const addFavorites = add => action(ADD_FAVORITES, { add });
export const getFavorites = gifs => action(GET_FAVORITES, { gifs });
export const deleteFavorites = id => action(DELETE_FAVORITES, { id });
export const deleteFav = id => action(DELETE, { id });
export const filterFavorites = search => action(FILTER_FAVORITES, { search });
