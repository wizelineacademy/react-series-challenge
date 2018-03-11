import { searchGif } from '../sources/search';

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

const LOADING_SEARCHING = 'LOADING_SEARCHING';
const GET_SEARCHING = 'GET_SEARCHING';
const SET_SEARCHING_ERROR = 'SET_SEARCHING_ERROR';

const loadingSearching = () => ({ type: LOADING_SEARCHING });
const loadSearching = payload => ({ type: GET_SEARCHING, payload });
const setError = error => ({ type: SET_SEARCHING_ERROR, payload: error });

export const fetchGifs = text => (dispatch) => {
  dispatch(loadingSearching());
  searchGif(text)
    .then(response => dispatch(loadSearching(response.data)))
    .catch(error => dispatch(setError(error)));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SEARCHING: return { ...state, loading: true };
    case GET_SEARCHING: return { data: action.payload, error: undefined, loading: false };
    case SET_SEARCHING_ERROR: return { data: undefined, error: action.payload, loading: false };
    default: return state;
  }
};
