import { call, takeEvery, put, select } from 'redux-saga/effects';
import { getTrendingGifs } from '../api/giphy';
import { fetchTrendingGifsCompleted, fetchTrendingGifsFailed } from '../redux/actions';

import { BEGIN_GET_GIFS_TRENDING_GIFS } from '../redux/types';

export function* loadTrendingGifs() {
  try {
    const appState = yield select(({ app }) => {
      return { filter: app.filter, favoriteGifs: app.favoriteGifs };
    });
    const gifs = yield call(getTrendingGifs, appState.filter);
    // Check if a gif is already set as favorite
    yield put(fetchTrendingGifsCompleted(gifs.data));
  } catch (e) {
    yield put(fetchTrendingGifsFailed(e));
  }
}

export default function* getTrendingGifsSaga() {
  yield takeEvery(BEGIN_GET_GIFS_TRENDING_GIFS, loadTrendingGifs);
}
