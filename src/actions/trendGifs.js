const TREND_GIFS_FETCHED = 'TREND_GIFS_FETCHED';
const TREND_GIFS_FAILED = 'TREND_GIFS_FAILED';
const TREND_GIFS_LOAD = 'TREND_GIFS_LOAD';

const loadTrendGifs = (payload = {}) => ({ type: TREND_GIFS_LOAD, payload });
const fetchedTrendGifs  = (payload = {}) => ({ type: TREND_GIFS_FETCHED, payload });
const failedFetchTrendGifs = (payload = {}) => ({ type: TREND_GIFS_FAILED, payload });

export default {
    types: {
        TREND_GIFS_LOAD,
        TREND_GIFS_FETCHED,
        TREND_GIFS_FAILED,
    },
    creators: {
        loadTrendGifs,
        fetchedTrendGifs,
        failedFetchTrendGifs
    },
};

