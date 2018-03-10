import { createAction } from "redux-actions";

const IMAGE_LOADED = "IMAGE_LOADED";

const imageLoaded = createAction(IMAGE_LOADED);

export default {
  types: {
    IMAGE_LOADED
  },
  creators: {
    imageLoaded
  }
};
