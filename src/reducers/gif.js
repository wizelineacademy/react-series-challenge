import { getGif } from '../sources/gif';

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

const LOADING_GIF = 'LOADING_GIF';
const GET_GIF = 'GET_GIF';
const SET_GIF_ERROR = 'SET_GIF_ERROR';

const loadingGif = () => ({ type: LOADING_GIF });
const loadGif = payload => ({ type: GET_GIF, payload });
const setError = error => ({ type: SET_GIF_ERROR, payload: error });

export const fetchGif = id => (dispatch) => {
  dispatch(loadingGif());
  getGif(id)
    .then(response => dispatch(loadGif(response.data)))
    .catch(error => dispatch(setError(error)));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_GIF: return { ...state, loading: true };
    case GET_GIF: return { data: action.payload, error: undefined, loading: false };
    case SET_GIF_ERROR: return { data: undefined, error: action.payload, loading: false };
    default: return state;
  }
};
