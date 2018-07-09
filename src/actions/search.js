import { createAction } from 'redux-actions';

const SEARCH_GIFS_GET = 'SEARCH_GIFS_GET';
const SEARCH_GIFS_FETCHED = 'SEARCH_GIFS_FETCHED';

const getSearchGifs = (payload = {}) => ({ type: SEARCH_GIFS_GET, payload });
const fetchedSearchGifs = createAction(SEARCH_GIFS_FETCHED);

export default {
  types: {
    SEARCH_GIFS_GET,
    SEARCH_GIFS_FETCHED
  },
  creators: {
    getSearchGifs,
    fetchedSearchGifs
  }
};
