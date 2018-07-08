import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import SearchFunctions from '../actions/searchValues';
import getData from '../api/api'

const {getTrendingGifs} = SearchFunctions.creators;
const {REQUEST_API_DATA} = SearchFunctions.types;

function* getDataFromTrending() {
    try{
        let data = yield call(getData);
        console.log("datos", data);
        yield put(getTrendingGifs({ data }));
    } catch(e){
        console.log("ERROR", e);
    }
}

function* setValuesTrending() {
    yield takeEvery(REQUEST_API_DATA, getDataFromTrending);
}

function* rootSaga () {
    yield setValuesTrending();
}

export default rootSaga;