export const SEARCH_GIFS_REQUEST = 'SEARCH_GIFS_REQUEST';
export const SEARCH_GIFS_SUCCESS = 'SEARCH_GIFS_SUCCESS';
export const SEARCH_GIFS_FAIL = 'SEARCH_GIFS_FAIL';
export const SEARCH_GIFS_CHANGE_QUERY = 'SEARCH_GIFS_CHANGE_QUERY';

export const searchGifsRequest = () => ({
  type: SEARCH_GIFS_REQUEST
});

export const searchGifsSuccess = (response) => ({
  type: SEARCH_GIFS_SUCCESS,
  payload: response
});

export const searchGifsChangeQuery = (query) => ({
  type: SEARCH_GIFS_CHANGE_QUERY,
  payload: query
});
