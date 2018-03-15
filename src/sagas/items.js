import { call, takeEvery, put } from 'redux-saga/effects';
import { getTrending } from '../api';
import {
  getItemsSuccess,
  getItemsError
} from '../actions';
import {
  GET_TRENDING_ITEMS
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

export default function* itemsSaga() {
  yield takeEvery(GET_TRENDING_ITEMS, loadTrendingItems);
}
