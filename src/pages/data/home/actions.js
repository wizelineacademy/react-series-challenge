import { asyncActionType } from '../utils';

export const FETCH_TRENDING_GIFS = asyncActionType("FETCH_TRENDING_GIFS");

export const fetchTrendingGifs = () => (
  { type: FETCH_TRENDING_GIFS.PENDING }
);
export const fetchTrendingGifsSuccess = () => (
  { type: FETCH_TRENDING_GIFS.SUCCESS }
);
export const fetchTrendingGifsError = () => (
  { type: FETCH_TRENDING_GIFS.ERROR }
);
