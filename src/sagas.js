import { fork } from 'redux-saga/effects';
import homeSagas from './containers/Home/sagas';
import favoritesSagas from './containers/Favorites/sagas';

function* run() {
  yield fork(homeSagas.run);
  yield fork(favoritesSagas.run);
}

export default { run };
