const TRENDING_REQUEST = 'trending_request';
const TRENDING_FAILED = 'trending_failed';
const TRENDING_COMPLETED = 'trending_completed'

const getTrendingRequested = () => ({
    type: TRENDING_REQUEST,
});

const getTrendingCompleted = gifs => ({
    type: TRENDING_COMPLETED,
    gifs,
});

const getTrendingFailed = error => ({
    type: TRENDING_FAILED,
    error,
});


export default {
  types: {
    TRENDING_REQUEST,
    TRENDING_FAILED,
    TRENDING_COMPLETED,
  },
  creators: {
    getTrendingRequested,
    getTrendingCompleted,
    getTrendingFailed
  }
  
};