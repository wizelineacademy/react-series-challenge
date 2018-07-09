import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import trendingGifs from '../actions/trendingGifs';

const GIPHY_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_URL = process.env.REACT_APP_GIPHY_API_URL;
const API_RESOURCE = '/v1/gifs/trending';

const {
  TRENDING_FETCH,
} = trendingGifs.types;

const {
  getTrending,
} = trendingGifs.creators;

const loadGifsFromEndpoint = () => (
  axios.get(`${API_URL}${API_RESOURCE}`, {
    params: {
      api_key: GIPHY_KEY,
      limit: 5,
      rating: 'G',
    },
  })
);

function* loadTredingGifs() {
  const response = yield call(loadGifsFromEndpoint);
  yield put(getTrending({
    payload: { gifs: response.data.data },
  }));
}

export default function* () {
  yield takeEvery(TRENDING_FETCH, loadTredingGifs);
}
