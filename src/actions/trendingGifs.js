const GET_TRENDING_GIFS_REQUESTED = 'GET_TRENDING_GIFS_REQUESTED';
const GET_TRENDING_GIFS_COMPLETED = 'GET_TRENDING_GIFS_COMPLETED';
const GET_TRENDING_GIFS_FAILED = 'GET_TRENDING_GIFS_FAILED';

const getTrendingGifsRequested = () => ({
  type: GET_TRENDING_GIFS_REQUESTED,
});

const getTrendingGifsCompleted = prices => ({
  type: GET_TRENDING_GIFS_COMPLETED,
  prices,
});

const getTrendingGifsFailed = error => ({
  type: GET_TRENDING_GIFS_FAILED,
  error,
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