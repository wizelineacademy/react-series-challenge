import { all, fork } from 'redux-saga/effects';
import searchSagas from './searchSagas';
import trendingSagas from './trendingSagas';
import favoriteSagas from './favoritesSagas';
import detailsSagas from './detailsSagas';

const sagas = [
  searchSagas,
  trendingSagas,
  favoriteSagas,
  detailsSagas
];

export default function* root () {
  yield all([ sagas.map(saga => fork(saga)) ]); 
}