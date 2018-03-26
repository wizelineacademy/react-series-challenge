const TRENDING_REQUEST = 'TRENDING_REQUEST';
const SEARCH_REQUEST = 'SEARCH_REQUEST';
const GIFS_LOADED = 'GIFS_LOADED';
const GIFS_LOAD_ERROR = 'GIFS_LOAD_ERROR';

const trendingRequest = () => ({ type: TRENDING_REQUEST });
const searchRequest = text => ({ type: SEARCH_REQUEST, text });

const gifsLoaded = gifsList => {
	return { type: GIFS_LOADED, gifsList };
};
const gifsLoadError = error => ({ type: GIFS_LOAD_ERROR, error });

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
