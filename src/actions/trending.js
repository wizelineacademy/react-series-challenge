const LOADING_TRENDING = 'LOADING_TRENDING';
const GET_TRENDING = 'GET_TRENDING';
const SET_TRENDING_ERROR = 'SET_TRENDING_ERROR';

const loadingTrending = () => ({ type: LOADING_TRENDING });
const loadTrending = payload => ({ type: GET_TRENDING, payload });
const setError = error => ({ type: SET_TRENDING_ERROR, payload: error });

export default {
  types: { LOADING_TRENDING, GET_TRENDING, SET_TRENDING_ERROR },
  creators: { loadingTrending, loadTrending, setError },
};
