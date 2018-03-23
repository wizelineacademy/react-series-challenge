import { all, takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import trending from "../actions/trending";

import { loadTrending } from '../api/Giphy';

//const selector = store => store.cryptoPrices.selectMe;

function* gretting() {
  console.log("Hello World");
}
/*
function* userSaga(action) {
  console.log(action);
  
}*/
console.log("sages")
function* cryptoSaga() {
  const response = yield call(loadTrending);
  yield put({type:trending.types.TRENDING_COMPLETED, prices:{...response}});
  console.log(response);
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
    yield gretting(),
    yield takeEvery(trending.types.TRENDING_REQUEST, cryptoSaga),
    //yield takeLatest('GET_PRICES_REQUESTED', cryptoSaga),
    //yield selectSaga(),
  ]);
};