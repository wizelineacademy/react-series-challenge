const TRENDING_REQUEST = 'TRENDING_REQUEST';
const SEARCH_REQUEST = 'SEARCH_REQUEST';
const TRENDING_LOADED = 'TRENDING_LOADED';
const TRENDING_LOAD_ERROR = 'TRENDING_LOAD_ERROR';

const trendingRequest = () => ({ type: TRENDING_REQUEST });

const trendingLoaded = gifsList => ({ type: TRENDING_LOADED, gifsList });
const trendingLoadError = error => ({ type: TRENDING_LOAD_ERROR, error });

export default {
	types: {
		TRENDING_REQUEST,
		TRENDING_LOADED,
		TRENDING_LOAD_ERROR
	},
	creators: {
		trendingRequest,
		trendingLoaded,
		trendingLoadError
	}
};
