import actions from './favorites';

describe('Favorite actions', () => {
	it('test loadFavorites', () => {
		const load = actions.creators.loadFavorites({ id123: { src: 'src' } });
		expect(load).toEqual({
			type: 'LOAD_FAVORITES',
			favorites: { id123: { src: 'src' } }
		});
	});

	it('test toggleFavorite', () => {
		const toggle = actions.creators.toggleFavorite(
			'id123',
			'imgsrc',
			'imgtitle',
			'textsearch'
		);
		expect(toggle).toEqual({
			type: 'TOGGLE_FAVORITE',
			id: 'id123',
			src: 'imgsrc',
			title: 'imgtitle',
			search: 'textsearch'
		});
	});
});
