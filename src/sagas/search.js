import { delay } from 'redux-saga'
import { takeLatest, all, put, call } from "redux-saga/effects";
import search from '../actions/search'
import axios from "axios";
import api from '../api';

const { types: { SEARCH_GET }, creators: { fetchedSearch } } = search
const { HOST, endpoints: { SEARCH }, KEY } = api

function* watchSearch() {
    yield all([
        takeLatest(SEARCH_GET, getSearch)
    ])
}

function* getSearch(action) {
    try {
        yield call(delay, 500)
        const { payload } = action
        const { data } = yield call(fetchSearch, payload)
        yield put(fetchedSearch(data))
    } catch (error) {
        console.error(error)
    }
}

function fetchSearch(search) {
    console.log(search)
    return axios.get(`${HOST}${SEARCH}?q=${search}&api_key=${KEY}`)
        .then(response => response.data)
}



export {
    watchSearch
}

