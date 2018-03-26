import requests from '../actions/requests';

const initialState = {
	gifsList: [],
	fetching: false,
	trending: true,
	searching: false
};

const gifsReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case requests.types.TRENDING_REQUEST:
			return {
				...state,
				fetching: true,
				trending: true,
				searching: false
			};
		case requests.types.SEARCH_REQUEST:
			return {
				...state,
				fetching: true,
				trending: false,
				searching: true
			};
		case requests.types.GIFS_LOADED:
			return {
				...state,
				fetching: false,
				gifsList: action.gifsList
			};
		case requests.types.GIFS_LOAD_ERROR:
			return {
				...state,
				fetching: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default gifsReducer;
