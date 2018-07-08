import { call, put, takeEvery } from "redux-saga/effects";
import http_request from '../lib/http_request';
import * as actions from '../actions';

const ajax = (params) => {
    return http_request(params);
}

export function* searchGifs(res) {
    try {
        const options = {
            url: `http://api.giphy.com/v1/gifs/search?q=${res.result}&api_key=8lCcODDfELugUIKA3mCMdGbp1UBdtx15&limit=5&lang=es`
        };
        const resultSearch = yield call(ajax, options);
        yield put(actions.searchResult(resultSearch));
    } catch(error) {
        yield put({ type: actions.GET_TRENDING_GIF_FAILED, error });
    }
}


export function* watchSearchGifs() {
    yield takeEvery(actions.SEARCH_GIF, searchGifs)
}


export default  watchSearchGifs;