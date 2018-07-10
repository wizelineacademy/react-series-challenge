import { put } from "redux-saga/effects";
import * as actions from '../actions';

export function* watchFavorites() {
  const storage = JSON.parse(localStorage.getItem('favorites'));
  yield put(actions.getFavorites(storage));
}