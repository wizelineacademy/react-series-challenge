import { call, put, takeEvery, all, takeLatest, select } from 'redux-saga/effects';
import SearchFunctions from '../actions/searchValues';
import {getDataTrend, getDataSearch} from '../api/api'

const {getTrendingGifs, searchedSpecifiedGifs} = SearchFunctions.creators;
const {REQUEST_API_DATA, REQUEST_API_DATA_SEARCHED} = SearchFunctions.types;
const getToken = (state) => state

function* getDataFromTrending() {
    try{
        let data = yield call(getDataTrend);
        console.log("datos", data);
        yield put(getTrendingGifs({ data }));
    } catch(e){
        console.log("ERROR", e);
    }
}

function* getDataFromSearch() {
    try{
        const token = yield select(getToken)
        console.log("TOKEN", token);
        let data = yield call(() => getDataSearch(token.searchedValue));
        console.log("datos buqueda", data);
        yield put(searchedSpecifiedGifs({ data }));
    } catch(e){
        console.log("ERROR", e);
    }
}

function* setValuesTrending() {
    yield takeEvery(REQUEST_API_DATA, getDataFromTrending);
}

function* setValuesSearched() {
    yield takeEvery(REQUEST_API_DATA_SEARCHED, getDataFromSearch);
}

function* rootSaga () {
    yield all([
        setValuesSearched(),
        setValuesTrending(),
    ]);
}

export default rootSaga;