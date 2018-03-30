const TRENDING_REQUEST = 'TRENDING_REQUEST';
const SEARCH_REQUEST = 'SEARCH_REQUEST';
const GIFS_LOADED = 'GIFS_LOADED';
const GIFS_LOAD_ERROR = 'GIFS_LOAD_ERROR';

const trendingRequest = text => ({ type: TRENDING_REQUEST, text });
const searchRequest = text => ({ type: SEARCH_REQUEST, text });

const gifsLoaded = gifsList => {
	return { type: GIFS_LOADED, gifsList };
};
const gifsLoadError = (error, errorInfo) => ({
	type: GIFS_LOAD_ERROR,
	error,
	errorInfo
});

export default {
	types: {
		TRENDING_REQUEST,
		GIFS_LOADED,
		GIFS_LOAD_ERROR,
		SEARCH_REQUEST
	},
	creators: {
		trendingRequest,
		gifsLoaded,
		gifsLoadError,
		searchRequest
	}
};
