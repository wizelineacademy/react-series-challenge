import { all } from 'redux-saga/effects';
import trendingGifsSaga from './trendingGifs';

export default function* rootSaga() {
  yield all([
    trendingGifsSaga(),
  ]);
};