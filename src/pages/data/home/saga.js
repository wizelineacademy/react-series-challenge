import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTrendingGifs,
  fetchTrendingGifsSuccess,
  fetchTrendingGifsError,
  searchGifs,
  searchGifsSuccess,
  searchGifsError,
} from './actions';

const API_KEY_GIPHY = 'FalKCfLXRYrRZUEJD8lkMlgBT8i3AHEO';
const Giphy = {
  getTrending() {
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}&limit=36`;
    return fetch(`http://api.giphy.com/v1/gifs/trending?${query}`, initObject);
  },
  getGifsSearch(text) {
    console.log(text);
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}&q=${text}&limit=36`;
    return fetch(`http://api.giphy.com/v1/gifs/search?${query}`, initObject);
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

function* getGifsByFreeText(params) {
  try {
    const response = yield call(Giphy.getGifsSearch, params.payload.text);
    switch (response.status) {
      case 200: {
        const gifs = yield response.json();
        yield put(searchGifsSuccess(gifs));
        break;
      }
      default:
        yield put(searchGifsError('Internal Error'));
    }
  } catch (error) {
    yield put(searchGifsError(error.message));
  }
}

/*
 * Watchers
 */
export function* watchers() {
  yield takeLatest(fetchTrendingGifs().type, getTrendingGifs);
  yield takeLatest(searchGifs().type, getGifsByFreeText);
}

export default watchers;
