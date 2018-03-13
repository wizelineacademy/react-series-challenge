import { all, call, takeEvery, put } from 'redux-saga/effects';
import trending from '../actions/trending';
import search from '../actions/search';
import gif from '../actions/gif';
import favorites from '../actions/favorites';
import { loadTrending, getGif, searchGif } from '../api';

export function* loadTrendingSaga() {
  try {
    const response = yield call(loadTrending);
    yield put(trending.creators.loadTrending(response.data));
  } catch (error) {
    yield put(trending.creators.setError(error));
  }
}

export function* loadGifSaga(action) {
  try {
    yield put(gif.creators.loadingGif());
    const response = yield call(getGif, action.payload);
    yield put(gif.creators.loadGif(response.data));
  } catch (error) {
    yield put(gif.creators.setError(error));
  }
}

export function* loadSearchSaga() {
  try {
    yield put(gif.creators.loadingSearching());
    const response = yield call(searchGif);
    yield put(search.creators.loadSearching(response.data));
  } catch (error) {
    yield put(search.creators.setError(error));
  }
}

export function* toggleFavoriteSaga(action) {
  yield put(favorites.creators.favoriteAction(action.payload));
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(trending.types.LOADING_TRENDING, loadTrendingSaga),
    yield takeEvery(search.types.REQUEST_SEARCH, loadSearchSaga),
    yield takeEvery(gif.types.REQUEST_GIF, loadGifSaga),
    yield takeEvery(favorites.types.REQUEST_TOGGLE, toggleFavoriteSaga),
  ]);
}
