import {FETCH_SEARCH_GIFS, fetchSearchGifsFail, fetchSearchGifsOk} from "../actions/search";
import {call, put, takeEvery} from "redux-saga/effects";
import get from './giphyAPI';
import {simplifyGIFObject} from "./utils";

function * onFetchSearchGifs (action) {
  let response;
  try {
    response = yield call(get, `search?q=${action.payload}&limit=80`);
  } catch (error) {
    yield put(fetchSearchGifsFail());
  }
  const searchGifs = response.map(simplifyGIFObject);
  yield put(fetchSearchGifsOk(searchGifs));
}

const searchWatchers = [
  takeEvery(FETCH_SEARCH_GIFS, onFetchSearchGifs)
];

export default searchWatchers;
