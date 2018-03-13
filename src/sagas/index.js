import { all } from 'redux-saga/effects';
import { watchFetchTrendingSaga } from './trending';
import { watchSearchGifsSaga } from './search';
import { watchStoreFavoriteSaga } from './favorites';

export default function* rootSaga() {
  yield all([
    watchFetchTrendingSaga(),
    watchSearchGifsSaga(),
    watchStoreFavoriteSaga()
  ]);
}
