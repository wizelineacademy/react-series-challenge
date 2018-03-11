import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./HomeActions";
import { getTrendingGifs } from "../../api";

function* loadTrendingGifs() {
  try {
    const gifs = yield call(getTrendingGifs);
    yield put(actions.creators.getTrendingCompleted(gifs));
  } catch (error) {
    yield put(actions.creators.getTrendingFailed());
  }
}

function* homeSaga() {
  yield takeEvery(actions.types.GET_TRENDING_REQUESTED, loadTrendingGifs);
}

export default homeSaga;
