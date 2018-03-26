const GET_TRENDING_REQUESTED = 'GET_TRENDING_REQUESTED';
const GET_TRENDING_COMPLETED = 'GET_TRENDING_COMPLETED';
const GET_TRENDING_FAILED = 'GET_TRENDING_FAILED';

const getTrendingRequested = () => ({
  type: GET_TRENDING_REQUESTED,
});

const getTrendingCompleted = trending => ({
  type: GET_TRENDING_COMPLETED,
  trending,
});

const getTrendingFailed = error => ({
  type: GET_TRENDING_FAILED,
  error,
});

export default {
  types: {
    GET_TRENDING_REQUESTED,
    GET_TRENDING_COMPLETED,
    GET_TRENDING_FAILED,
  },
  creators: {
    getTrendingRequested,
    getTrendingCompleted,
    getTrendingFailed,
  },
};
