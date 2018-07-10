import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects'; 
import trendingActions from 'actions/trending';

const { TRENDING_GIFS_GET } = trendingActions.types;

const { fetchedTrendingGifs } = trendingActions.creators;

const API_URL = 'http://api.giphy.com/v1/gifs';

const fetchTrendingGifs = () => {
  let url = `${API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`;
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

function* watchTrendingGifsRequested() {
  yield takeEvery(TRENDING_GIFS_GET, getTrendingGifs);
}

export default watchTrendingGifsRequested;
