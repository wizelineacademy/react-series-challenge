import { createAction } from 'redux-actions';

const SEARCH_GIFS_FAILED = 'SEARCH_GIFS_FAILED';
const SEARCH_GIFS_GET = 'SEARCH_GIFS_GET';
const SEARCH_GIFS_RECEIVED = 'SEARCH_GIFS_RECEIVED';

const failedSearchGifs = createAction(SEARCH_GIFS_FAILED);
const receivedSearchGifs = (payload = {}) => ({ type: SEARCH_GIFS_RECEIVED, payload });
const searchGifs = (payload = {}) => ({ type: SEARCH_GIFS_GET, payload });

const TRENDING_GIFS_FAILED = 'TRENDING_GIFS_FAILED';
const TRENDING_GIFS_GET = 'TRENDING_GIFS_GET';
const TRENDING_GIFS_RECEIVED = 'TRENDING_GIFS_RECEIVED';

const failedTrendingGifs = createAction(TRENDING_GIFS_FAILED);
const getTrendingGifs = createAction(TRENDING_GIFS_GET);
const receivedTrendingGifs = (payload = {}) => ({ type: TRENDING_GIFS_RECEIVED, payload });

export default {
  types: {
    SEARCH_GIFS_FAILED,
    SEARCH_GIFS_GET,
    SEARCH_GIFS_RECEIVED,
    TRENDING_GIFS_FAILED,
    TRENDING_GIFS_GET,
    TRENDING_GIFS_RECEIVED
  },
  creators: {
    failedSearchGifs,
    receivedSearchGifs,
    searchGifs,
    getTrendingGifs,
    failedTrendingGifs,
    receivedTrendingGifs
  }
};
