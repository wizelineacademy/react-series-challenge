import { all } from "redux-saga/effects";

import watchSearchGifs from "./searchGifs";
import watchTrendGifs from "./trendGifs";

function* rootSaga() {
  yield all([watchTrendGifs(), watchSearchGifs()]);
}

export default rootSaga;
