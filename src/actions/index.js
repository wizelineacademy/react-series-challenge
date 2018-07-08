export const GET_TRENDING_GIF  = 'GET_TRENDING_GIF';
export const SEARCH_GIF = 'SEARCH_GIF';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const GET_TRENDING_GIF_FAILED = 'GET_TRENDING_GIF_FAILED';
export const SEARCH_GIF_FAILED = 'SEARCH_GIF_FAILED';
export const SEARCH_EVENT = 'SEARCH_EVENT';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const GET_FAVORITES = 'GET_FAVORITES';

function action(type, payload = {}) {
  return {type, ...payload}
}

export const receiveTrendingGifs = products => action(GET_TRENDING_GIF, {products});
export const searchGif = result => action(SEARCH_GIF, {result});
export const searchResult = result => action(SEARCH_RESULT, {result});
export const addFavorites = add => action(ADD_FAVORITES, {add});
export const getFavorites = get => action(GET_FAVORITES, {get});