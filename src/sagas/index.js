import { all } from 'redux-saga/effects';
import itemsSaga from './items';

export default function* sagas() {
  console.log('redux saga setup ok');
  yield all([
    itemsSaga()
  ]);
};
