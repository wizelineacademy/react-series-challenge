import { createAction } from 'redux-actions';
const FILTER_FAVORITES    = 'FILTER_FAVORITES';

const GET_TRENDING_GIFS_REQUESTED = 'GET_TRENDING_GIFS_REQUESTED';
const GET_TRENDING_GIFS_COMPLETED = 'GET_TRENDING_GIFS_COMPLETED';
const GET_TRENDING_GIFS_FAILED    = 'GET_TRENDING_GIFS_FAILED';

const GET_FAVORITE_GIFS_REQUESTED = 'GET_FAVORITE_GIFS_REQUESTED';
const GET_FAVORITE_GIFS_COMPLETED = 'GET_FAVORITE_GIFS_COMPLETED';
const GET_FAVORITE_GIFS_FAILED    = 'GET_FAVORITE_GIFS_FAILED';

const GET_GIF_REQUESTED = 'GET_GIF_REQUESTED';
const GET_GIF_COMPLETED = 'GET_GIF_COMPLETED';
const GET_GIF_FAILED    = 'GET_GIF_FAILED';

const SEARCH_GIFS_REQUESTED = 'SEARCH_GIFS_REQUESTED';
const SEARCH_GIFS_COMPLETED = 'SEARCH_GIFS_COMPLETED';
const SEARCH_GIFS_FAILED    = 'SEARCH_GIFS_FAILED';

const filterFavorites = createAction(FILTER_FAVORITES);

const getTrendingGifsRequested = createAction(GET_TRENDING_GIFS_REQUESTED);
const getTrendingGifsCompleted = createAction(GET_TRENDING_GIFS_COMPLETED);
const getTrendingGifsFailed    = createAction(GET_TRENDING_GIFS_FAILED);

const getFavoriteGifsRequested = createAction(GET_FAVORITE_GIFS_REQUESTED);
const getFavoriteGifsCompleted = createAction(GET_FAVORITE_GIFS_COMPLETED);
const getFavoriteGifsFailed    = createAction(GET_FAVORITE_GIFS_FAILED);

const getGifRequested = createAction(GET_GIF_REQUESTED);
const getGifCompleted = createAction(GET_GIF_COMPLETED);
const getGifFailed    = createAction(GET_GIF_FAILED);

const searchGifsRequested = createAction(SEARCH_GIFS_REQUESTED);
const searchGifsCompleted = createAction(SEARCH_GIFS_COMPLETED);
const searchGifsFailed    = createAction(SEARCH_GIFS_FAILED);

export default {
  types: {
    GET_TRENDING_GIFS_REQUESTED,
    GET_TRENDING_GIFS_COMPLETED,
    GET_TRENDING_GIFS_FAILED,
    SEARCH_GIFS_REQUESTED,
    SEARCH_GIFS_COMPLETED,
    SEARCH_GIFS_FAILED,
    GET_FAVORITE_GIFS_REQUESTED,
    GET_FAVORITE_GIFS_COMPLETED,
    GET_FAVORITE_GIFS_FAILED,
    GET_GIF_REQUESTED,
    GET_GIF_COMPLETED,
    GET_GIF_FAILED,
    FILTER_FAVORITES
  },
  creators: {
    getTrendingGifsRequested,
    getTrendingGifsCompleted,
    getTrendingGifsFailed,
    searchGifsRequested,
    searchGifsCompleted,
    searchGifsFailed,
    getFavoriteGifsRequested,
    getFavoriteGifsCompleted,
    getFavoriteGifsFailed,
    getGifRequested,
    getGifCompleted,
    getGifFailed,
    filterFavorites,
  },
};
