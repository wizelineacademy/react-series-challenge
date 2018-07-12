import React from 'react';
import search from '../../reducers/search';
import searchActions from '../../actions/search';

describe('Search Reducer', () => {
	const initSearchState = {
		term: '',
		favsTerm: '',
	};
	it('should search term',() => {
		const action = {
			type: searchActions.types.SEARCH_CARDS,
			payload: { searchTerm: 'search' },
		};
		const modSearchState = {
			term: 'search',
			favsTerm: '',
		};
		expect(search(undefined,action)).toEqual(modSearchState);
	});
	it('should not search empty term',() => {
		const action = {
			type: searchActions.types.SEARCH_CARDS,
			payload: { },
		};
		const modSearchState = {
			term: '',
			favsTerm: '',
		};
		expect(search(undefined,action)).toEqual(modSearchState);
	});
	it('should search favs',() => {
		const action = {
			type: searchActions.types.SEARCH_FAVS,
			payload: { searchTerm: 'search' },
		};
		const modSearchState = {
			term: '',
			favsTerm: 'search',
		};
		expect(search(undefined,action)).toEqual(modSearchState);
	});
	it('should not search fav empty term',() => {
		const action = {
			type: searchActions.types.SEARCH_FAVS,
			payload: { },
		};
		const modSearchState = {
			term: '',
			favsTerm: '',
		};
		expect(search(undefined,action)).toEqual(modSearchState);
	});
	it('should DEFAULT', () => {
		const action = {
			type: 'default',
			payload: { },
		};
		const modSearchState = {...initSearchState};
		expect(search(undefined,action)).toEqual(modSearchState);
	});
});
