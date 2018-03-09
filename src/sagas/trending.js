import { call, takeEvery, put } from 'redux-saga/effects';
import trending from '../actions/trending';
import { getTrending } from '../services/api'


export function* loadTrendingGifs() {
  try {
    const trendingResponse = yield call(getTrending);
    yield put(trending.creators.REQUEST_TRENDING_GIFS_SUCCESS(trendingResponse));
  } catch (error) {
    yield put(trending.creators.REQUEST_TRENDING_GIFS_FAIL(error));
  }
}

export default function* trendingSaga() {
  yield takeEvery(trending.types.REQUEST_TRENDING_GIFS, loadTrendingGifs);
}
