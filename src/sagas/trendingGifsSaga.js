import { call, takeEvery, put } from 'redux-saga/effects';
import {getTrendingGifs} from "../api";
import trendingGifs from '../actions/trendingGifs';


export function* loadTrendingGifsSaga() {
  try {
    const response = yield call(getTrendingGifs);
    yield put(trendingGifs.creators.getTrendingGifsCompleted(response));
  } catch (error) {
    yield put(trendingGifs.creators.getTrendingGifsFailed(error));
  }
};
export default function* trendingGifsSaga() {
  yield takeEvery(trendingGifs.types.GET_TRENDING_GIFS_REQUESTED, loadTrendingGifsSaga)
};