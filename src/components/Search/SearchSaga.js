import { call, put, takeEvery } from "redux-saga/effects";

import actions from "./SearchActions";
import { searchGifs } from "../../api";

function* searchGif(action) {
  try {
    const { data } = yield call(searchGifs, action.payload);
    yield put(actions.creators.searchCompleted(data));
  } catch (error) {
    yield put(actions.creators.searchFailed());
  }
}

function* searchSaga() {
  yield takeEvery(actions.types.SEARCH_REQUESTED, searchGif);
}

export default searchSaga;
