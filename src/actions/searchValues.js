import { createAction } from 'redux-actions';

const SEARCH_TRENDING = 'SEARCH_TRENDING';
const SEARCH_SPECIFIED_GIFS = 'SEARCH_SPECIFIED_GIFS';
const SEARCH_FAVORITE_GIFS = 'SEARCH_FAVORITE_GIFS';
const SEARCH_UPDATE_VALUE = "SEARCH_UPDATE_VALUE";

const searchedTrendingGifs = createAction(SEARCH_TRENDING);
const searchedSpecifiedGifs = createAction(SEARCH_SPECIFIED_GIFS);
const searchedFavoriteGifs = createAction(SEARCH_FAVORITE_GIFS);
const updateSearchValue = createAction(SEARCH_UPDATE_VALUE);

export default {
  types: {
    SEARCH_TRENDING,
    SEARCH_SPECIFIED_GIFS,
    SEARCH_FAVORITE_GIFS,
    SEARCH_UPDATE_VALUE,
  },
  creators: {
    searchedTrendingGifs,
    searchedSpecifiedGifs,
    searchedFavoriteGifs,
    updateSearchValue,
  },
};
