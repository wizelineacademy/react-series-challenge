

const TRENDING_REQUEST = 'search_request';
const TRENDING_FAILED = 'search_failed';
const TRENDING_COMPLETED = 'search_completed'

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
    getTrendingFailed,
  },
};