export const FETCH_TRENDING_GIFS = 'FETCH_TRENDING_GIFS';
export const FETCH_TRENDING_GIFS_OK = 'FETCH_TRENDING_GIFS_OK';
export const FETCH_TRENDING_GIFS_FAIL = 'FETCH_TRENDING_GIFS_FAIL';

export const fetchTrendingGifs= () => ({
  type: FETCH_TRENDING_GIFS
});

export const fetchTrendingGifsOk= response => ({
  type: FETCH_TRENDING_GIFS_OK,
  payload: response
});

export const fetchTrendingGifsFail= () => ({
  type: FETCH_TRENDING_GIFS_FAIL
});
