import { takeLatest, call, put, select } from 'redux-saga/effects';
import { TOGGLE_FAVORITE } from '../actions/favorites';
import { getFavorites } from '../selectors/favorites';

const saveFavorites = (favorites) => window.localStorage.setItem('favorites', JSON.stringify(favorites));

function* storeFavoriteSaga() {
  const favorites = yield select(getFavorites);
  yield call(saveFavorites, favorites);
}

export function* watchStoreFavoriteSaga() {
  yield takeLatest(TOGGLE_FAVORITE, storeFavoriteSaga);
}
