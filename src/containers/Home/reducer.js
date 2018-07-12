import actions from './actions';

const { GIFS_SET, LOADING_SET, SEARCH_TERM_SET } = actions.types;
const initialState = {
  isLoading: false,
  gifs: [],
  searchTerm: '',
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_SET:
      return { ...state, isLoading: payload };
    case GIFS_SET:
      return { ...state, gifs: payload };
    case SEARCH_TERM_SET:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
};

export default reducer;
