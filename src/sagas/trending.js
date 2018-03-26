import { call, takeEvery, put } from 'redux-saga/effects';
import { loadTrending } from '../api/giphy';
//import giphySearch from '../actions/giphySearch';
import trending from '../actions/trending';

export function* loadTrendingSaga() {
  console.log('[SAGA] loadTrendingSaga...');
  try {
    const trendingResponse = yield call(loadTrending); //api call
    yield put(trending.creators.getTrendingCompleted(trendingResponse));
  } catch (error) {
    yield put(trending.creators.getTrendingFailed(error));
  }
}

export default function* trendingSaga() {
  yield takeEvery(trending.types.GET_TRENDING_REQUESTED, loadTrendingSaga);
}