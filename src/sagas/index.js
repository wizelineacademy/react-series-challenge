import { takeLatest, call, put } from 'redux-saga/effects';
import actions from '../actions';
import axios from 'axios';
import constants from "../constants";

const { API_KEY, TRENDING_API_URL } = constants;

const { GET_TRENDING } = actions.types;

const { trendingGifsFetched } = actions.creators;

const fetchGifs = (url) => {
  return axios.get(url, {params: {api_key: API_KEY}})
};

function* trendingGifsFetcher() {
  try {
    const { data } = yield call(fetchGifs, TRENDING_API_URL)
    yield put(trendingGifsFetched(data))
  } catch (e) {
    console.warn(e);
  }
}

function* watchTrendingGifsRequest() {
  yield takeLatest(GET_TRENDING, trendingGifsFetcher);
}

function* rootSaga() {
  yield* watchTrendingGifsRequest();
}

export default rootSaga;