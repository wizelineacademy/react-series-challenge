import axios from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import gifListActions from '../actions/gifList';

const { GET_TRENDING_GIFS } = gifListActions.types;
const { fetchedTrendingGifs } = gifListActions.creators;

const API_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'MZFOQrZRAo5cTBKEOEb47nBgL21jxLII';

const fetchApi = (resource) => {
    const url = `${API_URL}/${resource}&api_key=${API_KEY}`;
    return axios.get(url)
        .then((response) => response);
};

function* getTrendingGifs() {
    try {
        const resource = 'trending?limit=25&rating=G';
        const { data } = yield call(fetchApi, resource);
        yield put(fetchedTrendingGifs(data));
    } catch (e) {
        console.warn(e);
    }
}

function* watchGetTrendingGifs() {
    yield takeEvery(GET_TRENDING_GIFS, getTrendingGifs)
}

function* rootSaga() {
    yield  all([
        watchGetTrendingGifs(),
    ]);
}

export default rootSaga;