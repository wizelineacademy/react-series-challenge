import { all } from 'redux-saga/effects';
import homeSagas from './home_sagas';
import favoritesSagas from './favorites_sagas';
import detailsSagas from './details_sagas';

export default function* rootSaga() {
  console.log('sagas setup ok');
  yield all([
    homeSagas(),
    favoritesSagas(),
    detailsSagas()
  ]);
};