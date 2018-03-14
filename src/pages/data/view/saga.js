import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getGifId,
  getGifIdSuccess,
  getGifIdError,
} from './actions';

const API_KEY_GIPHY = 'FalKCfLXRYrRZUEJD8lkMlgBT8i3AHEO';
const Giphy = {
  getById(id) {
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}`;
    return fetch(`http://api.giphy.com/v1/gifs/${id}?${query}`, initObject);
  }
}

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
export function* watchers() {
  yield takeLatest(getGifId().type, getGif);
}

export default watchers;
