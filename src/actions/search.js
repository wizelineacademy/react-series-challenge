export const FETCH_SEARCH_GIFS = 'FETCH_SEARCH_GIFS';
export const FETCH_SEARCH_GIFS_OK = 'FETCH_SEARCH_GIFS_OK';
export const FETCH_SEARCH_GIFS_FAIL = 'FETCH_SEARCH_GIFS_FAIL';

export const fetchSearchGifs= (toSearch) => ({
  type: FETCH_SEARCH_GIFS,
  payload: toSearch
});

export const fetchSearchGifsOk= response => ({
  type: FETCH_SEARCH_GIFS_OK,
  payload: response
});

export const fetchSearchGifsFail= () => ({
  type: FETCH_SEARCH_GIFS_FAIL
});
