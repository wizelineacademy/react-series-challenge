import axios from 'axios';
import {rootSaga, watchForSearch,searchCards,getTermState,fetchSearchCards, 
	watchForSearchFavs, searchFavCards,
	watchForLoadFavs,loadFavCard} from '../../sagas';
import { call,takeEvery,put,all,select } from 'redux-saga/effects';

describe('Sagas', () => {
	jest.mock('axios');
	const cardsArr = [
		{
			id: 'QOvxr9pGvmZN0LKvqu',
			images: {
				original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		},
		{
			id: 'uUkFJshdZAumBu0SMc',
			images: {
				original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		}
	];
	describe('Search sagas', () => {
		const iterator = watchForSearch();
		it('should takeEvery watchForSearch', () => {
			const expected = takeEvery('SEARCH_CARDS',searchCards);
			const next = iterator.next();
			expect(next.value).toEqual(expected);
		});
	});
	describe('Search sagas searchCards', () => {
		const iterator = searchCards();
		const searchState = {term:'algo'};
		it('should searchCards select', () => {
			const expected = select(getTermState);
			const next = iterator.next(searchState);
			expect(next.value).toEqual(expected);
		});
		/*it('should searchCards call', () => {
			const resp = { data: cardsArr };
			const myMockFn = jest.fn( ({term}) => resp );
			const expected = call(myMockFn,searchState);
			const next = iterator.next(searchState);
			expect(next.value).toEqual(expected);
		});*/
		
	});
	describe('Search sagas watchForSearchFavs', () => {
		const iterator = watchForSearchFavs();
		it('should takeEvery watchForSearchFavs', () => {
			const expected = takeEvery('SEARCH_FAVS',searchFavCards);
			const next = iterator.next();
			expect(next.value).toEqual(expected);
		});
	});
	/**/
	/*describe('Search sagas loadFavCard', () => {
		const iterator = loadFavCard();
		it('should loadFavCard', () => {
			const expected = put({ type:'LOAD_CARDS', payload: {cards:favsArr} });
			const next = iterator.next();
			expect(next.value).toEqual(expected);
		});
	});*/
	describe('Search sagas watchForLoadFavs', () => {
		const iterator = watchForLoadFavs();
		it('should takeEvery watchForLoadFavs', () => {
			const expected = takeEvery('LOAD_FAVORITES',loadFavCard);
			const next = iterator.next();
			expect(next.value).toEqual(expected);
		});
	});
});