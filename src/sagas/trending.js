import { call, takeEvery, put } from 'redux-saga/effects';
import trending from '../actions/trending';
import { getTrending } from '../services/api'


export function* loadTrendingGifs() {
  try {
    const trendingResponse = yield call(getTrending);
    console.log(trendingResponse.data);
    yield put(trending.creators.requestTrendingGifsSuccess(trendingResponse.data));
  } catch (error) {
    yield put(trending.creators.requestTrendingGifsFail(error));
  }
}

export default function* trendingSaga() {
  yield takeEvery(trending.types.REQUEST_TRENDING_GIFS, loadTrendingGifs);
}
