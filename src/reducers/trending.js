import {FETCH_TRENDING_GIFS_OK} from "../actions/trending";
import {FETCH_SEARCH_GIFS_OK} from "../actions/search";

const trending = (state = [], action) => {
  switch (action.type) {
    case FETCH_SEARCH_GIFS_OK:
    case FETCH_TRENDING_GIFS_OK:
      return action.payload;
    default:
      return state
  }
};

export default trending;
