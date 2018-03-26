import { all } from 'redux-saga/effects';
import giphySaga, { loadTrendingSaga } from './giphyRequests.js';

export default function* rootSaga() {
	//console.log('Saga loaded');
	yield all([loadTrendingSaga(), giphySaga()]);
}
