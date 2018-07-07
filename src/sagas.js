import { fork } from 'redux-saga/effects';
import homeSagas from './containers/Home/sagas';

function* run() {
  yield fork(homeSagas.run);
}

export default { run };
