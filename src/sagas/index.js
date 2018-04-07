import { all } from 'redux-saga/effects';
import trendingGifsSaga from './trendingGifs';
import favoriteGifsSaga from './favoriteGifs';

export default function* rootSaga() {
  yield all([
    trendingGifsSaga(),
    favoriteGifsSaga(),
  ]);
};