import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTrendingGifs, receiveTrendingGifs } from '../actions/giphyApi';

const BASE_URL = 'https://api.giphy.com'
const API_KEY = 'OWyGkCD9SWGggtMzzEBRe3yPvwsh2BBq';
const PAGE_SIZE = 20;

// taken from:
// https://stackoverflow.com/questions/6566456/how-to-serialize-an-object-into-a-list-of-url-query-parameters
const mapToParams = (obj) => {
  var str = "";
  for (let key in obj) {
    if (str !== "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }
  return str;
}

const listToMap = (list) => {
  var map = {};
  for (let item of list) {
    map[item.id] = item;
  }
  return map;
}

const fetchJson = (...args) => {
  return fetch(args).then((res) => res.json());
}

function* getTrendingGifs(action) {
  let { page } = action;

  if (page < 0) {
    page = 0;
  };

  const path = '/v1/gifs/trending';
  const pageOffset = (page * PAGE_SIZE)
  const searchParams = mapToParams({ api_key: API_KEY, limit: PAGE_SIZE, offset: pageOffset });
  const endpoint = `${BASE_URL}${path}?${searchParams}`;

  try {
    const { data: gifs } = yield call(fetchJson, endpoint);
    const gifsMap = listToMap(gifs);
    yield put(receiveTrendingGifs(gifsMap));
  } catch (e) {
    yield put(receiveTrendingGifs(e));
  }
}

export function* watchFetchTrendingGifs() {
  yield takeEvery([fetchTrendingGifs], getTrendingGifs);
}