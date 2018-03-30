import search from '../actions/search';

const initialState = {
  searchFetching: false,
};

const searchReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case search.types.GET_SEARCH_REQUESTED:
        return {
        ...state,
        searchFetching: true,
      };
    case search.types.GET_SEARCH_COMPLETED:
      return {
        ...state,
        searchFetching: false,
        ...action.search,
      };
    case search.types.GET_SEARCH_FAILED:
      return {
        ...state,
        searchFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default searchReducer;
