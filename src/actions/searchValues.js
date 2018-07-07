import { createAction } from 'redux-actions';

const SEARCH_TRENDING = 'SEARCH_TRENDING';
const SEARCH_SPECIFIED_GIFS = 'SEARCH_SPECIFIED_GIFS';
const SEARCH_FAVORITE_GIFS = 'SEARCH_FAVORITE_GIFS';

const searchedTrendingGifs = createAction(SEARCH_TRENDING);
const searchedSpecifiedGifs = createAction(SEARCH_SPECIFIED_GIFS);
const searchedFavoriteGifs = createAction(SEARCH_FAVORITE_GIFS);

export default {
  types: {
    SEARCH_TRENDING,
    SEARCH_SPECIFIED_GIFS,
    SEARCH_FAVORITE_GIFS,
  },
  creators: {
    searchedTrendingGifs,
    searchedSpecifiedGifs,
    searchedFavoriteGifs,
  },
};
