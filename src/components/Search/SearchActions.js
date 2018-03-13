import { createAction } from "redux-actions";

const SEARCH_REQUESTED = "SEARCH_REQUESTED";
const SEARCH_COMPLETED = "SEARCH_COMPLETED";

const FAVORITE_FILTERED = "FAVORITE_FILTERED";

const searchRequested = createAction(SEARCH_REQUESTED);
const searchCompleted = createAction(SEARCH_COMPLETED);

const favoriteFiltered = createAction(FAVORITE_FILTERED);

export default {
  types: {
    SEARCH_REQUESTED,
    SEARCH_COMPLETED,
    FAVORITE_FILTERED
  },
  creators: {
    searchRequested,
    searchCompleted,
    favoriteFiltered
  }
};
