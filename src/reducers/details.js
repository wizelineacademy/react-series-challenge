import detailsActions from '../actions/details';
const initialState = {
  isLoading: false,
  giphy:{},
  errorMessage: ''
};

const detailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case detailsActions.types.DETAILS_FETCH_START:{
      return {
        ...state,
        isLoading: true,
        giphy:{},
        errorMessage: ''
      }
    }

    case detailsActions.types.DETAILS_FETCH_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        giphy: payload,
        errorMessage: ''
      }
    }
    case detailsActions.types.DETAILS_FETCH_FAIL:{
      return {
        ...state,
        isLoading: false,
        giphy: {},
        errorMessage: payload
      }
    }
    default:
      return state;
  }
};

export default detailsReducer;