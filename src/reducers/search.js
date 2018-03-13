import search from '../actions/search';

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case search.types.LOADING_SEARCHING: return { ...state, loading: true };
    case search.types.GET_SEARCHING: return { data: action.payload, error: undefined, loading: false };
    case search.types.SET_SEARCHING_ERROR: return { data: undefined, error: action.payload, loading: false };
    default: return state;
  }
};
