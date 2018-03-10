import actions from "./ImageLoaderActions";

const initialState = {
  loaded: false
};

const imageLoaderReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.types.IMAGE_LOADED:
      return {
        loaded: true
      };

    default:
      return state;
  }
};

export default imageLoaderReducer;
