import { call, put, takeLatest } from 'redux-saga/effects';

import TrendingGifsActions from '../actions/trendingGifsApi';

const {
  TRENDING_GIFS_GET,
  TRENDING_GIFS_FAILED,
} = TrendingGifsActions.types;

const {
  fetchedTrendingGifs,
  failedTrendingGifs,
} = TrendingGifsActions.creators;

const API_BASE_URL = 'https://api.giphy.com/v1/gifs';

const fetchGifs = (url) => {
  return fetch(url)
    .then((response) => response);
};

function* rootSaga() {
  try {
    const gifs = yield call(
      fetchGifs,
      `${API_BASE_URL}/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
    );
    yield put(fetchedTrendingGifs({ gifs: gifs.data }));
  } catch (e) {
    yield put(failedTrendingGifs({ error: e }))
  }
}

// function* rootSaga() {
//   yield takeLatest(TRENDING_GIFS_GET, fetchGifs);
// }

export default rootSaga;
