import {FETCH_TRENDING_GIFS_OK} from "../actions/trending";

const trending = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRENDING_GIFS_OK:
      return action.payload;
    default:
      return state
  }
};

export default trending;
