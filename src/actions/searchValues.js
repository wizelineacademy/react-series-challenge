import { createAction } from 'redux-actions';

const REQUEST_API_DATA  = 'REQUEST_API_DATA';
const GET_TRENDING = 'GET_TRENDING';
const SEARCH_SPECIFIED_GIFS = 'SEARCH_SPECIFIED_GIFS';
const ADD_REMOVE_GIF = 'ADD_REMOVE_GIF';
const SEARCH_UPDATE_VALUE = "SEARCH_UPDATE_VALUE";
const REQUEST_API_DATA_SEARCHED = "REQUEST_API_DATA_SEARCHED";

const requestApiData = (payload = {}) => ({ type: REQUEST_API_DATA, payload });
const requestApiDataSearched = (payload = {}) => ({ type: REQUEST_API_DATA_SEARCHED, payload });
const getTrendingGifs = createAction(GET_TRENDING);
const searchedSpecifiedGifs = createAction(SEARCH_SPECIFIED_GIFS);
const addRemoveGifFavorites = createAction(ADD_REMOVE_GIF);
const updateSearchValue = createAction(SEARCH_UPDATE_VALUE);

export default {
  types: {
    REQUEST_API_DATA,
    SEARCH_SPECIFIED_GIFS,
    ADD_REMOVE_GIF,
    SEARCH_UPDATE_VALUE,
    GET_TRENDING,
    REQUEST_API_DATA_SEARCHED,
  },
  creators: {
    searchedSpecifiedGifs,
    addRemoveGifFavorites,
    updateSearchValue,
    getTrendingGifs,
    requestApiData,
    requestApiDataSearched,
  },
};
