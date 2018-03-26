import { all } from 'redux-saga/effects';
import trendingSaga from './trending';

export function* greetingsSaga() {
  console.log('Hi there!');
}

export default function* rootSaga() {
  console.log('redux saga setup ok');
  yield all([
    greetingsSaga(),
    trendingSaga(),
  ]);
};