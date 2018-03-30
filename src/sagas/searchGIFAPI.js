import { call, takeEvery, put } from 'redux-saga/effects';
import { searchGif } from '../api/giphy';
import { searchGIFAPICompleted, searchGIFAPIFailed } from '../redux/actions';

import { BEGIN_SEARCH_GIF_API } from '../redux/types';

export function* searchGIFAPI(action) {
  if (action.search.length >= 3) {
    try {
      const gifs = yield call(searchGif, action.search);
      yield put(searchGIFAPICompleted(gifs.data));
    } catch (e) {
      yield put(searchGIFAPIFailed(e));
    }
  }
}

export default function* searchGIFAPISaga() {
  yield takeEvery(BEGIN_SEARCH_GIF_API, searchGIFAPI);
}
