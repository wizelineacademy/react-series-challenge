import { all, takeEvery, call, put } from 'redux-saga/effects';
import trending from "../actions/trending";
import search from "../actions/search";
import giphy from "../actions/giphy";

import API from '../api/Giphy';


export function* getTrending() {
  const response = yield call(API.loadTrending);
  yield put(trending.creators.getTrendingCompleted(response.data));
  return response.data;
}

export function* getSearch(action) {
  const response = yield call(API.loadSearch, action.q);
  yield put(search.creators.searchCompleted(response.data));
}
export function* getGiphy(action) {
  const response = yield call(API.loadSingleGiphy, action.id);
  yield put(giphy.creators.giphyCompleted(response.data));
}
export default function* rootSaga() {
  yield all([
    yield takeEvery(trending.types.TRENDING_REQUEST, getTrending),
    yield takeEvery(search.types.SEARCH_REQUEST, getSearch),
    yield takeEvery(giphy.types.GIPHY_REQUEST, getGiphy)
  ]);
};