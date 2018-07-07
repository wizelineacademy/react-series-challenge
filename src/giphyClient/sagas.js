import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchData } from "./api";
import { REQUEST_SEARCH_GIFS, responseSearchGifs } from "./actions";

function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(responseSearchGifs(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_SEARCH_GIFS, getApiData);
}
