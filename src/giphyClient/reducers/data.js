import { RESPONSE_SEARCH_GIFS } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RESPONSE_SEARCH_GIFS:
      return data;
    default:
      return state;
  }
};
