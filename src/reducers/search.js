import searchActions from "../actions/search";

const initialState = {
  searchInput: "",
  searchFavorite: ""
};

const searchReducer = (state = initialState, action) => {
  const { type, query } = action;

  switch (type) {
    case searchActions.types.SEARCH_INPUT:
      return { ...state, searchInput: query };
    case searchActions.types.SEARCH_FAVORITE:
      return { ...state, searchFavorite: query };
    default:
      return state;
  }
};

export default searchReducer;
