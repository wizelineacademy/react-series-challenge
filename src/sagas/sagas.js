import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import SearchFunctions from '../actions/searchValues';
import {getDataTrend, getDataSearch} from '../api/api'

const {getTrendingGifs, searchedSpecifiedGifs} = SearchFunctions.creators;
const {REQUEST_API_DATA, REQUEST_API_DATA_SEARCHED} = SearchFunctions.types;
const getToken = (state) => state

function* getDataFromTrending() {
    try{
        let data = yield call(getDataTrend);
        yield put(getTrendingGifs({ data }));
    } catch(e){
        console.error("ERROR", e);
    }
}

function* getDataFromSearch() {
    try{
        const token = yield select(getToken)
        let data = yield call(() => getDataSearch(token.searchedValue));
        yield put(searchedSpecifiedGifs({ data }));
    } catch(e){
        console.error("ERROR", e);
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