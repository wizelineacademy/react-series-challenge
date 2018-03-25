import reducer from './gifs';
import actions from '../actions/requests';

describe('gifs reducer', () => {
	it('It should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			gifsList: [],
			fetching: false
		});
	});

	it('It should update gifs list', () => {
		expect(
			reducer(
				{
					gifsList: [],
					fetching: false
				},
				{
					type: actions.types.TRENDING_LOADED,
					fetching: false,
					gifsList: [{ img: '1' }, { img: '2' }, { img: '3' }]
				}
			)
		).toEqual({
			gifsList: [{ img: '1' }, { img: '2' }, { img: '3' }],
			fetching: false
		});
	});
});
