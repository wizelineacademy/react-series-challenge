import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_TRENDING_REQUEST, loadTrendingSuccess } from '../actions/trending';
import { fetchTrending } from '../api';

export function* fetchTrendingSaga() {
  const response = yield call(fetchTrending);
  yield put(loadTrendingSuccess(response));
}


export function* watchFetchTrendingSaga() {
  yield takeLatest(LOAD_TRENDING_REQUEST, fetchTrendingSaga);
}
