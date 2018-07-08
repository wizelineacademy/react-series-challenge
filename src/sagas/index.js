import { takeEvery, call, put, all } from 'redux-saga/effects';
import actions from '../actions';
import axios from 'axios';
import constants from "../constants";

const { API_KEY, TRENDING_API_URL, SEARCH_API_URL } = constants;

const { GET_TRENDING, GET_SEARCH } = actions.types;

const { trendingGifsFetched, searchGifsFetched } = actions.creators;

const fetchGifs = (url, params={}) => {
  return axios.get(url, {params: {api_key: API_KEY, ...params}})
};

function* trendingGifsFetcher() {
  try {
    const { data } = yield call(fetchGifs, TRENDING_API_URL)
    yield put(trendingGifsFetched(data))
  } catch (e) {
    console.warn(e);
  }
}

function* searchGifsFetcher(action) {
  try {
    const { data } = yield call(
      fetchGifs, 
      SEARCH_API_URL, 
      {q: action.payload.q}
    )
    yield put(searchGifsFetched(data.data, action.payload.q))
  } catch (e) {
    console.warn(e);
  }
}

function* watchTrendingGifsRequest() {
  yield takeEvery(GET_TRENDING, trendingGifsFetcher);
}

function* watchSearchRequests() {
  yield takeEvery(GET_SEARCH, searchGifsFetcher);
}

function* rootSaga() {
  yield all([watchTrendingGifsRequest(), watchSearchRequests()]);
}

export default rootSaga;