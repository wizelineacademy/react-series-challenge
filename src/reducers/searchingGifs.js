import actions from '../actions/searchingGifs';
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  term: '',
};

const searchingGifsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case actions.types.SEARCH_GIFS_REQUESTED:
      return {
        ...state,
        term: payload,
        isLoading: true,
      };

    case actions.types.SEARCH_GIFS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        term: '',
        data: [...payload],
      };

    case actions.types.SEARCH_GIFS_FAILED:
      return {
        ...state,
        term: '',
        isLoading: false,
        error: {...payload}
      };
    case actions.types.SEARCH_GIFS_CLEAR:
      return {
        ...state,
        data: [],
        term: '',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default searchingGifsReducer;