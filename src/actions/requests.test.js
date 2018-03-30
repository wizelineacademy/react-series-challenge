import actions from './requests';

describe('Requests actions', () => {
	it('test trendingRequest', () => {
		const trending = actions.creators.trendingRequest('testing');
		expect(trending).toEqual({
			type: 'TRENDING_REQUEST',
			text: 'testing'
		});
	});

	it('test gifsLoaded', () => {
		const load = actions.creators.gifsLoaded([1, 2, 3]);
		expect(load).toEqual({
			type: 'GIFS_LOADED',
			gifsList: [1, 2, 3]
		});
	});
	it('test gifsLoadError', () => {
		const toggle = actions.creators.gifsLoadError(
			'No results found',
			'testing'
		);
		expect(toggle).toEqual({
			type: 'GIFS_LOAD_ERROR',
			error: 'No results found',
			errorInfo: 'testing'
		});
	});
	it('test searchRequest', () => {
		const toggle = actions.creators.searchRequest('searchingImages');
		expect(toggle).toEqual({
			type: 'SEARCH_REQUEST',
			text: 'searchingImages'
		});
	});
});
