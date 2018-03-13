
import { all, takeLatest, put, select } from 'redux-saga/effects';
import favoritesActions from '../actions/favorites';
import favApi from '../apis/favories';
import { getFavorites } from '../selectors/index'

export function* addFavoriteSaga (action) {
  const { payload } = action;
  const gif = payload;
  const newState = yield select(getFavorites);
  newState.favorites[gif.id] = { ...gif };
  favApi.save(newState.favorites);
  yield put (favoritesActions.creators.updateFavorites(newState.favorites));

}

export default function* rootSaga () {
  yield all([
    //add your sagas here:
    yield takeLatest(favoritesActions.types.FAVORITES_ADD_REQ ,addFavoriteSaga),
  ]);
}
