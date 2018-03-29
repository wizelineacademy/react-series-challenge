import reducer from './gifs';
import actions from '../actions/requests';

describe('gifs reducer', () => {
	it('It should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			gifsList: [],
			search: '',
			fetching: false,
			trending: true,
			searching: false,
			error: false,
			errorInfo: ''
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
					type: actions.types.GIFS_LOADED,
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
