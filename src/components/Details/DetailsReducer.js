import actions from "./DetailsActions";

const initialState = {
  gif: {},
  loaded: false
};

const detailsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.types.GIF_REQUESTED:
      return {
        ...state,
        loaded: false
      };

    case actions.types.GIF_LOADED:
      return {
        ...state,
        gif: action.payload.gif,
        loaded: true
      };

    case actions.types.GIF_FAILED:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default detailsReducer;
