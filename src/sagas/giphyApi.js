import { call, put, takeEvery, select } from 'redux-saga/effects';
import { fetchTrendingGifs, receiveTrendingGifs, receiveNextPageTrendingGifs } from '../actions/giphyApi';

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

const selectFavoriteGifs = (state) => state.favorites.gifs;

const fetchJson = (...args) => {
  return fetch(args).then((res) => res.json());
}

function* getTrendingGifs(action) {
  let { page, search } = action.payload;

  if (page < 0) {
    page = 0;
  };

  const pageOffset = (page * PAGE_SIZE)
  const params = { api_key: API_KEY, limit: PAGE_SIZE, offset: pageOffset };

  let path;
  if (search) {
    path = '/v1/gifs/search';
    params.q = search;
  } else {
    path = '/v1/gifs/trending';
  }
  const searchParams = mapToParams(params);
  const endpoint = `${BASE_URL}${path}?${searchParams}`;

  try {
    const { data: gifs } = yield call(fetchJson, endpoint);
    const trendingGifs = listToMap(gifs);
    const favoriteGifs = yield select(selectFavoriteGifs);
    Object.keys(favoriteGifs).map((key) => {
      const gif = trendingGifs[key];
      if (gif) {
        gif.liked = true;
      }
      return null;
    });

    if (page > 0) {
      yield put(receiveNextPageTrendingGifs(trendingGifs));
    } else {
      yield put(receiveTrendingGifs(trendingGifs));
    }
  } catch (e) {
    yield put(receiveTrendingGifs(e));
  }
}

export function* watchFetchTrendingGifs() {
  yield takeEvery([fetchTrendingGifs], getTrendingGifs);
}