import { all } from 'redux-saga/effects';
import giphySaga, { loadTrendingSaga } from './giphyRequests.js';

export function* greetingsSaga() {
	console.log('is this running?');
}

export default function* rootSaga() {
	console.log('Saga loaded');
	yield all([greetingsSaga(), giphySaga()]);
}
