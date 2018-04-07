const GET_FAVORITE_GIFS_REQUESTED = 'GET_FAVORITE_GIFS_REQUESTED';
const GET_FAVORITE_GIFS_COMPLETED = 'GET_FAVORITE_GIFS_COMPLETED';
const GET_FAVORITE_GIFS_FAILED = 'GET_FAVORITE_GIFS_FAILED';
const ADD_FAVORITE_GIF_REQUESTED = 'ADD_FAVORITE_GIF_REQUESTED';
const ADD_FAVORITE_GIF_COMPLETED = 'ADD_FAVORITE_GIF_COMPLETED';
const ADD_FAVORITE_GIF_FAILED = 'ADD_FAVORITE_GIF_FAILED';

const getFavoriteGifsRequested = (pagination) => ({
  type: GET_FAVORITE_GIFS_REQUESTED,
  payload: pagination
});

const getFavoriteGifsCompleted = gifs => ({
  type: GET_FAVORITE_GIFS_COMPLETED,
  payload: gifs,
});

const getFavoriteGifsFailed = error => ({
  type: GET_FAVORITE_GIFS_FAILED,
  error,
});


const addFavoriteGifRequested = (gif) => ({
  type: ADD_FAVORITE_GIF_REQUESTED,
  payload: gif
});

const addFavoriteGifCompleted = gif => ({
  type: ADD_FAVORITE_GIF_COMPLETED,
  payload: gif,
});

const addFavoriteGifFailed = error => ({
  type: ADD_FAVORITE_GIF_FAILED,
  error,
});

export default {
  types: {
    GET_FAVORITE_GIFS_REQUESTED,
    GET_FAVORITE_GIFS_COMPLETED,
    GET_FAVORITE_GIFS_FAILED,

    ADD_FAVORITE_GIF_REQUESTED,
    ADD_FAVORITE_GIF_COMPLETED,
    ADD_FAVORITE_GIF_FAILED,
  },
  creators: {
    getFavoriteGifsRequested,
    getFavoriteGifsCompleted,
    getFavoriteGifsFailed,

    addFavoriteGifRequested,
    addFavoriteGifCompleted,
    addFavoriteGifFailed,
  },
};