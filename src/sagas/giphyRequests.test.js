import { loadTrendingSaga } from './giphyRequests';
import { call } from 'redux-saga/effects';
import { loadTrending } from '../api/giphy';

describe('Sagas', () => {
	it('loadTrendingSaga should load images', () => {
		expect(loadTrendingSaga().next().value).toEqual(call(loadTrending));
	});
});
