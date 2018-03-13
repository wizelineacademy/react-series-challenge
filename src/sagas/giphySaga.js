import { put, takeLatest, call, all } from 'redux-saga/effects';
import {
  FETCH_TRENDING_GIPHYS,
  FETCH_TRENDING_GIPHYS_SUCCESS,
  FETCH_GIPHYS_SEARCH,
} from '../actions/action_types';
import { fetchTrendingGiphysFromWS, fetchSearchedGiphysFromWS } from '../utils/giphyApi';

function* fetchTrendingGiphys() {
  const trendingGiphys = yield call(fetchTrendingGiphysFromWS);
  yield put({
    type: FETCH_TRENDING_GIPHYS_SUCCESS,
    payload: trendingGiphys
  });
}

function* fetchTrendingGiphysWatcher() {
  yield takeLatest(FETCH_TRENDING_GIPHYS, fetchTrendingGiphys);
}

function* fetchGiphysSearch({ payload }) {
  const searchedGiphys = yield call(fetchSearchedGiphysFromWS, payload.term);
  yield put({
    type: FETCH_TRENDING_GIPHYS_SUCCESS,
    payload: searchedGiphys
  });
}

function* fetchGiphysSearchWatcher() {
  yield takeLatest(FETCH_GIPHYS_SEARCH, fetchGiphysSearch);
}

export default function* giphyRootSaga() {
  yield all([
    fetchTrendingGiphysWatcher(),
    fetchGiphysSearchWatcher(),
  ]);
}