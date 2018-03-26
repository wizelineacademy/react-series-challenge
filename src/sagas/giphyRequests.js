import { call, takeEvery, put } from 'redux-saga/effects';
import { loadTrending, loadSearch } from '../api/giphy';
import requests from '../actions/requests';

export function* loadTrendingSaga() {
	//console.log('[SAGA] loadTrendingSaga...');
	try {
		const giphyResponse = yield call(loadTrending);
		yield put(requests.creators.gifsLoaded(giphyResponse));
	} catch (error) {
		yield put(requests.creators.gifsLoadError(error));
	}
}

export function* loadSearchSaga(action) {
	//console.log('[SAGA] loadSearchSaga...');
	try {
		const giphyResponse = yield call(() => loadSearch(action.text));
		yield put(requests.creators.gifsLoaded(giphyResponse));
	} catch (error) {
		yield put(requests.creators.gifsLoadError(error));
	}
}

export default function* giphySaga() {
	yield takeEvery(requests.types.TRENDING_REQUEST, loadTrendingSaga);
	yield takeEvery(requests.types.SEARCH_REQUEST, loadSearchSaga);
}
