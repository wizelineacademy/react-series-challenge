import { all } from 'redux-saga/effects';
import trendingSaga from './trending'
import searchSaga from './search'

export default function* rootSaga() {
  yield all([
    //add your sagas here:
    trendingSaga(),
    searchSaga()
  ]);
};
