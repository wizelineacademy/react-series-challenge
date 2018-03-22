import actions from "./ImageLoaderActions";

const initialState = {
  loaded: {}
};

const imageLoaderReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.types.IMAGE_LOADED: {
      return {
        loaded: {
          ...state.loaded,
          [action.payload]: true
        }
      };
    }

    default:
      return state;
  }
};

export default imageLoaderReducer;
