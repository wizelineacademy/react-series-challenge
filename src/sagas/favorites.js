import { put, takeEvery, select } from "redux-saga/effects";
import * as actions from '../actions';

export function* watchFavorites() {
  const storage = JSON.parse(localStorage.getItem('favorites'));

  yield put(actions.getFavorites(storage));
}

export function* addFavorites(action) {
  const favorites = yield select((state) => state.favorites);
  const favoriteList = favorites || [];
  const nextState = [...favoriteList, action.add];

  localStorage.setItem('favorites', JSON.stringify(nextState));

  yield put(actions.addFavorites(nextState));
}

export function* watchAddFavorites() {
  yield takeEvery(actions.ADD, addFavorites);
}


export function* deleteFavorites(action) {
  const favorites = yield select((state) => state.favorites);
  let i = 0;

  for (let len = favorites.length; i < len; i += 1) {
    if (favorites[i].id === action.id) break;
  }

  const deleteFavorite = [
    ...favorites.slice(0, i),
    ...favorites.slice(i + 1)
  ];

  localStorage.setItem('favorites', JSON.stringify(deleteFavorite));
  yield put(actions.deleteFavorites(deleteFavorite));
}

export function* watchDeleteFavorites() {
  yield takeEvery(actions.DELETE, deleteFavorites);
}