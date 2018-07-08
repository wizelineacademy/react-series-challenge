import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import trendGifsActions from '../actions/trendGifs';

const { TREND_GIFS_LOAD } = trendGifsActions.types;
const { fetchedTrendGifs } = trendGifsActions.creators;

const giphyApiUrl = 'https://api.giphy.com/v1';
const giphyApiKey = 'iyoTSR6E7wC6lx0XhXApQqHQxbVIfp8v';

const fetchGifs = (url) => {
    return axios.get(url)
        .then((response) => response)
};

const arrayToObj = (arr) => {
    const obj = {};
    arr.forEach((gif) => {
       obj[gif.id] = gif;
    });
    return obj;
};

function* getTrendGifs() {

    try {
        const url = `${giphyApiUrl}/gifs/trending?api_key=${giphyApiKey}&limit=25`;
        const { data } = yield call(fetchGifs, url);
        const gifs = arrayToObj(data.data || []);
        yield put(fetchedTrendGifs({ gifs }));
    } catch(e) {
        yield put(fetchedTrendGifs({error: e}));
    }

}

function* watchTrendGifsToLoad() {
    yield takeEvery(TREND_GIFS_LOAD, getTrendGifs);
}

function* rootSaga() {
    yield* watchTrendGifsToLoad();
}

export default rootSaga;


