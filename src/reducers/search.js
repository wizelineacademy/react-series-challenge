import searchActions from '../actions/search';
const initialState = {
  currentTerm:'',
  isLoading: false,
  giphyArray:[],
  errorMessage: ''
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchActions.types.SEARCH_TERM_UPDATE:{
      return {
        ...state,
        currentTerm: escape(payload)
      }
    }
    case searchActions.types.SEARCH_START:{
      return {
        ...state,
        isLoading: true,
        giphyArray:[],
        errorMessage: ''
      }
    }

    case searchActions.types.SEARCH_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        giphyArray: payload,
        errorMessage: ''
      }
    }
    case searchActions.types.SEARCH_FAIL:{
      return {
        ...state,
        isLoading: false,
        giphyArray: [],
        errorMessage: payload
      }
    }
    default:
      return state;
  }
};

export default searchReducer;