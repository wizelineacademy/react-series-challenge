import reducer from './user';
import actions from '../actions/favorites';

describe('user reducer', () => {
	it('It should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			favorites: {}
		});
	});

	it('It should update favorites list', () => {
		expect(
			reducer(
				{
					favorites: {}
				},
				{
					type: actions.types.LOAD_FAVORITES,
					favorites: { id123: { src: 'src', title: 'title', search: 'search' } }
				}
			)
		).toEqual({
			favorites: { id123: { src: 'src', title: 'title', search: 'search' } }
		});
	});
});
