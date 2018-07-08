import { all } from 'redux-saga/effects';
import homeSagas from './home';
// import favoritesSagas from './favorites_sagas';

export default function* rootSaga() {
  console.log('sagas setup ok');
  yield all([homeSagas()]);
}
