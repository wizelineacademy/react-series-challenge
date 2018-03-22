import { call, put, takeLatest } from 'redux-saga/effects';
import Giphy from '../giphy';
import {
  getGifId,
  getGifIdSuccess,
  getGifIdError,
} from './actions';

function* getGif(params) {
  try {
    const gifId = params.payload.id;
    const response = yield call(Giphy.getById, gifId);
    switch (response.status) {
      case 200: {
        const gif = yield response.json();
        yield put(getGifIdSuccess(gif));
        break;
      }
      default:
        yield put(getGifIdError('Internal Error'));
    }
  } catch (error) {
    yield put(getGifIdError(error.message));
  }
}

/*
 * Watchers
 */
function* watchers() {
  yield takeLatest(getGifId().type, getGif);
}

export default watchers;
