import { all, fork } from 'redux-saga/effects';
import searchSagas from './searchSagas';
import trendingSagas from './trendingSagas';
import favoriteSagas from './favoritesSagas';

const sagas = [
  searchSagas,
  trendingSagas,
  favoriteSagas
];

export default function* root () {
  yield all([ sagas.map(saga => fork(saga)) ]); 
}