import { takeEvery, call, put } from "redux-saga/effects";
import trending from '../actions/trending'
import config from '../config'
import axios from "axios";

const { types: { TRENDING_GET }, creators: { fetchedTrending } } = trending

function* watchTrendingGet() {
    yield takeEvery(TRENDING_GET, getSearch)
}

function fetchTrending() {
    return axios.get(`${config.HOST}${config.endpoints.TRENDING}?api_key=${config.KEY}`)
        .then(response => response.data)
}

function* getSearch() {
    try {
        const { data } = yield call(fetchTrending)
        yield put(fetchedTrending(data))
    } catch (error) {
        console.error(error)
    }
}

export {
    watchTrendingGet
}

