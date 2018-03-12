import searchAction from '../actions/search';

const initialState = [];

const searchGifs = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchAction.types.REQUEST_SEARCH_GIFS_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default searchGifs;
