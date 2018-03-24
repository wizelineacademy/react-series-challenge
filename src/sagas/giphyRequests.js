import { call, takeEvery, put } from 'redux-saga/effects';
import { loadTrending } from '../api/giphy';
import requests from '../actions/requests';

export function* loadTrendingSaga() {
	console.log('[SAGA] loadTrendingSaga...');
	try {
		const giphyResponse = yield call(loadTrending);
		console.log(giphyResponse);
		yield put(requests.creators.trendingLoaded(giphyResponse));
	} catch (error) {
		yield put(requests.creators.trendingLoadError(error));
	}
}

export default function* giphySaga() {
	yield loadTrendingSaga();
}
