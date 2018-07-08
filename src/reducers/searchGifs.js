import searchGifsActions from "../actions/searchGifs";

// reducer initial state
const initialState = {
  fetching: false,
  data: null,
  error: null
};

const searchGifs = (state = initialState, action) => {
  const { type, data, error } = action;
  switch (type) {
    case searchGifsActions.types.API_CALL_SEARCH_REQUEST:
      return { ...state, fetching: true, error: null };
    case searchGifsActions.types.API_CALL_SEARCH_SUCCESS:
      return { ...state, fetching: false, data };
    case searchGifsActions.types.API_CALL_SEARCH_FAILURE:
      return { ...state, fetching: false, data: null, error };
    default:
      return state;
  }
};

export default searchGifs;
