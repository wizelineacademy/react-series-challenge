import { all, call, put, takeEvery } from 'redux-saga/effects';
import gifsActions from '../actions/gifs';
import axios from 'axios';

const { LOAD_DATA_START, SEARCH } = gifsActions.types;

const { loadDataFinished, loadDataFailed } = gifsActions.creators;

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

function* doSearch({ payload }) {
  try {
    const { gifs } = yield call(searchGif, payload);
    yield put(loadDataFinished({ gifs }));
  } catch (e) {
    yield put(loadDataFailed({ error: e }));
  }
}

function* watchSearch(params) {
  yield takeEvery(SEARCH, doSearch);
}

function* watchLoadData() {
  yield takeEvery(LOAD_DATA_START, loadGifs);
}

function* rootSaga() {
  yield all([watchLoadData(), watchSearch()]);
}

export default rootSaga;
