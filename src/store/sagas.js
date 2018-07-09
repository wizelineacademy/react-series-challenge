import { takeLatest, takeEvery, all } from "redux-saga/effects";
import {
  ACTION_TRENDING_GET_DATA_REQUEST,
  ACTION_SEARCH_TERM_GET_DATA_REQUEST
} from "./actions";
import * as trendingSagas from "./sagas/trendingSagas";
import * as searchSagas from "./sagas/searchSagas";

export default function* rootSaga() {
  yield all([
    takeEvery(
      ACTION_TRENDING_GET_DATA_REQUEST,
      trendingSagas.sagaTrendingGetDataRequest
    ),
    takeLatest(
      ACTION_SEARCH_TERM_GET_DATA_REQUEST,
      searchSagas.sagaSearchTermGetDataRequest
    )
  ]);
}
