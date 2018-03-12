import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./DetailsActions";
import { getGifById } from "../../api";

function* loadSingleGif(action) {
  const { id } = action.payload;
  try {
    const { data } = yield call(getGifById, { id });
    yield put(actions.creators.gifLoaded({ gif: data }));
  } catch (error) {
    yield put(actions.creators.gifFailed());
  }
}

function* detailsSaga() {
  yield takeEvery(actions.types.GIF_REQUESTED, loadSingleGif);
}

export default detailsSaga;
