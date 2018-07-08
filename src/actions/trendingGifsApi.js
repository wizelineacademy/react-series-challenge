import { createAction } from 'redux-actions';

const TRENDING_GIFS_FAILED = 'TRENDING_GIFS_FAILED';
const TRENDING_GIFS_FETCHED = 'TRENDING_GIFS_FETCHED';
const TRENDING_GIFS_GET = 'TRENDING_GIFS_GET';


const getTrendingGifs = (payload = {}) => ({ type: TRENDING_GIFS_GET, payload });

const fetchedTrendingGifs = createAction(TRENDING_GIFS_FETCHED);
const failedTrendingGifs = createAction(TRENDING_GIFS_FAILED);

export default {
  types: {
    TRENDING_GIFS_FAILED,
    TRENDING_GIFS_FETCHED,
    TRENDING_GIFS_GET,
  },
  creators: {
    fetchedTrendingGifs,
    getTrendingGifs,
    failedTrendingGifs,
  }
};
