import searchGifsActions from "../actions/searchGifs";

const initialState = {};

const searchGifReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchGifsActions.types.FETCH_SEARCH_GIFS: {
      const newState = payload;
      return newState;
    }
    default:
      return state;
  }
};

export default searchGifReducer;
