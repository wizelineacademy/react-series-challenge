import { createAction } from 'redux-actions';

const REQUEST_TRENDING_GIFS = 'REQUEST_TRENDING_GIFS';
const REQUEST_TRENDING_GIFS_SUCCESS = 'REQUEST_TRENDING_GIFS_SUCCESS'
const REQUEST_TRENDING_GIFS_FAIL = 'REQUEST_TRENDING_GIFS_FAIL'

const requestTrendingGifs = createAction(REQUEST_TRENDING_GIFS);
const requestTrendingGifsSuccess = (payload = {}) => ({ type: REQUEST_TRENDING_GIFS_SUCCESS, payload })
const requestTrendingGifsFail = (payload = {}) => ({ type: REQUEST_TRENDING_GIFS_FAIL, payload })

export default {
  types: {
    REQUEST_TRENDING_GIFS,
    REQUEST_TRENDING_GIFS_SUCCESS,
    REQUEST_TRENDING_GIFS_FAIL
  },
  creators: {
    requestTrendingGifs,
    requestTrendingGifsSuccess,
    requestTrendingGifsFail
  },
};
