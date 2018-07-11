import { all, select, takeEvery } from 'redux-saga/effects';

// Sagas
import watchGetAllTrendingGif from './getAllTrendingGifs';
import watchSearchGif from './searchGif';
import { watchFavorites, watchAddFavorites, watchDeleteFavorites } from './favorites'

export function* watchLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()
    console.group(action.type);
    console.info('dispatching ', action);
    console.log('next state ', state);
    console.groupEnd(action.type);
  });
}

export default function* rootSaga() {
  yield all([
    watchLog(),
    watchGetAllTrendingGif(),
    watchSearchGif(),
    watchFavorites(),
    watchAddFavorites(),
    watchDeleteFavorites(),
  ]);
}