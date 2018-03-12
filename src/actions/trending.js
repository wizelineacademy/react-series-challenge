const TRENDING_REQUEST = 'TRENDING_REQUEST';
const TRENDING_START = 'TRENDING_START';
const TRENDING_SUCCESS = 'TRENDING_SUCCESS';
const TRENDING_FAIL = 'TRENDING_FAIL';

const trendingRequest = data => ({
  type: TRENDING_REQUEST,
  payload: data
});

const trendingStart = () => ({
  type: TRENDING_START,
});

const trendingSuccess = data => ({
  type: TRENDING_SUCCESS,
  payload: data,
});

const trendingFail = error => ({
  type: TRENDING_FAIL,
  payload: error,
});

export default {
  types: {
    TRENDING_REQUEST,
    TRENDING_START,
    TRENDING_SUCCESS,
    TRENDING_FAIL,
  },
  creators: {
    trendingRequest,
    trendingStart,
    trendingSuccess,
    trendingFail,
  },
};
