import { createAction } from 'redux-actions';

const REQUEST_API_DATA  = 'REQUEST_API_DATA';
const SEARCH_TRENDING = 'SEARCH_TRENDING';
const GET_TRENDING = 'GET_TRENDING';
const SEARCH_SPECIFIED_GIFS = 'SEARCH_SPECIFIED_GIFS';
const SEARCH_FAVORITE_GIFS = 'SEARCH_FAVORITE_GIFS';
const SEARCH_UPDATE_VALUE = "SEARCH_UPDATE_VALUE";

const requestApiData = (payload = {}) => ({ type: REQUEST_API_DATA, payload });
const getTrendingGifs = createAction(GET_TRENDING);
const searchedTrendingGifs = createAction(SEARCH_TRENDING);
const searchedSpecifiedGifs = createAction(SEARCH_SPECIFIED_GIFS);
const searchedFavoriteGifs = createAction(SEARCH_FAVORITE_GIFS);
const updateSearchValue = createAction(SEARCH_UPDATE_VALUE);

export default {
  types: {
    REQUEST_API_DATA,
    SEARCH_TRENDING,
    SEARCH_SPECIFIED_GIFS,
    SEARCH_FAVORITE_GIFS,
    SEARCH_UPDATE_VALUE,
    GET_TRENDING,
  },
  creators: {
    searchedTrendingGifs,
    searchedSpecifiedGifs,
    searchedFavoriteGifs,
    updateSearchValue,
    getTrendingGifs,
    requestApiData,
  },
};
