import { all } from 'redux-saga/effects';
import homeSagas from './home';
import favoritesSagas from './favorites';

export default function* rootSaga() {
  console.log('everythings ok');
  yield all([homeSagas(), favoritesSagas()]);
}
