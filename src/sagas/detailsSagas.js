
import { all, takeLatest, put, call } from 'redux-saga/effects';
import detailsActions from '../actions/details';
import favoriteActions from '../actions/favorites';
import giphyApi from '../apis/giphy';

export function* fetchGiphySaga (action) {
  const { payload } = action;
  try {
    yield put (detailsActions.creators.fetchDetailsStart());
    const rawResponse = yield call(giphyApi.fetchGiphy, payload);
    const response = yield rawResponse.json();
    if (rawResponse.status > 400){
      throw new Error(response);
    }

    yield put (detailsActions.creators.fetchDetailsSuccess(response.data));
    yield put (favoriteActions.creators.updateIsFav());

  } catch (e) {
    // let message = getErrorMessage(e);
    yield put (detailsActions.creators.fetchDetailsFail(e));
  }
}

export default function* rootSaga () {
  yield all([
    //add your sagas here:
    yield takeLatest(detailsActions.types.DETAILS_FETCH_REQ, fetchGiphySaga),
  ]);
}
