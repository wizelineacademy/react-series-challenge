import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import trendingGifs from '../actions/trendingGifs';
import filterText from '../actions/filterText';

const GIPHY_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_URL = process.env.REACT_APP_GIPHY_API_URL;
const API_TRENDING_GIFS = '/v1/gifs/trending';
const API_SEARCH_GIFS = '/v1/gifs/search';

const {
  TRENDING_FETCH,
  TRENDING_SEARCH,
} = trendingGifs.types;

const {
  getTrending,
} = trendingGifs.creators;

const {
  updateFilterTrendingText,
} = filterText.creators;

const loadTrendingGifsFromEndpoint = () => (
  axios.get(`${API_URL}${API_TRENDING_GIFS}`, {
    params: {
      api_key: GIPHY_KEY,
      limit: 5,
      rating: 'G',
    },
  })
);

function* loadTredingGifs() {
  yield put(updateFilterTrendingText({ payload: { text: '' } }));
  const response = yield call(loadTrendingGifsFromEndpoint);
  yield put(getTrending({
    payload: { gifs: response.data.data },
  }));
}

const searchGifsFromEndpoint = text => (
  axios.get(`${API_URL}${API_SEARCH_GIFS}`, {
    params: {
      api_key: GIPHY_KEY,
      q: text,
      offset: 0,
      limit: 5,
      rating: 'G',
      lang: 'en',
    },
  })
);

function* searchTredingGifs(action) {
  const { payload: { text } } = action;
  yield put(updateFilterTrendingText({ payload: { text } }));
  const response = yield call(searchGifsFromEndpoint, text);
  yield put(getTrending({
    payload: { gifs: response.data.data },
  }));
}

export default [
  takeEvery(TRENDING_FETCH, loadTredingGifs),
  takeEvery(TRENDING_SEARCH, searchTredingGifs),
];
