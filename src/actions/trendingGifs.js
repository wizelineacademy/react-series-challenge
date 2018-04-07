const GET_TRENDING_GIFS_REQUESTED = 'GET_TRENDING_GIFS_REQUESTED';
const GET_TRENDING_GIFS_COMPLETED = 'GET_TRENDING_GIFS_COMPLETED';
const GET_TRENDING_GIFS_FAILED = 'GET_TRENDING_GIFS_FAILED';

const GET_GIF_REQUESTED = 'GET_GIF_REQUESTED';
const GET_GIF_COMPLETED = 'GET_GIF_COMPLETED';
const GET_GIF_FAILED = 'GET_GIF_FAILED';

const ADDED_TO_FAVORITES_GIF = 'ADDED_TO_FAVORITES_GIF';

const getTrendingGifsRequested = (pagination) => ({
  type: GET_TRENDING_GIFS_REQUESTED,
  payload: pagination
});

const getTrendingGifsCompleted = gifs => ({
  type: GET_TRENDING_GIFS_COMPLETED,
  payload: gifs,
});

const getTrendingGifsFailed = error => ({
  type: GET_TRENDING_GIFS_FAILED,
  error,
});

const getGifRequested = (gifID) => ({
  type: GET_GIF_REQUESTED,
  payload: gifID
});

const getGifCompleted = gif => ({
  type: GET_GIF_COMPLETED,
  payload: gif,
});

const getGifFailed = error => ({
  type: GET_GIF_FAILED,
  error,
});

const added2Favorites = gifID => ({
  type: ADDED_TO_FAVORITES_GIF,
  payload: gifID,
});

export default {
  types: {
    GET_TRENDING_GIFS_REQUESTED,
    GET_TRENDING_GIFS_COMPLETED,
    GET_TRENDING_GIFS_FAILED,

    GET_GIF_REQUESTED,
    GET_GIF_COMPLETED,
    GET_GIF_FAILED,

    ADDED_TO_FAVORITES_GIF,
  },
  creators: {
    getTrendingGifsRequested,
    getTrendingGifsCompleted,
    getTrendingGifsFailed,

    getGifRequested,
    getGifCompleted,
    getGifFailed,

    added2Favorites,
  },
};