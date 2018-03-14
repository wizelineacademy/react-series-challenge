import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTrendingGifs,
  fetchTrendingGifsSuccess,
  fetchTrendingGifsError,
} from './actions';

const API_KEY_GIPHY = 'FalKCfLXRYrRZUEJD8lkMlgBT8i3AHEO';
const Giphy = {
  getTrending() {
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}&limit=18`;
    return fetch(`http://api.giphy.com/v1/gifs/trending?${query}`, initObject);
  }
}

function* getTrendingGifs() {
  try {
    const response = yield call(Giphy.getTrending);
    switch (response.status) {
      case 200: {
        const gifs = yield response.json();
        yield put(fetchTrendingGifsSuccess(gifs));
        break;
      }
      default:
        yield put(fetchTrendingGifsError('Internal Error'));
    }
  } catch (error) {
    yield put(fetchTrendingGifsError(error.message));
  }
}

/*
 * Watchers
 */
export function* watchers() {
  yield takeLatest(fetchTrendingGifs().type, getTrendingGifs);
}

export default watchers;
