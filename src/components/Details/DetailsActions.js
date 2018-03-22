import { createAction } from "redux-actions";

const GIF_REQUESTED = "GIF_REQUESTED";
const GIF_LOADED = "GIF_LOADED";
const GIF_FAILED = "GIF_FAILED";

const gifRequested = createAction(GIF_REQUESTED);
const gifLoaded = createAction(GIF_LOADED);
const gifFailed = createAction(GIF_FAILED);

export default {
  types: {
    GIF_REQUESTED,
    GIF_LOADED,
    GIF_FAILED
  },
  creators: {
    gifRequested,
    gifLoaded,
    gifFailed
  }
};
