export const QUERY_SEARCH = 'QUERY_SEARCH';
export const QUERY_SEARCH_SUCCESS = 'QUERY_SEARCH_SUCCESS';
export const QUERY_SEARCH_ERROR = 'QUERY_SEARCH_ERROR';

export function querySearch(param) {
  return {
    type: QUERY_SEARCH,
    param
  };
}

export function querySearchSuccess(data) {
  return {
    type: QUERY_SEARCH_SUCCESS,
    data
  };
}

export function querySearchError(error) {
  return {
    type: QUERY_SEARCH_ERROR,
    error
  };
}