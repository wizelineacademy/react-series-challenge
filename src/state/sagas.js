import { all } from "redux-saga/effects";

import { homeSaga } from "../components/Home";

function* rootSaga() {
  yield all([homeSaga()]);
}

export default rootSaga;
