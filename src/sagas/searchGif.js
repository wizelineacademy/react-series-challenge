import { call, put, takeEvery } from "redux-saga/effects";
import http_request from '../lib/http_request';
import * as actions from '../actions';

export function* searchGif() {
    try {
        const options = {
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=8lCcODDfELugUIKA3mCMdGbp1UBdtx15&limit=5'
        };
    
        const result = yield call(http_request(options));
        yield put(actions.searchGif(result));
    } catch(error) {
        yield put(error);
    }
}


export function* watchSearchGif() {
    yield takeEvery('SEARCH_EVENT', searchGif);
}


export default  watchSearchGif;