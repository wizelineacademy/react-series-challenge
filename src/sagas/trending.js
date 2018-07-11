import { takeEvery, call, put, all } from "redux-saga/effects";
import trending from '../actions/trending'
import api from '../api'
import axios from "axios";

const { HOST, KEY, endpoints: { TRENDING } } = api
const { types: { TRENDING_GET }, creators: { fetchedTrending } } = trending

export function* watchTrending() {
    yield all([
        takeEvery(TRENDING_GET, getTrending)
    ])
}

function* getTrending() {
    try {
        const { data } = yield call(fetchTrending)
        yield put(fetchedTrending(data))
    }
    catch (error) {
        console.error(error)
    }
}

function fetchTrending() {
    return axios.get(`${HOST}${TRENDING}?api_key=${KEY}`)
        .then(response => response.data)
}
