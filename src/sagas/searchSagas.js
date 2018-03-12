
import { all, takeLatest, put, call } from 'redux-saga/effects';
import searchActions from '../actions/search';
import giphyApi from '../apis/giphy';
//import { getErrorMessage } from '../utils/errors';

export function* updateSearchTermSaga (action) {
  const { payload } = action;
    yield put (searchActions.creators.updateSearchTerm(payload));
}

export function* searchSaga (action) {
  const { payload } = action;
  try {
    yield put (searchActions.creators.searchStart());
    const rawResponse = yield call(giphyApi.search, payload);
    const response = yield rawResponse.json();
    if (rawResponse.status > 400){
      throw new Error(response);
    }
    yield put (searchActions.creators.searchSuccess(response.data));
  } catch (e) {
    // let message = getErrorMessage(e);
    yield put (searchActions.creators.searchFail(e));
  }
}

export default function* rootSaga () {
  yield all([
    //add your sagas here:
    yield takeLatest(searchActions.types.SEARCH_REQUEST ,searchSaga),
    yield takeLatest(searchActions.types.SEARCH_TERM_UPDATE_REQUEST ,updateSearchTermSaga),
  ]);
}
