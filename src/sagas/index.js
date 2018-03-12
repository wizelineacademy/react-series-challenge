import { all, fork } from 'redux-saga/effects';
import searchSagas from './searchSagas';
import trendingSagas from './trendingSagas';

const sagas = [
  searchSagas,
  trendingSagas
];

export default function* root () {
  yield all([ sagas.map(saga => fork(saga)) ]); 
}