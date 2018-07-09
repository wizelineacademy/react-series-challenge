import { createAction } from 'redux-actions';

const TRENDING_GIFS_FAILED = 'TRENDING_GIFS_FAILED';
const TRENDING_GIFS_GET = 'TRENDING_GIFS_GET';
const TRENDING_GIFS_RECEIVED = 'TRENDING_GIFS_RECEIVED';

const failedTrendingGifs = createAction(TRENDING_GIFS_FAILED);
const getTrendingGifs = createAction(TRENDING_GIFS_GET);
const receivedTrendingGifs = (payload = {}) => ({ type: TRENDING_GIFS_RECEIVED, payload });

export default {
  types: {
    TRENDING_GIFS_FAILED,
    TRENDING_GIFS_GET,
    TRENDING_GIFS_RECEIVED
  },
  creators: {
    getTrendingGifs,
    failedTrendingGifs,
    receivedTrendingGifs
  }
};
