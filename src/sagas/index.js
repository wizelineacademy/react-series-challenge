import { all } from 'redux-saga/effects';
import trendingGifsSaga from './trendingGifsSaga';
import searchingGifsSaga from "./searchingGifsSaga";

export default function* rootSaga() {
  yield all([
    trendingGifsSaga(),
    searchingGifsSaga()
  ]);
};