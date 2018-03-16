import { call, takeEvery, put } from 'redux-saga/effects';
import {
  getTrending,
  getSearch
} from '../api';
import {
  getItemsSuccess,
  getItemsError
} from '../actions';
import {
  GET_TRENDING_ITEMS,
  GET_SEARCH_ITEMS
} from '../actions/types';

export function* loadTrendingItems() {
  console.log('[SAGA] loadTrendingItems...');
  try {
    const items = yield call(getTrending);
    yield put(getItemsSuccess({ items }));
  } catch (err) {
    console.log('err', err);
    yield put(getItemsError({ error: true }));
  }
}

export function* loadSearchItems({ payload }) {
  console.log('[SAGA] loadSearchItems...');
  try {
    const items = yield call(getSearch, payload);
    yield put(getItemsSuccess({ items }));
  } catch (err) {
    console.log('err', err);
    yield put(getItemsError({ error: true }));
  }
}

export default function* itemsSaga() {
  yield takeEvery(GET_TRENDING_ITEMS, loadTrendingItems);
  yield takeEvery(GET_SEARCH_ITEMS, loadSearchItems);
}
