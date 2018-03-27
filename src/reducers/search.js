import searchActions from '../actions/search';

const initalState = {
  q: '',
  gifs: [],
  isLoading: false
};

const searchReducer = (state = initalState, action) => {
  const { type } = action;

  switch (type) {
    case searchActions.types.SEARCH_REQUEST:
      return {
        ...state,
        q: action.q,
        fetching: true,
      };
    case searchActions.types.SEARCH_COMPLETED:
      return {
        ...state,
        fetching: false,
        gifs: action.gifs.concat(),
      };
    case searchActions.types.SEARCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default searchReducer;