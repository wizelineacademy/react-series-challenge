import { asyncActionType } from '../utils';

export const FETCH_TRENDING_GIFS = asyncActionType("FETCH_TRENDING_GIFS");
export const fetchTrendingGifs = () => (
  { type: FETCH_TRENDING_GIFS.PENDING }
);
export const fetchTrendingGifsSuccess = (gifs) => (
  { type: FETCH_TRENDING_GIFS.SUCCESS, data: { gifs }}
);
export const fetchTrendingGifsError = (message) => (
  { type: FETCH_TRENDING_GIFS.ERROR, data: { message } }
);


export const SEARCH_GIFS = asyncActionType("SEARCH_GIFS");
export const searchGifs = text => (
  { type: SEARCH_GIFS.PENDING, payload: { text } }
);
export const searchGifsSuccess = (gifs) => (
  { type: SEARCH_GIFS.SUCCESS, data: { gifs }}
);
export const searchGifsError = (message) => (
  { type: SEARCH_GIFS.ERROR, data: { message } }
);
