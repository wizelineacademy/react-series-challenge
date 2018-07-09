import { call, put, takeLatest } from 'redux-saga/effects';

import trendingGifsActions from '../actions/trendingGifsApi';

const {
  TRENDING_GIFS_GET
} = trendingGifsActions.types;

const {
  failedTrendingGifs,
  receivedTrendingGifs
} = trendingGifsActions.creators;

const api_base_url = 'https://api.giphy.com/v1/gifs';

const fetchGifs = (url) => {
  return fetch(url)
    .then((response) => response.json());
};

function* fetchGifsSideEffect() {
  try {
    const response = yield call(
      fetchGifs,
      `${api_base_url}/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
    );

    yield put(receivedTrendingGifs({ gifs: response.data }));
  } catch (e) {
    yield put(failedTrendingGifs({ error: e }))
  }
}

function* rootSaga() {
  yield takeLatest(TRENDING_GIFS_GET, fetchGifsSideEffect);
}

export default rootSaga;
