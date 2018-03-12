import { all } from "redux-saga/effects";

import { homeSaga } from "../components/Home";
import { detailsSaga } from "../components/Details";

function* rootSaga() {
  yield all([homeSaga(), detailsSaga()]);
}

export default rootSaga;
