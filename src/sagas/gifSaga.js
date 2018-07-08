import { put, call } from 'redux-saga/effects';
import { fetchGifsTrending, fetchGifsSearch, } from '../Api/api';
import * as types from '../constants/actionTypes';


export function* gifsTrending({ payload }) {
    try {
        const gifs = yield call(fetchGifsTrending, payload);
        yield put({ type: types.GIFS_TRENDING_GET, gifs });
    } catch (error) {
        yield put({ type: 'SEARCH_GIF_ERROR', error });
    }
}

export function* gifsSearch({ payload }) {
    try {
        const gifs = yield call(fetchGifsSearch, payload);
        yield put({ type: types.GIFS_SEARCH_GET, gifs });
    } catch (error) {
        yield put({ type: 'SEARCH_GIF_ERROR', error });
    }
}