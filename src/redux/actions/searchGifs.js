import { createAction } from 'redux-actions';
export const REQUEST_SEARCH_GIFS="REQUEST_SEARCH_GIFS";
export const RECEIVE_SEARCH_GIFS="RECEIVE_SEARCH_GIFS";

export const requestSearchGifs = createAction(REQUEST_SEARCH_GIFS);
export const receiveSearchGifs = (payload={}) => ({ type: RECEIVE_SEARCH_GIFS, payload });

export default {
    types: {
        REQUEST_SEARCH_GIFS,
        RECEIVE_SEARCH_GIFS,
    },
    creators: {
        requestSearchGifs,
        receiveSearchGifs,
    },
  };