import { takeLatest, call, select } from 'redux-saga/effects';
import { TOGGLE_FAVORITE } from '../actions/favorites';
import { getFavorites } from '../selectors/favorites';

export const saveFavorites = (favorites) => window.localStorage.setItem('favorites', JSON.stringify(favorites));

export function* storeFavoriteSaga() {
  const favorites = yield select(getFavorites);
  yield call(saveFavorites, favorites);
}

export function* watchStoreFavoriteSaga() {
  yield takeLatest(TOGGLE_FAVORITE, storeFavoriteSaga);
}
