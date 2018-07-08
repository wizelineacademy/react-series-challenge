const SEARCH_GIFS_LOAD = 'SEARCH_GIFS_LOAD';
const SEARCH_GIFS_FETCHED = 'SEARCH_GIFS_FETCHED';
const SEARCH_GIFS_FAILED = 'SEARCH_GIFS_FAILED';

const loadSearchGifs = (payload = {}) => ({ type: SEARCH_GIFS_LOAD, payload });
const fetchedSearchGifs  = (payload = {}) => ({ type: SEARCH_GIFS_FETCHED, payload });
const failedFetchSearchGifs = (payload = {}) => ({ type: SEARCH_GIFS_FAILED, payload });

export default {
    types: {
        SEARCH_GIFS_LOAD,
        SEARCH_GIFS_FETCHED,
        SEARCH_GIFS_FAILED,
    },
    creators: {
        loadSearchGifs,
        fetchedSearchGifs,
        failedFetchSearchGifs
    },
};

