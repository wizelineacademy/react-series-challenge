
import { all, takeLatest, put, call } from 'redux-saga/effects';
import trendingActions from '../actions/trending';
import favoriteActions from '../actions/favorites';
import giphyApi from '../apis/giphy';
import map from '../utils/map';

export function* trendingSaga (action) {
  const { payload } = action;
  try {
    yield put (trendingActions.creators.trendingStart());
    const rawResponse = yield call(giphyApi.trending, payload);
    const response = yield rawResponse.json();
    if (rawResponse.status > 400){
      throw new Error(response);
    }
    yield put (trendingActions.creators.trendingSuccess(map(response.data,giphyApi.mapDataToFields)));
    yield put (favoriteActions.creators.updateIsFav())
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
