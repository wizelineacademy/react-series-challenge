export const LOAD_TRENDING_REQUEST = 'LOAD_TRENDING_REQUEST';
export const LOAD_TRENDING_SUCCESS = 'LOAD_TRENDING_SUCCESS';
export const LOAD_TRENDING_FAIL = 'LOAD_TRENDING_FAIL';

export const loadTrendingRequest = () => ({
  type: LOAD_TRENDING_REQUEST
});

export const loadTrendingSuccess = (response) => ({
  type: LOAD_TRENDING_SUCCESS,
  payload: response
});
