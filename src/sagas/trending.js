import { call, takeEvery, put } from 'redux-saga/effects';
import { getTrendingList } from '../api/trending';
import trendingActions from '../actions/trending';

export function* getTopTrending(records) {
    try {
        const topTrending = yield call(getTrendingList, records);
        yield put(trendingActions.creators.getTrendingListComplete(topTrending));
    } catch (error) {
        yield put(trendingActions.creators.getTrendingListError(error));
    }
}

export default function* trendingSaga() {
    yield takeEvery(trendingActions.types.GET_TRENDING_START, getTopTrending);
}