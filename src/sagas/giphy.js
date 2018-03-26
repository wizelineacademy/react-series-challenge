import { call, takeEvery, put } from 'redux-saga/effects';
import { getTrendingList, searchGifs, getById } from '../api/giphy';
import giphyActions from '../actions/giphy';

export function* getTopTrending(records) {
    try {
        const topTrending = yield call(getTrendingList, records);
        yield put(giphyActions.creators.getTrendingListComplete(topTrending));
    } catch (error) {
        yield put(giphyActions.creators.getTrendingListError(error));
    }
}

export function* toSearchGifs(query, offset = 0) {
    try {
        const searchResult = yield call(searchGifs, { query, offset });
        yield put(giphyActions.creators.getSearchListComplete(searchResult));
    } catch (error) {
        yield put(giphyActions.creators.getSearchListError(error));
    }
}

export function* getGifById(id) {
    try{
        const getResults = yield call(getById, id);
    }catch(error) {
        yield put(giphyActions.creators.getByIdError(error))
    }
}

export default function* trendingSaga() {
    yield takeEvery(giphyActions.types.GET_TRENDING_START, getTopTrending);
    yield takeEvery(giphyActions.types.GET_SEARCH_START, toSearchGifs);
    yield takeEvery(giphyActions.types.GET_BY_ID_START, getGifById);
}