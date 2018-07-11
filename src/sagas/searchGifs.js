import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
const api_key = process.env.REACT_APP_GIPHY_API_KEY;

const fetchGifs = query => {
  return axios
    .get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: query,
        api_key
      }
    })
    .then(response => response);
};

function* getSearchGifs(action) {
  const { query } = action;
  try {
    const { data } = yield call(fetchGifs, query);
    const payload = data.data;
    yield put({ type: "FETCH_SEARCH_GIFS", payload });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchSearchGifsRequested() {
  yield takeEvery("GET_SEARCH_GIFS", getSearchGifs);
}
