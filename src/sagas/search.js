import { call, takeEvery, put } from 'redux-saga/effects';
import search from '../actions/search';
import { getSearch } from '../services/api'


export function* loadSearchGifs(action) {
  console.log(action.payload);
  try {
    const searchResponse = yield call(getSearch, action.payload);
    console.log(searchResponse);
    yield put(search.creators.requestSearchGifsSuccess(searchResponse.data));
  } catch (error) {
    yield put(search.creators.requestSearchGifsFail(error));
    console.log(error);
  }
}

export default function* searchSaga() {
  yield takeEvery(search.types.REQUEST_SEARCH_GIFS, loadSearchGifs);
}
