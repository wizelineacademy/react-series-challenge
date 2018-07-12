import { call, put } from "redux-saga/effects";
import http_request from '../lib/http_request';
import * as actions from '../actions';

const ajax = (params) => {
    return http_request(params);
}

export function* watchGetAllTrendingGif() {
    try {
        const options = {
            url: 'http://api.giphy.com/v1/gifs/trending?limit=25&offset=50&rating=g&api_key=8lCcODDfELugUIKA3mCMdGbp1UBdtx15&lang=es'
        };
        const gifs = yield call(ajax, options);
        yield put(actions.receiveTrendingGifs(gifs));
    } catch (error) {
        yield put(actions.receiveTrendingGifs(error));
    }
}

export default watchGetAllTrendingGif;