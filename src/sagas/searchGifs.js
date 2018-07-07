import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { HOST, API_KEY } from "../api/giphy";

export default function* watcherSaga() {
  yield takeLatest("API_CALL_SEARCH_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
const fetchSearchGifs = query => {
  return axios({
    method: "get",
    baseURL: HOST,
    url: "/v1/gifs/search",
    params: {
      api_key: API_KEY,
      query
    }
  });
};

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(query) {
  try {
    const response = yield call(fetchSearchGifs, query);
    const { data } = response.data;
    console.log(data);

    // dispatch a success action to the store with the new data
    yield put({ type: "API_CALL_SEARCH_SUCCESS", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_SEARCH_FAILURE", error });
  }
}
