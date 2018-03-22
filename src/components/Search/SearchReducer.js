import actions from "./SearchActions";

const initialState = {
  loaded: false,
  gifs: []
};

const searchReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.types.SEARCH_COMPLETED:
    case actions.types.FAVORITE_FILTERED:
      return {
        loaded: true,
        gifs: action.payload
      };

    default:
      return state;
  }
};

export default searchReducer;
