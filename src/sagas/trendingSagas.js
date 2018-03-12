
import { all, takeLatest, put, call } from 'redux-saga/effects';
import trendingActions from '../actions/trending';
import giphyApi from '../apis/giphy';

export function* trendingSaga (action) {
  const { payload } = action;
  try {
    yield put (trendingActions.creators.trendingStart());
    const rawResponse = yield call(giphyApi.trending, payload);
    const response = yield rawResponse.json();
    if (rawResponse.status > 400){
      throw new Error(response);
    }
    yield put (trendingActions.creators.trendingSuccess(response.data));
  } catch (e) {
    // let message = getErrorMessage(e);
    yield put (trendingActions.creators.trendingFail(e));
  }
}

export default function* rootSaga () {
  yield all([
    //add your sagas here:
    yield takeLatest(trendingActions.types.TRENDING_REQUEST ,trendingSaga),
  ]);
}
