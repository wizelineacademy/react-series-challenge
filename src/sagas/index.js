import { all, takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import trending from "../actions/trending";
import search from "../actions/search";

import API from '../api/Giphy';


function* gretting() {
  console.log("Hello World");
}
/*
function* userSaga(action) {
  console.log(action);
  
}
function* cryptoSaga() {
  const response = yield call(loadTrending);
  yield put({type:trending.types.TRENDING_COMPLETED, prices:{...response}});
  console.log(response);
}*/

function* getTrending() {
  const response = yield call(API.loadTrending);
  yield put({type:trending.types.TRENDING_COMPLETED, gifs:response.data});
}

function* getSearch(action) {
  console.log("action", action)
  const response = yield call(API.loadSearch, action.payload);
  yield put({type:search.types.SEARCH_COMPLETED, gifs:response.data});
}
/*
function* selectSaga() {
  const value = yield select(selector);
  console.log("value", value);
}
*/

export default function* rootSaga() {
  console.log('redux saga setup ok');
  yield all([
    //add your sagas here:
    //yield gretting(),
    yield takeEvery(trending.types.TRENDING_REQUEST, getTrending),
    yield takeEvery(search.types.SEARCH_REQUEST, getSearch),
    //yield takeLatest('GET_PRICES_REQUESTED', cryptoSaga),
    //yield selectSaga(),
  ]);
};