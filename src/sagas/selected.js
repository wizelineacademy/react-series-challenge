import { takeLatest, call, put } from 'redux-saga/effects';
import { SELECTED_GIF_REQUEST_INFO, selectedGifChange } from '../actions/selected';
import { fetchGif } from '../api';

export function* fetchSelectedGif(action) {
  const response = yield call(fetchGif, action.payload);
  yield put(selectedGifChange(response.data));
}

export function* watchFetchSelectedGif() {
  yield takeLatest(SELECTED_GIF_REQUEST_INFO, fetchSelectedGif);
}
