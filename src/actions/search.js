const GET_SEARCH_REQUESTED = 'GET_SEARCH_REQUESTED';
const GET_SEARCH_COMPLETED = 'GET_SEARCH_COMPLETED';
const GET_SEARCH_FAILED = 'GET_SEARCH_FAILED';

const getSearchRequested = () => ({
  type: GET_SEARCH_REQUESTED,
});

const getSearchCompleted = data => ({
  type: GET_SEARCH_COMPLETED,
  data,
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