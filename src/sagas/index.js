import { all, call, put, takeLatest } from 'redux-saga/effects';

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

function* watchSearchGifsRequested({ payload }) {
  try {
    const response = yield call(
      fetchGifs,
      `${api_base_url}/search?q=${payload}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=15`
    );

    yield put(receivedSearchGifs({ gifs: response.data }));
  } catch (e) {
    yield put(failedSearchGifs({ error: e }))
  }
}

function* watchTrendingGifsRequested({ payload }) {
  try {
    const response = yield call(
      fetchGifs,
      `${api_base_url}/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=15`
    );

    yield put(receivedTrendingGifs({ gifs: response.data }));
  } catch (e) {
    yield put(failedTrendingGifs({ error: e }))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(SEARCH_GIFS_GET, watchSearchGifsRequested),
    takeLatest(TRENDING_GIFS_GET, watchTrendingGifsRequested)
  ]);
}

export default rootSaga;
