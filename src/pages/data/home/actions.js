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
