import { put, takeLatest, call, all } from 'redux-saga/effects';
import {
  FETCH_TRENDING_GIPHYS,
  FETCH_TRENDING_GIPHYS_SUCCESS,
  FETCH_GIPHYS_SEARCH,
  FETCH_GIPHYS_BY_IDS,
  FETCH_FAVORITE_GIPHYS_SUCCESS,
  FETCH_GIPHY_DETAIL,
  FETCH_GIPHY_DETAIL_SUCCESS
} from '../actions/action_types';
import {
  fetchTrendingGiphysFromWS,
  fetchSearchedGiphysFromWS,
  fetchGiphysByIdsFromWS,
  fetchGiphyDetailFromWS
} from '../utils/giphyApi';

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

function* fetchGiphysByIds({ payload }) {
  const fetchedGiphys = yield call(fetchGiphysByIdsFromWS, payload);
  yield put({
    type: FETCH_FAVORITE_GIPHYS_SUCCESS,
    payload: fetchedGiphys
  });
}

function* fetchGiphysByIdsWatcher() {
  yield takeLatest(FETCH_GIPHYS_BY_IDS, fetchGiphysByIds);
}


function* fetchGiphyDetail({ payload }) {
  const fetchedGiphy = yield call(fetchGiphyDetailFromWS, payload);
  yield put({
    type: FETCH_GIPHY_DETAIL_SUCCESS,
    payload: fetchedGiphy
  });
}

function* fetchGiphyDetailWatcher() {
  yield takeLatest(FETCH_GIPHY_DETAIL, fetchGiphyDetail);
}

export default function* giphyRootSaga() {
  yield all([
    fetchTrendingGiphysWatcher(),
    fetchGiphysSearchWatcher(),
    fetchGiphysByIdsWatcher(),
    fetchGiphyDetailWatcher(),
  ]);
}