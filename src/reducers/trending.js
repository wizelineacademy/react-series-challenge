import { getTrending } from '../sources/trending';

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

const LOADING_TRENDING = 'LOADING_TRENDING';
const GET_TRENDING = 'GET_TRENDING';
const SET_TRENDING_ERROR = 'SET_TRENDING_ERROR';

const loadingTrending = () => ({ type: LOADING_TRENDING });
const loadTrending = payload => ({ type: GET_TRENDING, payload });
const setError = error => ({ type: SET_TRENDING_ERROR, payload: error });

export const fetchTrending = () => (dispatch) => {
  dispatch(loadingTrending());
  getTrending()
    .then(response => dispatch(loadTrending(response.data)))
    .catch(error => dispatch(setError(error)));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRENDING: return { ...state, loading: true };
    case GET_TRENDING: return { data: action.payload, error: undefined, loading: false };
    case SET_TRENDING_ERROR: return { data: undefined, error: action.payload, loading: false };
    default: return state;
  }
};
