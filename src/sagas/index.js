import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects'
import trendGifsActions from '../actions/trendGifs';
import searchGifsActions from '../actions/searchGifs';

const { TREND_GIFS_LOAD } = trendGifsActions.types;
const { fetchedTrendGifs, failedFetchTrendGifs } = trendGifsActions.creators;
const { SEARCH_GIFS_LOAD } = searchGifsActions.types;
const { fetchedSearchGifs, failedFetchSearchGifs } = searchGifsActions.creators;

const giphyApiUrl = 'https://api.giphy.com/v1';
const giphyApiKey = 'iyoTSR6E7wC6lx0XhXApQqHQxbVIfp8v';

const fetchGifs = (url) => {
    return axios.get(url)
        .then((response) => response)
};

// Helper function, convert array to object.
const arrayToObj = (arr) => {
    const obj = {};
    arr.forEach((gif) => {
       obj[gif.id] = gif;
    });
    return obj;
};

// Get Trending Gifs
function* getTrendGifs() {

    try {
        const url = `${giphyApiUrl}/gifs/trending?api_key=${giphyApiKey}&limit=25`;
        const { data } = yield call(fetchGifs, url);
        const gifs = arrayToObj(data.data || []);
        yield put(fetchedTrendGifs({ gifs }));
    } catch(e) {
        yield put(failedFetchTrendGifs({error: e}));
    }

}

// Get Gifs by search term
function* getSearchGifs(action) {
    try {
        const search = action.payload || '';
        const url = `${giphyApiUrl}/gifs/search?api_key=${giphyApiKey}&limit=25&q=${search}`;
        const { data } = yield call(fetchGifs, url);
        const gifs = arrayToObj(data.data || []);
        yield put(fetchedSearchGifs({ gifs }));
    } catch(e) {
        yield put(failedFetchSearchGifs({error: e}));
    }
}

// Watching for Trending Gifs to Load
function* watchTrendGifsToLoad() {
    yield takeEvery(TREND_GIFS_LOAD, getTrendGifs);
}

// Watching for Search Gifs to Load
function* watchSearchGifsToLoad() {
    yield takeEvery(SEARCH_GIFS_LOAD, getSearchGifs);
}

function* rootSaga() {
    yield all([
        watchTrendGifsToLoad(),
        watchSearchGifsToLoad()
    ]);
}

export default rootSaga;


