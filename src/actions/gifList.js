import { createAction } from 'redux-actions';

const GET_TRENDING_GIFS = 'GET_TRENDING_GIFS';
const FETCHED_TRENDING_GIFS = 'FETCHED_TRENDING_GIFS';

const getTrendingGifs = createAction(GET_TRENDING_GIFS);
const fetchedTrendingGifs = createAction(FETCHED_TRENDING_GIFS);

export default {
    types: {
        GET_TRENDING_GIFS,
        FETCHED_TRENDING_GIFS
    },
    creators: {
        getTrendingGifs,
        fetchedTrendingGifs
    },
};
