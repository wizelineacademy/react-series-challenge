import { call, takeEvery, put, select } from 'redux-saga/effects';
import {searchGifs} from "../api";
import searchingGifs from '../actions/searchingGifs';

const searchingGifsSelector = state => state.searchingGifs;

export function* searchGifsSaga() {
  const state = yield select(searchingGifsSelector);
  try {
    const response = yield call(searchGifs, state.term);
    yield put(searchingGifs.creators.searchGifsCompleted(response));
  } catch (error) {
    yield put(searchingGifs.creators.searchGifsFailed(error));
  }
};
export default function* searchingGifsSaga() {
  yield takeEvery(searchingGifs.types.SEARCH_GIFS_REQUESTED, searchGifsSaga)
};