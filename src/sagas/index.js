import { all } from "redux-saga/effects";
import watchTrendingGifsRequested from "./trendingGifs";
import watchSearchGifsRequested from "./searchGifs";

function* rootSaga() {
  yield all([watchTrendingGifsRequested(), watchSearchGifsRequested()]);
}

export default rootSaga;
