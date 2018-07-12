import axios from 'axios';
import {all, call, put, select, takeEvery} from 'redux-saga/effects';
import appActions from '../actions';
import {getFilter} from '../selectors/filter';

const {
    GIGHY_GET
} = appActions.types;

const {
    fetchedGiphies
} = appActions.creators;

const API_URL_BASE = 'http://api.giphy.com';
const API_URL_RANDOM = '/v1/gifs/trending?';
const API_URL_SEARCH = '/v1/gifs/search?';
const API_URL_TOKEN = 'api_key=' + process.env.REACT_APP_GIPHY_API_KEY;

const fetchGiphies = (filter) => {

    const url = ("" === filter)
        ? `${API_URL_BASE}${API_URL_RANDOM}${API_URL_TOKEN}`
        : `${API_URL_BASE}${API_URL_SEARCH}${API_URL_TOKEN}&q=` + encodeURIComponent(filter);

    return axios.get(url)
        .then((response) => response);
};

function* getGiphies() {

    const state = yield select(getFilter);

    const {data} = yield call(fetchGiphies, state);

    yield put(fetchedGiphies(data));
}

function* watchGiphiesRequested() {
    yield takeEvery(GIGHY_GET, getGiphies);
}

function* rootSaga() {
    yield all([
        watchGiphiesRequested()
    ]);
}

export default rootSaga;