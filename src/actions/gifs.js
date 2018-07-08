import { createAction } from 'redux-actions';

const TRENDING_GIFS_GET = 'TRENDING_GIFS_GET';
const TRENDING_GIFS_FETCHED = 'TRENDING_GIFS_FETCHED';

const getTrendingGifs = (payload = {}) => ({ type: TRENDING_GIFS_GET, payload });
const fetchedTrendingGifs = createAction(TRENDING_GIFS_FETCHED);

export default {
  types: {
    TRENDING_GIFS_GET,
    TRENDING_GIFS_FETCHED
  },
  creators: {
    getTrendingGifs,
    fetchedTrendingGifs
  }
};
