const GET_SEARCH_REQUESTED = 'GET_SEARCH_REQUESTED';
const GET_SEARCH_COMPLETED = 'GET_SEARCH_COMPLETED';
const GET_SEARCH_FAILED = 'GET_SEARCH_FAILED';

const getSearchRequested = (search = '') => ({
  type: GET_SEARCH_REQUESTED,
  queryStr: search,
});

const getSearchCompleted = search => ({
  type: GET_SEARCH_COMPLETED,
  search,
});

const getSearchFailed = error => ({
  type: GET_SEARCH_FAILED,
  error,
});

export default {
  types: {
    GET_SEARCH_REQUESTED,
    GET_SEARCH_COMPLETED,
    GET_SEARCH_FAILED,
  },
  creators: {
    getSearchRequested,
    getSearchCompleted,
    getSearchFailed,
  },
};
