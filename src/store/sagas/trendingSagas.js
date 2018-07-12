import { call, put } from "redux-saga/effects";
import GiphyApiService from "../../services/api/giphyApi";
import { actionTrendingGetDataResponse } from "../actions";

export function* sagaTrendingGetDataRequest(action) {
  try {
    const result = yield call(
      GiphyApiService.getTrendingDataRequest,
      action.payload
    );
    yield put(actionTrendingGetDataResponse(result));
  } catch (error) {}
}
