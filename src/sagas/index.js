import { all, call, takeEvery, put } from 'redux-saga/effects';
import { getTrending, getSearch, getFavorite, getGif } from '../api/giphy';
import types from '../actions/giphy';

function* loadTrendingGifs(action) {
  try {
    const gifsData = yield call(getTrending, action.payload);
    yield put(types.creators.getTrendingGifsCompleted(gifsData));
  } catch (e) {
    yield put(types.creators.getTrendingGifsFailed(e));
  }
}

function* loadSearchGifs(action) {
  try {
    const gifsData = yield call(getSearch, action.payload);
    yield put(types.creators.searchGifsCompleted(gifsData));
  } catch (e) {
    yield put(types.creators.searchGifsFailed(e));
  }
}

function* loadGetGif(action) {
  try {
    const gifData = yield call(getGif, action.payload);
    yield put(types.creators.getGifCompleted(gifData));
  } catch (e) {
    yield put(types.creators.getGifFailed(e));
  }
}

function* loadFavoriteGifs(action) {
  try {
    const gifsData = yield call(getFavorite, action.payload);
    yield put(types.creators.getFavoriteGifsCompleted(gifsData));
  } catch (e) {
    yield put(types.creators.getFavoriteGifsFailed(e));
  }
}

export default function* rootSaga() {
  console.log('redux saga setup ok');
  yield all([
    //add your sagas here:
    yield takeEvery('GET_TRENDING_GIFS_REQUESTED', loadTrendingGifs),
    yield takeEvery('GET_FAVORITE_GIFS_REQUESTED', loadFavoriteGifs),
    yield takeEvery('GET_GIF_REQUESTED', loadGetGif),
    yield takeEvery('SEARCH_GIFS_REQUESTED', loadSearchGifs),

  ]);
};