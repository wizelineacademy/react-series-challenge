import { call, take, takeEvery, put } from 'redux-saga/effects';
import { loadSearch } from '../api/giphy';
import search from '../actions/search';

export function* loadSearchSaga(action) {
  console.log('[SAGA] loadSearchSaga..., queryStr:'+action.queryStr);
  try {
    const searchResponse = yield call(loadSearch, action.queryStr); //api call
    yield put(search.creators.getSearchCompleted(searchResponse));
  } catch (error) {
    yield put(search.creators.getSearchFailed(error));
  }
}

export default function* searchSaga() {
  yield takeEvery(search.types.GET_SEARCH_REQUESTED, loadSearchSaga);
}
