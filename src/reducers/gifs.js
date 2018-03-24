import requests from '../actions/requests';

const initialState = {
	gifsList: [],
	fetching: false
};

const gifsReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case requests.types.TRENDING_REQUEST:
			return {
				...state,
				fetching: true
			};
		case requests.types.TRENDING_LOADED:
			return {
				...state,
				fetching: false,
				...{ gifsList: action.gifsList }
			};
		case requests.types.TRENDING_LOAD_ERROR:
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
