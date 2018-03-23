import { createAction } from 'redux-actions';

const SEARCH_REQUEST = 'search_request';
const SEARCH_FAILED = 'search_failed';
const SEARCH_COMPLETED = 'search_completed'

const search = (payload = '') => ({ type: SEARCH_REQUEST, payload });
const searchCompleted = (payload = '') => ({ type: SEARCH_REQUEST, payload });
const searchFailed = (payload = '') => ({ type: SEARCH_REQUEST, payload });


export default {
  types: {
    SEARCH_REQUEST,
    SEARCH_FAILED,
    SEARCH_COMPLETED,
  },
  creators: {
    search,
    searchCompleted,
    searchFailed,
  },
};