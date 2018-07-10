import axios from 'axios';
import { all, call, takeEvery, put } from 'redux-saga/effects'; 
import trendingActions from '../actions/trending';
import searchActions from '../actions/search';

const { TRENDING_GIFS_GET } = trendingActions.types;
const { SEARCH_GIFS_GET } = searchActions.types;

const { fetchedTrendingGifs } = trendingActions.creators;
const { fetchedSearchGifs } = searchActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs';

const fetchTrendingGifs = () => {
  let url = `${API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(url)
    .then((response) => response.data);
};

const fetchSearchGifs = (query) => {
  let url = `${API_URL}/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}`;
  return axios.get(url)
    .then((response) => response.data);
};

function* getTrendingGifs() {
  try {
    const trendingGifs = yield call(fetchTrendingGifs);

    const { data } = trendingGifs;
    yield put(fetchedTrendingGifs({ gifs: data }));
  } catch (e) {
    yield put(fetchedTrendingGifs({ error: e }))
  }
}

function* getSearchGifs({ payload }) {
  try {
    const searchGifs = yield call(fetchSearchGifs, payload);

    const { data } = searchGifs;
    yield put(fetchedSearchGifs({ gifs: data }));
  } catch (e) {
    yield put(fetchedSearchGifs({ error: e }))
  }
}

function* watchTrendingGifsRequested() {
  yield takeEvery(TRENDING_GIFS_GET, getTrendingGifs);
}

function* watchSearchGifsRequested() {
  yield takeEvery(SEARCH_GIFS_GET, getSearchGifs);
}


function* rootSaga () {
  yield all([
    watchTrendingGifsRequested(),
    watchSearchGifsRequested()
  ]);
}

export default rootSaga;