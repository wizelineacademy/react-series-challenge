import giphy from '../actions/giphy';

const initialState = {
    gif: {},
    fetching: false
};

const giphyReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case giphy.types.GIPHY_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case giphy.types.GIPHY_COMPLETED:
      var gif = {...action.gif}
      return {
        ...state,
        fetching: false,
        gif: {...gif},
      };
    case giphy.types.GIPHY_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default giphyReducer;