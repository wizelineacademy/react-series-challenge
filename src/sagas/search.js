import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects'; 
import searchActions from '../actions/search';

const { SEARCH_GIFS_GET } = searchActions.types;

const { fetchedSearchGifs } = searchActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs';

const fetchSearchGifs = (query) => {
  let url = `${API_URL}/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}`;
  return axios.get(url)
    .then((response) => response.data);
};

function* getSearchGifs({ payload }) {
  try {
    const searchGifs = yield call(fetchSearchGifs, payload);

    const { data } = searchGifs;
    yield put(fetchedSearchGifs({ gifs: data }));
  } catch (e) {
    yield put(fetchedSearchGifs({ error: e }))
  }
}

function* watchSearchGifsRequested() {
  yield takeEvery(SEARCH_GIFS_GET, getSearchGifs);
}

export default watchSearchGifsRequested;
