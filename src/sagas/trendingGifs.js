import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
const api_key = process.env.REACT_APP_GIPHY_API_KEY;

const fetchGifs = () => {
  return axios
    .get("http://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key
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
