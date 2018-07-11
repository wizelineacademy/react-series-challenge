import { gifsTrending, gifsSearch } from '../../sagas/gifSaga';
import { fetchGifsTrending, fetchGifsSearch } from '../../Api/api';
import { call } from 'redux-saga/effects';

describe('gifsTrending test', () => {
	test('Should get gifs trendins', () => {
		const trendingSaga = gifsTrending().next().value;
		expect(trendingSaga).toEqual(call(fetchGifsTrending));
	});

	test('Should get gifs trendins', () => {
		const gifsSaga = gifsSearch({ payload: 'car' }).next().value;
		expect(gifsSaga).toEqual(call(fetchGifsSearch, 'car'));
	});
});