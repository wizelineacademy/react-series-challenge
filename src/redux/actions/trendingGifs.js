import { createAction } from 'redux-actions';
export const REQUEST_TRENDING_GIFS="REQUEST_TRENDING_GIFS";
export const RECEIVE_TRENDING_GIFS="RECEIVE_TRENDING_GIFS";

export const requestTrendingGifs = createAction(REQUEST_TRENDING_GIFS);
export const receiveTrendingGifs = (payload={}) => ({ type: RECEIVE_TRENDING_GIFS, payload });

export default {
    types: {
        REQUEST_TRENDING_GIFS,
        RECEIVE_TRENDING_GIFS,
    },
    creators: {
        requestTrendingGifs,
        receiveTrendingGifs,
    },
  };