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

const SEARCH_DEBOUNCE_MS = 1000;

function* searchGifsSaga() {
  // if the path is favorites, dont handle the search as it'll be handled
  // at the component level to filter redux state
  if (history.location.pathname.includes('favorites')) {
    yield cancel();
  }

  // debounce handling the search
  yield call(delay, SEARCH_DEBOUNCE_MS);

  const query = yield select(getQuery);

  // TODO: Maybe cancel search (this saga) if query is empty?

  yield put(searchGifsRequest());

  const response = yield call(searchGifs, query);
  yield put(searchGifsSuccess(response));

  yield call(history.push, `/search/${query}`);
}

export function* watchSearchGifsSaga() {
  yield takeLatest(SEARCH_GIFS_CHANGE_QUERY, searchGifsSaga);
}
