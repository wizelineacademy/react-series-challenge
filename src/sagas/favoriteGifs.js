import { takeEvery } from "redux-saga/effects";

export default function* watchSearchGifsRequested() {
  yield takeEvery("GET_SEARCH_GIFS");
}
