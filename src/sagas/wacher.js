import { takeLatest, } from 'redux-saga/effects';
import { gifsTrending, gifsSearch, } from './gifSaga';
import * as types from '../constants/actionTypes';

export function* watchTrending() {
    yield takeLatest(types.GIFS_TRENDING_FETCHED, gifsTrending);
}

export function* watchSearch() {
    yield takeLatest(types.GIFS_SEARCH_FETCHED, gifsSearch);
}