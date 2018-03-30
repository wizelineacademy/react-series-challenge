import { call, put, takeLatest } from 'redux-saga/effects'

import gifDetails from '../reducers/gif';
import create, {TRENDING_TYPE} from '../utils/giphyApiFactory';

function* fetchTrending() {
   try {
     const trendingGifsDetails = yield call(create(TRENDING_TYPE));
     yield put(gifDetails.actions.trendingFetchSucceeded(trendingGifsDetails.response.data));
   } catch (e) {
      yield put(gifDetails.actions.trendingFetchFailed());
   }
}

function* trendingSaga() {
  yield takeLatest(gifDetails.types.TRENDING_FETCH_REQUESTED, fetchTrending);
}

export default trendingSaga;
