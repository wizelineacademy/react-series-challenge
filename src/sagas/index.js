import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('sagas setup ok');
  yield all([
    // Sagas go here
  ]);
};