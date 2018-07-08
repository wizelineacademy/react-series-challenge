import { createAction } from 'redux-actions'

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCHED_TRENDING = 'FETCHED_TRENDING';

export const fetch_gifs = createAction(FETCH_TRENDING);
export const fetched_gifs = createAction(FETCHED_TRENDING);