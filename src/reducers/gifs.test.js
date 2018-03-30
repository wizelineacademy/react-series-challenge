import reducer from './gifs';
import actions from '../actions/requests';

describe('gifs reducer', () => {
	it('should return the initial state', () => {
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

	it('should update gifs list', () => {
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
	it('should put fetch trending to true', () => {
		expect(
			reducer(
				{
					gifsList: [],
					fetching: false
				},
				{
					type: actions.types.TRENDING_REQUEST,
					text: 'abc'
				}
			)
		).toEqual({
			gifsList: [],
			fetching: true,
			trending: true,
			searching: false,
			search: 'abc'
		});
	});
	it('should put fetch searching to true', () => {
		expect(
			reducer(
				{
					gifsList: [],
					fetching: false
				},
				{
					type: actions.types.SEARCH_REQUEST,
					text: 'abc'
				}
			)
		).toEqual({
			gifsList: [],
			fetching: true,
			trending: false,
			searching: true,
			search: 'abc'
		});
	});
	it('should set error true and errorInfo text', () => {
		expect(
			reducer(
				{
					gifsList: [],
					fetching: false,
					error: false,
					errorInfo: ''
				},
				{
					type: actions.types.GIFS_LOAD_ERROR,
					error: true,
					errorInfo: 'errorInfo'
				}
			)
		).toEqual({
			gifsList: [],
			fetching: false,
			error: true,
			errorInfo: 'errorInfo'
		});
	});
});
