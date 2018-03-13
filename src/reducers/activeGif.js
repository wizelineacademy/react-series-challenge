import searchActions from '../actions/search'

const initialState = {};

const activeGif = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case searchActions.types.SEARCH_GIF_SUCCESS: {
      return payload
    }
    default:
      return state;
  }
};

export default activeGif;
