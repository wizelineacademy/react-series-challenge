const GET_SINGLE_GIF_REQUESTED = 'GET_SINGLE_GIF_REQUESTED';
const GET_SINGLE_GIF_COMPLETED = 'GET_SINGLE_GIF_COMPLETED';
const GET_SINGLE_GIF_FAILED = 'GET_SINGLE_GIF_FAILED';

const getSingleGifRequested = gifId => ({
  type: GET_SINGLE_GIF_REQUESTED,
  payload: gifId,
});
const getSingleGifCompleted = gif => ({
  type: GET_SINGLE_GIF_COMPLETED,
  payload: gif,
});

const getSingleGifFailed = error => ({
  type: GET_SINGLE_GIF_FAILED,
  payload: error,
});

export default {
  types: {
    GET_SINGLE_GIF_REQUESTED,
    GET_SINGLE_GIF_COMPLETED,
    GET_SINGLE_GIF_FAILED,
  },
  creators: {
    getSingleGifRequested,
    getSingleGifCompleted,
    getSingleGifFailed,
  },
};