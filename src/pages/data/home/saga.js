import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchTrendingGifs,
  fetchTrendingGifsSuccess,
} from './actions';

function* getTrendingGifs() {
  alert("hola");
  yield put(fetchTrendingGifsSuccess());
}

/*
 * Watchers
 */
export function* watchers() {
  yield takeLatest(fetchTrendingGifs().type, getTrendingGifs);
}

export default watchers;
