import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';
import searchSaga from './searchSaga';

export default function* rootSaga() {
  yield all([
    trendingSaga(),
    searchSaga()
  ]);
};
