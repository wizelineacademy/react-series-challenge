import { createAction } from 'redux-actions';

const TREND_GIFS_LOAD = 'TREND_GIFS_LOAD';

const loadTrendGifs = (payload = {}) => ({ type: TREND_GIFS_LOAD, payload });

export default {
    types: {
        TREND_GIFS_LOAD,
    },
    creators: {
        loadTrendGifs
    },
};

