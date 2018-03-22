import { call, put, takeLatest } from 'redux-saga/effects';
import Giphy from '../giphy';
import {
  fetchTrendingGifs,
  fetchTrendingGifsSuccess,
  fetchTrendingGifsError,
  searchGifs,
  searchGifsSuccess,
  searchGifsError,
} from './actions';

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
