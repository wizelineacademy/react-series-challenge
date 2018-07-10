import { put, takeEvery } from "redux-saga/effects";
import * as actions from '../actions';

const initialState = [];

export function* watchFavorites() {
  const storage = JSON.parse(localStorage.getItem('favorites'));
  yield put(actions.getFavorites(storage));
}

export function* addFavorites1(res) {
  yield put(actions.addFavorites(res.add));

}


export function* watchAddFavorites() {
  yield takeEvery(actions.ADD, addFavorites1)
}