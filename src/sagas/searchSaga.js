import { call, put, takeLatest } from 'redux-saga/effects'

import gifDetails from '../reducers/gif';
import create, {SEARCH_TYPE} from '../utils/giphyApiFactory';

function* searchTrending(action) {
   try {
     const searchGifsDetails = yield call(create(SEARCH_TYPE, {search: action.text}));
     yield put(gifDetails.actions.searchFetchSucceeded(searchGifsDetails.response.data));
   } catch (e) {
      yield put(gifDetails.actions.searchFetchFailed());
   }
}

function* searchSaga() {
  yield takeLatest(gifDetails.types.SEARCH_FETCH_REQUESTED, searchTrending);
}

export default searchSaga;
