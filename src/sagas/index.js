import { all } from 'redux-saga/effects';
import getTrendingGifsSaga from './home';
import searchGIFAPISaga from './searchGIFAPI';
import handleFavoriteStatusSaga from './favorites';

export default function* rootSaga() {
  yield all([getTrendingGifsSaga(), searchGIFAPISaga(), handleFavoriteStatusSaga()]);
}
