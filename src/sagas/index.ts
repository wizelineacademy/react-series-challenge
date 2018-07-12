import { takeLatest, takeEvery, put, all, call, Effect, TakeEffect } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { SEARCH_TRENDING, fetched_gifs, FETCH_TRENDING, fetch_gifs } from '../actions/gifs';
import * as API from '../api';
import { Action } from 'redux-actions';

function* watchGifs() {
    // TODO: Implement fetching
    yield takeEvery("AN_ACTION", () => console.log("Requestiong gifs..."));
}

function* searchTrending(action: Action<any>) {
    console.log('Searching in Trending...');
    const { data } = yield(call(API.search, action.payload));
    console.log(action, data);

    yield put(fetched_gifs(data));
}

function* watchSearchTrending() {
    yield takeLatest(SEARCH_TRENDING, searchTrending);
}
function* rootSaga() {
    yield all([
        watchSearchTrending(),
    ]);
}

export default rootSaga;