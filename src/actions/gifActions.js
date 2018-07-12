import * as types from '../constants/actionTypes';

export const fetchedGifsTrending = () => ({ type: types.GIFS_TRENDING_FETCHED });
export const fetchedGifsSearch = (payload) => ({ type: types.GIFS_SEARCH_FETCHED, payload });