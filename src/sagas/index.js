import { all } from 'redux-saga/effects';
import trendingGifsSaga from './trendingGifsSaga';

export default function* rootSaga() {
  yield all([
    trendingGifsSaga()
  ]);
};