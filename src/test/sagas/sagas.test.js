import axios from 'axios';
import {rootSaga, watchForSearch,searchCards,getTermState,fetchSearchCards, 
	watchForSearchFavs, searchFavCards} from '../../sagas';
import { call,takeEvery,put,all,select } from 'redux-saga/effects';

describe('Sagas', () => {
	describe('Search sagas', () => {
		const iterator = watchForSearch();
		it('should takeEvery SEARCH_CARDS', () => {
			const expected = takeEvery('SEARCH_CARDS',searchCards);
			const next = iterator.next();
			expect(next.value).toEqual(expected);
		});
	});
	describe('Search sagas searchCards', () => {
		const iterator = searchCards();
		const searchState = {term:'algo'};
		it('should searchCards', () => {
			const expected = select(getTermState);
			const next = iterator.next(searchState);
			//console.log('NEXT',next);
			expect(next.value).toEqual(expected);
		});
	});
	describe('Search sagas watchForSearchFavs', () => {
		const iterator = watchForSearchFavs();
		it('should takeEvery watchForSearchFavs', () => {
			const expected = takeEvery('SEARCH_FAVS',searchFavCards);
			const next = iterator.next();
			expect(next.value).toEqual(expected);
		});
	});
});