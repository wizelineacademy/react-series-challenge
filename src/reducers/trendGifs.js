import trendGifsActions from "../actions/trendGifs";

// reducer initial state
const initialState = {
  fetching: false,
  data: null,
  error: null
};

const trendGifs = (state = initialState, action) => {
  const { type, data, error } = action;
  switch (type) {
    case trendGifsActions.types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case trendGifsActions.types.API_CALL_SUCCESS:
      return { ...state, fetching: false, data };
    case trendGifsActions.types.API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error };
    default:
      return state;
  }
};

export default trendGifs;
