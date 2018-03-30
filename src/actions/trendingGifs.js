const GET_TRENDING_GIFS_REQUESTED = 'GET_TRENDING_GIFS_REQUESTED';
const GET_TRENDING_GIFS_COMPLETED = 'GET_TRENDING_GIFS_COMPLETED';
const GET_TRENDING_GIFS_FAILED = 'GET_TRENDING_GIFS_FAILED';

const getTrendingGifsRequested = () => ({
  type: GET_TRENDING_GIFS_REQUESTED,
});

const getTrendingGifsCompleted = gifs => ({
  type: GET_TRENDING_GIFS_COMPLETED,
  payload: gifs,
});

const getTrendingGifsFailed = error => ({
  type: GET_TRENDING_GIFS_FAILED,
  payload: error,
});

export default {
  types: {
    GET_TRENDING_GIFS_REQUESTED,
    GET_TRENDING_GIFS_COMPLETED,
    GET_TRENDING_GIFS_FAILED,
  },
  creators: {
    getTrendingGifsRequested,
    getTrendingGifsCompleted,
    getTrendingGifsFailed,
  },
};