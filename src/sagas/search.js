import { takeEvery, call, put } from "redux-saga/effects";
import search from '../actions/search'
import config from '../config'

const { types: { SEARCH_GET }, creators: { fetchedSearch } } = search

function* watchSearchRequested() {
    yield takeEvery(SEARCH_GET, getSearch)
}

function fetchSearch(search) {
    return fetch(`${config.HOST}${config.endpoints.SEARCH}?q=${search}&api_key=${config.KEY}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: new Headers()
    }).then(response => response)
}

function* getSearch(action) {
    try {
        const [ search ] = action.payload
        const response = yield call(fetchSearch, search)
        yield put(fetchedSearch(response))
    } catch (error) {
        console.error(error)
    }
}

export {
    watchSearchRequested
}

