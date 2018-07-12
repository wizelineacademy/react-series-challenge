import { all, call, put, take, takeEvery } from 'redux-saga/effects';
import gifsActions from '../actions/gifs';
import axios from 'axios';

const { LOAD_DATA_START, SEARCH, LOAD_FAVORITES } = gifsActions.types;

const {
  loadDataFinished,
  loadDataFailed,
  searchFinished,
  searchFailed,
  dontSearch,
  loadFavoritesFinished
} = gifsActions.creators;

const API_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = 'PCv31jAmmHGTcGvY06Tow2lcIHZPMmj6';

const getTrendingGifs = () => {
  const url = `${API_URL}trending?api_key=${API_KEY}&limit=25&rating=G`;
  return axios.get(url);
};

const searchGif = query => {
  const url = `${API_URL}search?api_key=${API_KEY}&q=${query}&limit=25&rating=G`;
  return axios.get(url);
};

function* loadGifs() {
  try {
    const gifs = yield getTrendingGifs();

    yield put(loadDataFinished({ gifs }));
  } catch (e) {
    yield put(loadDataFailed({ error: e }));
  }
}

function* loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

  yield put(loadFavoritesFinished({ favorites }));
}

function* doSearch({ payload: { query } }) {
  try {
    if (query) {
      const gifs = yield call(searchGif, query);
      yield put(searchFinished({ gifs }));
    } else {
      yield put(dontSearch());
    }
  } catch (e) {
    yield put(searchFailed({ error: e }));
  }
}

function* watchSearch() {
  yield takeEvery(SEARCH, doSearch);
}

function* watchLoadData() {
  yield take(LOAD_DATA_START);

  yield call(loadGifs);
}

function* watchLoadFavorites() {
  yield take(LOAD_FAVORITES);

  yield call(loadFavorites);
}

function* rootSaga() {
  yield all([watchLoadData(), watchSearch(), watchLoadFavorites()]);
}

export default rootSaga;
