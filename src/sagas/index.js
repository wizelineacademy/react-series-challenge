import { call, put, all } from "redux-saga/effects";
import * as actions from '../actions';
import http_request from '../lib/http_request';

export function* watchGetAllTrendingGif() {
    try {
        const options = {
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/trending?limit=25&offset=50&rating=g&api_key=8lCcODDfELugUIKA3mCMdGbp1UBdtx15'
        };
    
        const gifs = yield call(http_request(options));
        yield put(actions.receiveTrendingGifs(gifs));    
    } catch(error) {
        yield put({ type: actions.GET_TRENDING_GIF_FAILED, error });
    }
}

export default function* rootSaga() {
    yield all([
        watchGetAllTrendingGif(),
    ]);
} 