
const SEARCH_TERM_UPDATE_REQUEST = 'SEARCH_TERM_UPDATE_REQUEST'
const SEARCH_TERM_UPDATE = 'SEARCH_TERM_UPDATE'
const SEARCH_REQUEST = 'SEARCH_REQUEST';
const SEARCH_START = 'SEARCH_START';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAIL = 'SEARCH_FAIL';

const updateSearchTermRequest = data => ({
  type: SEARCH_TERM_UPDATE_REQUEST,
  payload: data
})

const updateSearchTerm = data => ({
  type: SEARCH_TERM_UPDATE,
  payload: data
})
const searchRequest = data => ({
  type: SEARCH_REQUEST,
  payload: data
});

const searchStart = () => ({
  type: SEARCH_START,
});

const searchSuccess = data => ({
  type: SEARCH_SUCCESS,
  payload: data,
});

const searchFail = error => ({
  type: SEARCH_FAIL,
  payload: error,
});

export default {
  types: {
    SEARCH_TERM_UPDATE_REQUEST,
    SEARCH_TERM_UPDATE,
    SEARCH_REQUEST,
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
  },
  creators: {
    updateSearchTermRequest,
    updateSearchTerm,
    searchRequest,
    searchStart,
    searchSuccess,
    searchFail,
  },
};
