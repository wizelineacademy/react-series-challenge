import { all, call } from 'redux-saga/effects';

import pages from '../../../pages/data/sagas';

const sagas = [
  ...pages,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => saga()));
}
