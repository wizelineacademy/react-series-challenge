import { takeEvery, call, put } from "redux-saga/effects";
import search from '../actions/search'
import config from '../config'
import axios from "axios";

const { types: { SEARCH_GET }, creators: { fetchedSearch } } = search

function* watchSearchRequested() {
    yield takeEvery(SEARCH_GET, getSearch)
}

function fetchSearch(search) {
    return axios.get(`${config.HOST}${config.endpoints.SEARCH}?q=${search}&api_key=${config.KEY}`)
        .then(response => response.data)
}

function* getSearch(action) {
    try {
        const [ search ] = action.payload
        const { data } = yield call(fetchSearch, search)
        yield put(fetchedSearch(data))
    } catch (error) {
        console.error(error)
    }
}

export {
    watchSearchRequested
}

