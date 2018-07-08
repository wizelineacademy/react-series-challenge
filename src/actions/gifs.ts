import { createAction } from 'redux-actions'

export const FETCH_TRENDING   = 'FETCH_TRENDING';
export const FETCHED_TRENDING = 'FETCHED_TRENDING';

export const ADD_FAVORITE    = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const SEARCH_TRENDING = 'SEARCH_TRENDING';

export const fetch_gifs   = createAction(FETCH_TRENDING);
export const fetched_gifs = createAction(FETCHED_TRENDING);

export const toggle_favorite = createAction(TOGGLE_FAVORITE, (payload: any) => payload);

export const search_trending = createAction(SEARCH_TRENDING, (payload: any) => payload);