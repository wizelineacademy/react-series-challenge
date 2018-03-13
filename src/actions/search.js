const REQUEST_SEARCH = 'REQUEST_SEARCH';
const LOADING_SEARCHING = 'LOADING_SEARCHING';
const GET_SEARCHING = 'GET_SEARCHING';
const SET_SEARCHING_ERROR = 'SET_SEARCHING_ERROR';

const requestSearch = text => ({ type: REQUEST_SEARCH, payload: text });
const loadingSearching = () => ({ type: LOADING_SEARCHING });
const loadSearching = payload => ({ type: GET_SEARCHING, payload });
const setError = error => ({ type: SET_SEARCHING_ERROR, payload: error });

export default {
  types: { REQUEST_SEARCH, LOADING_SEARCHING, GET_SEARCHING, SET_SEARCHING_ERROR },
  creators: { requestSearch, loadingSearching, loadSearching, setError },
};
