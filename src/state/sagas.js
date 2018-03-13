import { all } from "redux-saga/effects";

import { homeSaga } from "../components/Home";
import { searchSaga } from "../components/Search";
import { detailsSaga } from "../components/Details";

function* rootSaga() {
  yield all([homeSaga(), searchSaga(), detailsSaga()]);
}

export default rootSaga;
