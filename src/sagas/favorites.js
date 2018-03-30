import { call, takeEvery, put, select } from 'redux-saga/effects';
import { setNewFavoriteStatus } from '../redux/actions';

import { HANDLE_FAVORITE_CHANGE } from '../redux/types';

export function* handleFavoriteStatus(action) {
  let favorites = yield select(({ app }) => app.favoriteGifs);
  // Create new Set
  let index = favorites.findIndex(fav => fav === action.id);

  if (index >= 0) {
    favorites.splice(index);
  } else {
    favorites.push(action.id);
  }

  yield put(setNewFavoriteStatus([...favorites]));
}

export default function* handleFavoriteStatusSaga() {
  yield takeEvery(HANDLE_FAVORITE_CHANGE, handleFavoriteStatus);
}
