import { takeLatest, call, put, select, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  SEARCH_GIFS_CHANGE_QUERY,
  searchGifsRequest,
  searchGifsSuccess
} from '../actions/search';
import { searchGifs } from '../api';
import { getQuery } from '../selectors/search';
import history from '../history';

export const SEARCH_DEBOUNCE_MS = 500;

export function* searchGifsSaga() {
  // if the path is favorites, dont handle the search as it'll be handled
  // at the component level to filter redux state
  if (history.location.pathname.includes('favorites')) {
    yield cancel();
  }

  // debounce handling the search
  yield call(delay, SEARCH_DEBOUNCE_MS);

  const query = yield select(getQuery);

  // cancel this saga if search is empty
  if (query.length === 0) {
    yield call(history.push, `/`);
    yield cancel();
  }

  yield put(searchGifsRequest());

  const response = yield call(searchGifs, query);
  yield put(searchGifsSuccess(response));

  yield call(history.push, `/search/${query}`);
}

export function* watchSearchGifsSaga() {
  yield takeLatest(SEARCH_GIFS_CHANGE_QUERY, searchGifsSaga);
}
