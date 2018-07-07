import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

const fetchGifs = () => {
  return axios
    .get("http://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "NYBl3G1fuM3PcJWfeAv0wSS6fuHAJhIK"
      }
    })
    .then(response => response);
};

function* getTrendingGifs() {
  try {
    const { data } = yield call(fetchGifs);
    const payload = data.data;
    yield put({ type: "FETCH_TRENDING_GIFS", payload });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchTrendingGifsRequested() {
  yield takeEvery("GET_TRENDING_GIFS", getTrendingGifs);
}
