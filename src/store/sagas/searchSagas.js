import { call, put } from "redux-saga/effects";
import GiphyApiService from "../../services/api/giphyApi";
import { actionSearchTermGetDataResponse } from "../actions";
import { delay } from "redux-saga";

export function* sagaSearchTermGetDataRequest(action) {
  try {
    yield call(delay, 1000);
    const result = yield call(
      GiphyApiService.getSearchTermDataRequest,
      action.payload
    );
    yield put(actionSearchTermGetDataResponse(result));
  } catch (error) {}
}
