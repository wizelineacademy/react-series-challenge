import * as actions from "../actions";

const searchGif = (state = {}, action) => {
  switch (action.type) {
    case actions.SEARCH_RESULT:
      return action.result;
    case actions.SEARCH_EVENT:
      return action.result;
    default:
      return state;
  }
}

export default searchGif;