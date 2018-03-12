import { all } from 'redux-saga/effects';
import trendingSaga from './trending'
import searchSaga from './search'

export default function* rootSaga() {
  console.log('redux saga setup ok');
  yield all([
    //add your sagas here:
    trendingSaga(),
    searchSaga()
  ]);
};
