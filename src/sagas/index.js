import { all } from 'redux-saga/effects';
import { watchFetchTrendingGifs } from './giphyApi';

export default function* rootSaga() {
  yield all([
    watchFetchTrendingGifs(),
  ])
}