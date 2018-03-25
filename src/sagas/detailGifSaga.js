import { call, takeEvery, put, select } from 'redux-saga/effects';
import {searchSingleGif} from "../api";
import detailGif from '../actions/detailGif';

const detailGifSelector = state => state.detailGif;

export function* searchSingleGifSaga() {
  const state = yield select(detailGifSelector);
  try {
    const response = yield call(searchSingleGif, state.gifId);
    yield put(detailGif.creators.getSingleGifCompleted(response));
  } catch (error) {
    yield put(detailGif.creators.getSingleGifFailed(error));
  }
};
export default function* getDetailGifSaga() {
  yield takeEvery(detailGif.types.GET_SINGLE_GIF_REQUESTED, searchSingleGifSaga)
};