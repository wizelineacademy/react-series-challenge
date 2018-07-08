import axios from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import gifListActions from '../actions/gifList';
import favoritesActions from '../actions/favorites';
import searchBarActions from '../actions/searchBar';

const { GET_TRENDING_GIFS } = gifListActions.types;
const { fetchedTrendingGifs } = gifListActions.creators;

const { GET_FAVORITES_GIFS } = favoritesActions.types;
const { fetchedFavoritesGifs } = favoritesActions.creators;

const { SEARCH_BAR_INPUT } = searchBarActions.types;

const API_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'MZFOQrZRAo5cTBKEOEb47nBgL21jxLII';

const fetchApi = (resource) => {
    const url = `${API_URL}${resource}&api_key=${API_KEY}`;
    return axios.get(url)
        .then((response) => response);
};

function* getTrendingGifs() {
    try {
        const resource = '/trending?limit=25&rating=G';
        const { data } = yield call(fetchApi, resource);
        yield put(fetchedTrendingGifs(data));
    } catch (e) {
        console.warn(e);
    }
}

function* watchGetTrendingGifs() {
    yield takeEvery(GET_TRENDING_GIFS, getTrendingGifs)
}

function* getFavoritesGifs({ payload }) {
    try {
        const ids = payload.join(',');
        const resource = `?ids=${ids}`;
        const { data } = yield call(fetchApi, resource);
        yield put(fetchedFavoritesGifs(data.data));
    } catch (e) {
        console.warn(e);
    }
}

function* watchGetFavoritesGifs() {
    yield takeEvery(GET_FAVORITES_GIFS, getFavoritesGifs)
}

function* getSearchedGifs({ payload }) {
    try {
        const resource = `/search?q=${payload}&limit=25&offset=0&rating=G&lang=en`;
        const { data } = yield call(fetchApi, resource);
        yield put(fetchedTrendingGifs(data));
    } catch (e) {
        console.warn(e);
    }
}

function* watchSearchGifs() {
    yield takeEvery(SEARCH_BAR_INPUT, getSearchedGifs)
}

function* rootSaga() {
    yield  all([
        watchGetTrendingGifs(),
        watchGetFavoritesGifs(),
        watchSearchGifs(),
    ]);
}

export default rootSaga;