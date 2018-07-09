import { call, put, takeLatest } from 'redux-saga/effects';

import gifActions from '../actions/gifActions';

const {
  SEARCH_GIFS_GET,
  TRENDING_GIFS_GET
} = gifActions.types;

const {
  failedSearchGifs,
  failedTrendingGifs,
  receivedSearchGifs,
  receivedTrendingGifs
} = gifActions.creators;

const api_base_url = 'https://api.giphy.com/v1/gifs';

const fetchGifs = (url) => {
  return fetch(url)
    .then((response) => response.json());
};

function* fetchGifsSideEffect({ payload }) {
  try {
    const response = yield call(
      fetchGifs,
      `${api_base_url}/search?q=${payload}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=24`
    );

    yield put(receivedSearchGifs({ gifs: response.data }));
  } catch (e) {
    yield put(failedSearchGifs({ error: e }))
  }
}

function* rootSaga() {
  yield takeLatest(SEARCH_GIFS_GET, fetchGifsSideEffect);
}

export default rootSaga;
