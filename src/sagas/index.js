import { all } from 'redux-saga/effects';
import trendingGifsSaga from './trendingGifsSaga';
import searchingGifsSaga from "./searchingGifsSaga";
import getDetailGifSaga from './detailGifSaga';

export default function* rootSaga() {
  yield all([
    trendingGifsSaga(),
    searchingGifsSaga(),
    getDetailGifSaga()
  ]);
};